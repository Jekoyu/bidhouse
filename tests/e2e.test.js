import { expect, test, describe } from "bun:test";

const BASE_URL = "http://localhost:3000/api";
let userToken = "";
let adminToken = "";
let itemId = "";
let auctionId = "";
let transactionId = "";
let categoryId = "";

// Helper function for requests
const request = async (method, endpoint, body = null, token = null) => {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    
    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);
    
    return fetch(`${BASE_URL}${endpoint}`, options);
};

describe("BidHouse E2E Integration Tests", () => {

    // ========================================
    // SECTION 1: HEALTH CHECKS
    // ========================================
    describe("1. Health Checks", () => {
        test("API Gateway should be running", async () => {
            const res = await fetch("http://localhost:3000/health");
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(data.status).toBe("OK");
        });
    });

    // ========================================
    // SECTION 2: AUTH SERVICE - POSITIVE
    // ========================================
    describe("2. Auth Service - Positive Tests", () => {
        
        test("Register new user successfully", async () => {
            const res = await request("POST", "/auth/register", {
                name: "Test User",
                email: `user_${Date.now()}@example.com`,
                phone: `08${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "USER"
            });
            expect(res.status).toBe(201);
        });

        test("Register admin and login", async () => {
            const email = `admin_${Date.now()}@example.com`;
            await request("POST", "/auth/register", {
                name: "Admin User",
                email,
                phone: `09${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "ADMIN"
            });

            const res = await request("POST", "/auth/login", { email, password: "password123" });
            const data = await res.json();
            expect(res.status).toBe(200);
            adminToken = data.data.token;
            expect(adminToken).toBeDefined();
        });

        test("Register user and login", async () => {
            const email = `flowuser_${Date.now()}@example.com`;
            await request("POST", "/auth/register", {
                name: "Flow User",
                email,
                phone: `07${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "USER"
            });

            const res = await request("POST", "/auth/login", { email, password: "password123" });
            const data = await res.json();
            userToken = data.data.token;
            expect(userToken).toBeDefined();
        });

        test("Get user profile with valid token", async () => {
            const res = await request("GET", "/auth/me", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(data.data.email).toBeDefined();
        });
    });

    // ========================================
    // SECTION 3: AUTH SERVICE - NEGATIVE
    // ========================================
    describe("3. Auth Service - Negative Tests", () => {
        
        test("Login with wrong password should fail", async () => {
            const res = await request("POST", "/auth/login", {
                email: "admin@bidhouse.com",
                password: "wrongpassword"
            });
            expect(res.status).toBe(401);
        });

        test("Login with non-existent email should fail", async () => {
            const res = await request("POST", "/auth/login", {
                email: "nonexistent@example.com",
                password: "password123"
            });
            expect(res.status).toBe(401);
        });

        test("Register duplicate email should fail", async () => {
            const email = `dup_${Date.now()}@example.com`;
            await request("POST", "/auth/register", {
                name: "First User",
                email,
                phone: `06${Date.now().toString().slice(-9)}`,
                password: "password123"
            });

            const res = await request("POST", "/auth/register", {
                name: "Second User",
                email,
                phone: `05${Date.now().toString().slice(-9)}`,
                password: "password123"
            });
            expect(res.status).toBe(409);
        });

        test("Access profile without token should fail", async () => {
            const res = await request("GET", "/auth/me");
            expect(res.status).toBe(401);
        });

        test("Access profile with invalid token should fail", async () => {
            const res = await request("GET", "/auth/me", null, "invalid.token.here");
            expect(res.status).toBe(401);
        });
    });

    // ========================================
    // SECTION 4: CATEGORY SERVICE
    // ========================================
    describe("4. Category Service", () => {
        
        test("Create category (Admin) - should succeed", async () => {
            const res = await request("POST", "/categories", {
                name: `TestCat_${Date.now()}`,
                description: "Test category"
            }, adminToken);
            expect(res.status).toBe(201);
            const data = await res.json();
            categoryId = data.data.id;
        });

        test("Create category (User) - should fail", async () => {
            const res = await request("POST", "/categories", {
                name: `UserCat_${Date.now()}`,
                description: "User trying to create"
            }, userToken);
            expect(res.status).toBe(403);
        });

        test("Get all categories - should succeed", async () => {
            const res = await request("GET", "/categories", null, userToken);
            expect(res.status).toBe(200);
        });
    });

    // ========================================
    // SECTION 5: ITEM SERVICE - POSITIVE
    // ========================================
    describe("5. Item Service - Positive Tests", () => {
        
        test("Create item (User) - should be PENDING", async () => {
            const res = await request("POST", "/items", {
                name: "E2E Item",
                description: "Created by user",
                startingPrice: 1000,
                images: [{ url: "http://test.com/img.jpg", isPrimary: true }]
            }, userToken);
            const data = await res.json();
            expect(res.status).toBe(201);
            expect(data.data.status).toBe("PENDING");
            itemId = data.data.id;
        });

        test("Get all items - should succeed", async () => {
            const res = await request("GET", "/items", null, userToken);
            expect(res.status).toBe(200);
        });

        test("Get my items - should succeed", async () => {
            const res = await request("GET", "/items/my", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(Array.isArray(data.data)).toBe(true);
        });

        test("Get item detail - should succeed", async () => {
            const res = await request("GET", `/items/${itemId}`, null, userToken);
            expect(res.status).toBe(200);
        });

        test("Approve item (Admin) - should succeed", async () => {
            const res = await request("POST", `/items/${itemId}/approve`, null, adminToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(data.data.status).toBe("APPROVED");
        });
    });

    // ========================================
    // SECTION 6: ITEM SERVICE - NEGATIVE
    // ========================================
    describe("6. Item Service - Negative Tests", () => {
        
        test("Create item without token - should fail", async () => {
            const res = await request("POST", "/items", {
                name: "No Token Item",
                description: "Test",
                startingPrice: 100
            });
            expect(res.status).toBe(401);
        });

        test("Approve item (User) - should fail", async () => {
            // Create a new pending item first
            const createRes = await request("POST", "/items", {
                name: "User Approval Test",
                description: "Test",
                startingPrice: 100
            }, userToken);
            const newItemId = (await createRes.json()).data.id;

            const res = await request("POST", `/items/${newItemId}/approve`, null, userToken);
            expect(res.status).toBe(403);
        });

        test("Get non-existent item - should fail", async () => {
            const res = await request("GET", "/items/non-existent-uuid", null, userToken);
            expect(res.status).toBe(404);
        });
    });

    // ========================================
    // SECTION 7: AUCTION SERVICE - POSITIVE
    // ========================================
    describe("7. Auction Service - Positive Tests", () => {
        
        test("Schedule auction (Admin) - should succeed", async () => {
            const res = await request("POST", "/auctions", {
                itemId,
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 3600000).toISOString(),
                startingPrice: 1000
            }, adminToken);
            const data = await res.json();
            expect(res.status).toBe(201);
            auctionId = data.data.id;
        });

        test("Start auction (Admin) - should succeed", async () => {
            const res = await request("POST", `/auctions/${auctionId}/start`, null, adminToken);
            expect(res.status).toBe(200);
        });

        test("Place bid (User) - should succeed", async () => {
            const res = await request("POST", "/bids", {
                auctionId,
                amount: 1500
            }, userToken);
            expect(res.status).toBe(201);
        });

        test("Place higher bid (User) - should succeed", async () => {
            const res = await request("POST", "/bids", {
                auctionId,
                amount: 2000
            }, userToken);
            expect(res.status).toBe(201);
        });

        test("Finish auction (Admin) - should determine winner", async () => {
            const res = await request("POST", `/auctions/${auctionId}/finish`, null, adminToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(data.data.status).toBe("FINISHED");
            expect(data.data.winnerUserId).toBeDefined();
        });

        test("Get my bids - should succeed", async () => {
            const res = await request("GET", "/bids/my", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(Array.isArray(data.data)).toBe(true);
        });

        test("Get won auctions - should succeed", async () => {
            const res = await request("GET", "/auctions/won", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(Array.isArray(data.data)).toBe(true);
        });

        test("Get participating auctions - should succeed", async () => {
            const res = await request("GET", "/auctions/participating", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(Array.isArray(data.data)).toBe(true);
        });
    });

    // ========================================
    // SECTION 8: AUCTION SERVICE - NEGATIVE
    // ========================================
    describe("8. Auction Service - Negative Tests", () => {
        
        test("Schedule auction (User) - should fail", async () => {
            const res = await request("POST", "/auctions", {
                itemId,
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 3600000).toISOString(),
                startingPrice: 500
            }, userToken);
            expect(res.status).toBe(403);
        });

        test("Place bid on finished auction - should fail", async () => {
            const res = await request("POST", "/bids", {
                auctionId,
                amount: 5000
            }, userToken);
            expect(res.status).toBe(400);
        });

        test("Start non-existent auction - should fail", async () => {
            const res = await request("POST", "/auctions/fake-id/start", null, adminToken);
            expect([400, 404, 500]).toContain(res.status);
        });
    });

    // ========================================
    // SECTION 9: TRANSACTION SERVICE
    // ========================================
    describe("9. Transaction Service", () => {
        
        test("Get user transactions - should succeed", async () => {
            const res = await request("GET", "/transactions", null, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            if (data.data.length > 0) {
                transactionId = data.data[0].id;
            }
        });

        test("Pay transaction - should succeed", async () => {
            if (!transactionId) {
                console.log("Skipping: No transaction found");
                return;
            }
            const res = await request("POST", `/transactions/${transactionId}/pay`, {
                paymentMethod: "BANK_TRANSFER"
            }, userToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(data.data.status).toBe("PAID");
        });

        test("Pay already paid transaction - should fail", async () => {
            if (!transactionId) return;
            const res = await request("POST", `/transactions/${transactionId}/pay`, {
                paymentMethod: "BANK_TRANSFER"
            }, userToken);
            expect(res.status).toBe(400);
        });
    });

    // ========================================
    // SECTION 10: LOG SERVICE
    // ========================================
    describe("10. Log Service", () => {
        
        test("Get logs (Admin) - should succeed", async () => {
            const res = await request("GET", "/logs", null, adminToken);
            expect(res.status).toBe(200);
            const data = await res.json();
            expect(Array.isArray(data.data)).toBe(true);
        });

        test("Get logs (User) - should fail", async () => {
            const res = await request("GET", "/logs", null, userToken);
            expect(res.status).toBe(403);
        });

        test("Get logs without token - should fail", async () => {
            const res = await request("GET", "/logs");
            expect(res.status).toBe(401);
        });
    });
});
