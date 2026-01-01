# BidHouse API Documentation

> **Base URL:** `http://localhost:3000/api`  
> **Last Updated:** 2026-01-02

---

## 🔐 Authentication

Semua endpoint (kecuali Register & Login) memerlukan header:

```
Authorization: Bearer <token>
```

---

## 📋 Business Flow

### User Journey: Seller (Menjual Barang)

```
1. Register → Login → Get Token
2. Create Item (status: PENDING)
3. Tunggu Admin approve
4. Admin jadwalkan Auction
5. Auction auto-start saat startTime
6. Auction auto-finish saat endTime
7. Lihat hasil di /transactions
```

### User Journey: Buyer (Membeli Barang)

```
1. Register → Login → Get Token
2. Browse /items & /auctions
3. Place Bid di auction ONGOING
4. Jika menang → Transaction dibuat otomatis
5. Bayar via /transactions/:id/pay
```

---

## 🔷 Auth Service

| Method | Endpoint         | Auth | Deskripsi              |
| ------ | ---------------- | ---- | ---------------------- |
| POST   | `/auth/register` | ❌   | Registrasi user baru   |
| POST   | `/auth/login`    | ❌   | Login, dapat token     |
| GET    | `/auth/me`       | ✅   | Profile user logged in |

### Register

```json
POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "08123456789",
  "password": "password123",
  "role": "USER"  // atau "ADMIN"
}
```

### Login

```json
POST /auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

// Response
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "eyJhbGci..."
  }
}
```

---

## 📦 Item Service (Masterdata)

| Method | Endpoint             | Auth | Role  | Deskripsi                |
| ------ | -------------------- | ---- | ----- | ------------------------ |
| GET    | `/items`             | ✅   | Any   | Semua item               |
| GET    | `/items/my`          | ✅   | Any   | Item milik saya          |
| GET    | `/items/:id`         | ✅   | Any   | Detail item              |
| POST   | `/items`             | ✅   | Any   | Buat item baru (PENDING) |
| PUT    | `/items/:id`         | ✅   | Owner | Update item              |
| DELETE | `/items/:id`         | ✅   | Owner | Hapus item               |
| POST   | `/items/:id/approve` | ✅   | Admin | Approve item             |
| POST   | `/items/:id/reject`  | ✅   | Admin | Reject item              |

### Create Item

```json
POST /items
{
  "name": "Vintage Camera",
  "description": "1970s film camera",
  "startingPrice": 500000,
  "categories": ["category-uuid"],
  "images": [
    { "url": "https://...", "isPrimary": true }
  ]
}
```

**Status Flow:** `PENDING` → `APPROVED` / `REJECTED`

---

## 📁 Category Service

| Method | Endpoint          | Auth | Role  | Deskripsi       |
| ------ | ----------------- | ---- | ----- | --------------- |
| GET    | `/categories`     | ✅   | Any   | Semua kategori  |
| GET    | `/categories/:id` | ✅   | Any   | Detail kategori |
| POST   | `/categories`     | ✅   | Admin | Buat kategori   |

---

## 🔨 Auction Service

| Method | Endpoint                  | Auth | Role  | Deskripsi                |
| ------ | ------------------------- | ---- | ----- | ------------------------ |
| GET    | `/auctions`               | ✅   | Any   | Semua auction            |
| GET    | `/auctions/won`           | ✅   | Any   | Auction yang dimenangkan |
| GET    | `/auctions/participating` | ✅   | Any   | Auction yang diikuti     |
| GET    | `/auctions/:id`           | ✅   | Any   | Detail auction           |
| POST   | `/auctions`               | ✅   | Admin | Jadwalkan auction        |
| POST   | `/auctions/:id/start`     | ✅   | Admin | Mulai auction            |
| POST   | `/auctions/:id/finish`    | ✅   | Admin | Selesaikan auction       |

### Schedule Auction (Admin)

```json
POST /auctions
{
  "itemId": "item-uuid",
  "startTime": "2026-01-02T10:00:00Z",
  "endTime": "2026-01-02T12:00:00Z",
  "startingPrice": 500000
}
```

**Status Flow:** `SCHEDULED` → `ONGOING` → `FINISHED`

> ⏰ **Auto-Scheduling:** Auction akan otomatis `ONGOING` saat `startTime` dan otomatis `FINISHED` saat `endTime` via cron job.

---

## 💰 Bid Service

| Method | Endpoint   | Auth | Deskripsi        |
| ------ | ---------- | ---- | ---------------- |
| GET    | `/bids/my` | ✅   | History bid saya |
| POST   | `/bids`    | ✅   | Pasang bid       |

### Place Bid

```json
POST /bids
{
  "auctionId": "auction-uuid",
  "amount": 600000
}
```

**Validasi:**

- Auction harus `ONGOING`
- Amount > startingPrice
- Amount > highest bid saat ini

---

## 💳 Transaction Service

| Method | Endpoint                | Auth | Deskripsi              |
| ------ | ----------------------- | ---- | ---------------------- |
| GET    | `/transactions`         | ✅   | Transaksi saya         |
| GET    | `/transactions/:id`     | ✅   | Detail transaksi       |
| POST   | `/transactions/:id/pay` | ✅   | Tandai sebagai dibayar |

### Pay Transaction

```json
POST /transactions/:id/pay
{
  "paymentMethod": "BANK_TRANSFER"
}
```

**Status Flow:** `PENDING` → `PAID`

---

## 📊 Log Service (Admin Only)

| Method | Endpoint | Auth | Role  | Deskripsi     |
| ------ | -------- | ---- | ----- | ------------- |
| GET    | `/logs`  | ✅   | Admin | Activity logs |

---

## 🔴 Error Responses

```json
// 400 Bad Request
{ "success": false, "message": "Validation error", "errors": {...} }

// 401 Unauthorized
{ "success": false, "message": "Unauthorized" }

// 403 Forbidden
{ "success": false, "message": "Admin only" }

// 404 Not Found
{ "success": false, "message": "Resource not found" }

// 409 Conflict
{ "success": false, "message": "Email already registered" }
```

---

## 🌐 Environment Variables (FE)

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:3003
```

---

## 🔌 WebSocket (Real-time)

**Socket URL:** `http://localhost:3003` (Auction Service langsung, bukan via Gateway)

### Connection

```javascript
import { io } from "socket.io-client";

const socket = io("http://localhost:3003", {
  auth: { token: "Bearer <jwt-token>" },
});
```

### Join/Leave Auction Room

```javascript
// Subscribe ke auction tertentu
socket.emit("join-auction", auctionId);

// Unsubscribe
socket.emit("leave-auction", auctionId);
```

### Events dari Server

| Event              | Payload                                           | Deskripsi       |
| ------------------ | ------------------------------------------------- | --------------- |
| `auction:new-bid`  | `{ auctionId, bidId, amount, userId, timestamp }` | Ada bid baru    |
| `auction:started`  | `{ auctionId, timestamp }`                        | Auction dimulai |
| `auction:finished` | `{ auctionId, winnerId, finalPrice, timestamp }`  | Auction selesai |
| `user:outbid`      | `{ auctionId, newAmount, message }`               | Anda di-outbid! |
| `user:won-auction` | `{ auctionId, finalPrice, message }`              | Anda menang!    |

### Example Usage (React)

```javascript
useEffect(() => {
  socket.on("auction:new-bid", (data) => {
    console.log("New bid:", data.amount);
    setCurrentBid(data.amount);
  });

  socket.on("user:outbid", (data) => {
    alert(data.message);
  });

  return () => {
    socket.off("auction:new-bid");
    socket.off("user:outbid");
  };
}, []);
```

---

## 📱 Recommended FE Pages

1. **Auth:** Login, Register
2. **Home:** Browse Items/Auctions
3. **Item Detail:** View item + auction info
4. **My Items:** User's submitted items
5. **My Bids:** User's bid history
6. **My Auctions:** Won + participating
7. **Transactions:** Payment list
8. **Admin Panel:** Approve items, manage auctions
