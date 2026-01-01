import { expect, test, describe, beforeAll } from "bun:test";

const BASE_URL = "http://localhost:3000/api";
let userToken = "";
let adminToken = "";
let itemId = "";
let auctionId = "";

describe("BidHouse E2E Integration Tests", () => {
    
    test("Health Check - API Gateway", async () => {
        const res = await fetch("http://localhost:3000/health");
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data.status).toBe("OK");
    });

    test("User Registration", async () => {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Test User",
                email: `test_${Date.now()}@example.com`,
                phone: `08${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "USER"
            })
        });
        expect(res.status).toBe(201);
    });

    test("Admin Registration & Login", async () => {
        const email = `admin_${Date.now()}@example.com`;
        // Register Admin
        await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Admin User",
                email: email,
                phone: `09${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "ADMIN"
            })
        });

        // Login Admin
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: "password123"
            })
        });
        const data = await res.json();
        expect(res.status).toBe(200);
        adminToken = data.data.token;
        expect(adminToken).toBeDefined();
    });

    test("User Login", async () => {
        // We'll use a fixed user for simplicity in this flow if needed, 
        // but let's just register one more
        const email = `user_${Date.now()}@example.com`;
        await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Flow User",
                email: email,
                phone: `07${Date.now().toString().slice(-9)}`,
                password: "password123",
                role: "USER"
            })
        });

        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: "password123"
            })
        });
        const data = await res.json();
        userToken = data.data.token;
        expect(userToken).toBeDefined();
    });

    test("Create Item (User)", async () => {
        const res = await fetch(`${BASE_URL}/items`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify({
                name: "E2E Test Item",
                description: "Testing item creation via script",
                startingPrice: 1000,
                images: [{ url: "http://test.com/img.jpg", isPrimary: true }]
            })
        });
        const data = await res.json();
        expect(res.status).toBe(201);
        itemId = data.data.id;
        expect(itemId).toBeDefined();
    });

    test("Approve Item (Admin)", async () => {
        const res = await fetch(`${BASE_URL}/items/${itemId}/approve`, {
            method: "POST",
            headers: { 
                "Authorization": `Bearer ${adminToken}`
            }
        });
        expect(res.status).toBe(200);
    });

    test("Schedule Auction (Admin)", async () => {
        const res = await fetch(`${BASE_URL}/auctions`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${adminToken}`
            },
            body: JSON.stringify({
                itemId: itemId,
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 3600000).toISOString(),
                startingPrice: 1000
            })
        });
        const data = await res.json();
        expect(res.status).toBe(201);
        auctionId = data.data.id;
    });

    // Note: Start auction might be needed if status is SCHEDULED
    test("Start Auction (Admin)", async () => {
        const res = await fetch(`${BASE_URL}/auctions/${auctionId}/start`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${adminToken}` }
        });
        expect(res.status).toBe(200);
    });

    test("Place Bid (User)", async () => {
        const res = await fetch(`${BASE_URL}/bids`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userToken}`
            },
            body: JSON.stringify({
                auctionId: auctionId,
                amount: 1500
            })
        });
        expect(res.status).toBe(201);
    });

    test("Finish Auction & Determine Winner (Admin)", async () => {
        const res = await fetch(`${BASE_URL}/auctions/${auctionId}/finish`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${adminToken}` }
        });
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data.data.status).toBe("FINISHED");
        expect(data.data.winnerUserId).toBeDefined();
    });

    test("Check Logs (Admin)", async () => {
        const res = await fetch(`${BASE_URL}/logs`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${adminToken}` }
        });
        expect(res.status).toBe(200);
    });
});
