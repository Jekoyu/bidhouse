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

## � Pagination & Filtering

Endpoints dengan list (getAll) mendukung query parameters berikut:

| Endpoint    | Query Params                        | Contoh                                           |
| ----------- | ----------------------------------- | ------------------------------------------------ |
| `/items`    | `search`, `status`, `page`, `limit` | `?search=camera&status=APPROVED&page=1&limit=10` |
| `/auctions` | `status`, `page`, `limit`           | `?status=ONGOING&page=1&limit=10`                |
| `/users`    | `search`, `role`, `page`, `limit`   | `?search=john&role=ADMIN&page=1`                 |

**Response format dengan pagination:**

```json
{
  "success": true,
  "message": "Items retrieved",
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "totalPages": 5
  }
}
```

---

## 🔷 Auth Service

| Method | Endpoint         | Auth | Deskripsi              |
| ------ | ---------------- | ---- | ---------------------- |
| POST   | `/auth/register` | ❌   | Registrasi user baru   |
| POST   | `/auth/login`    | ❌   | Login, dapat token     |
| POST   | `/auth/google`   | ❌   | Login via Google OAuth |
| GET    | `/auth/me`       | ✅   | Profile user logged in |

### Register

```json
POST /auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "08123456789",
  "password": "password123"
}
```

> ⚠️ **Note:** Role selalu `USER`. Untuk buat Admin, gunakan `/api/users` (Admin only).

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

## � User Management (Admin Only)

| Method | Endpoint     | Auth     | Deskripsi                   |
| ------ | ------------ | -------- | --------------------------- |
| GET    | `/users`     | ✅ Admin | List semua user (paginated) |
| GET    | `/users/:id` | ✅ Admin | Detail user                 |
| POST   | `/users`     | ✅ Admin | **Buat user (bisa ADMIN!)** |
| PUT    | `/users/:id` | ✅ Admin | Update user                 |
| DELETE | `/users/:id` | ✅ Admin | Hapus user                  |

### Create User (Admin Only)

```json
POST /users
{
  "name": "New Admin",
  "email": "admin2@bidhouse.com",
  "phone": "08123456789",
  "password": "password123",
  "role": "ADMIN"  // atau "USER"
}
```

---

## 📦 Item Service (Masterdata)

| Method | Endpoint             | Auth | Role  | Deskripsi                |
| ------ | -------------------- | ---- | ----- | ------------------------ |
| GET    | `/items`             | ✅   | Any   | Semua item (paginated)   |
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
    { "url": "https://s3.jekoyu.dev/bidhouse/items/xxx.jpg", "isPrimary": true }
  ]
}
```

**Status Flow:** `PENDING` → `APPROVED` / `REJECTED`

> ⚠️ **Edit/Delete Rules:**
>
> - `PENDING` → Owner bisa edit/delete ✅
> - `APPROVED` → Owner TIDAK bisa edit/delete ❌ (Admin only)
> - `REJECTED` → Owner TIDAK bisa edit/delete ❌ (Admin only)

---

## 📤 Upload Service

| Method | Endpoint           | Auth | Deskripsi                  |
| ------ | ------------------ | ---- | -------------------------- |
| POST   | `/upload/single`   | ✅   | Upload satu file           |
| POST   | `/upload/multiple` | ✅   | Upload banyak file (max 5) |

### Upload Single File

```
POST /upload/single
Content-Type: multipart/form-data

file: <image file>
folder: items  (optional, default: items)
```

**Response:**

```json
{
  "success": true,
  "data": {
    "url": "https://s3.jekoyu.dev/bidhouse/items/abc123.jpg",
    "key": "items/abc123.jpg"
  }
}
```

### Upload Multiple Files

```
POST /upload/multiple
Content-Type: multipart/form-data

files: <image files> (max 5)
folder: items  (optional)
```

### Upload Flow untuk Item:

```
1. POST /upload/single → Dapat URL
2. POST /items dengan URL dari langkah 1
```

**Constraints:**

- Max file size: **5MB**
- Allowed types: `jpeg`, `png`, `gif`, `webp`

---

## 📁 Category Service

| Method | Endpoint          | Auth | Role  | Deskripsi       |
| ------ | ----------------- | ---- | ----- | --------------- |
| GET    | `/categories`     | ✅   | Any   | Semua kategori  |
| GET    | `/categories/:id` | ✅   | Any   | Detail kategori |
| POST   | `/categories`     | ✅   | Admin | Buat kategori   |

---

## 🔨 Auction Service

| Method | Endpoint                  | Auth | Role  | Deskripsi                 |
| ------ | ------------------------- | ---- | ----- | ------------------------- |
| GET    | `/auctions`               | ✅   | Any   | Semua auction (paginated) |
| GET    | `/auctions/won`           | ✅   | Any   | Auction yang dimenangkan  |
| GET    | `/auctions/participating` | ✅   | Any   | Auction yang diikuti      |
| GET    | `/auctions/:id`           | ✅   | Any   | Detail auction            |
| POST   | `/auctions`               | ✅   | Admin | Jadwalkan auction         |
| POST   | `/auctions/:id/start`     | ✅   | Admin | Mulai auction             |
| POST   | `/auctions/:id/finish`    | ✅   | Admin | Selesaikan auction        |

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

> ⏰ **Auto-Scheduling:** Auction otomatis `ONGOING` saat `startTime` dan `FINISHED` saat `endTime` via cron job.

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
{ "success": false, "message": "Validation error" }

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

**Socket URL:** `http://localhost:3003` (Direct ke Auction Service)

### Connection

```javascript
import { io } from "socket.io-client";

const socket = io("http://localhost:3003", {
  auth: { token: "Bearer <jwt-token>" },
});
```

### Join/Leave Auction Room

```javascript
socket.emit("join-auction", auctionId);
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

---

## 📱 Recommended FE Pages

1. **Auth:** Login, Register
2. **Home:** Browse Items/Auctions
3. **Item Detail:** View item + auction info
4. **My Items:** User's submitted items
5. **My Bids:** User's bid history
6. **My Auctions:** Won + participating
7. **Transactions:** Payment list
8. **Admin Panel:** Approve items, manage auctions, manage users
