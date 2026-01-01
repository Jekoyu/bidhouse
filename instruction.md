# BACKEND AI AGENT – MICROSERVICES

## SISTEM RUMAH LELANG ONLINE

Dokumen ini adalah **SATU-SATUNYA INSTRUKSI** untuk AI Agent.
AI Agent bertindak sebagai **Backend Engineer** dan **WAJIB membangun sistem dalam bentuk MICROSERVICES**.

Tidak boleh ada asumsi di luar dokumen ini.

---

## 1. PERAN AI AGENT

Kamu adalah **AI Backend Engineer** dengan fokus:

- REST API
- Microservices architecture
- Business logic lelang
- PostgreSQL & MongoDB
- JWT Authentication

❌ Tidak mengerjakan frontend  
❌ Tidak mengubah arsitektur menjadi monolith

---

## 2. ARSITEKTUR MICROSERVICES (WAJIB)

### 2.1 Daftar Service

1. **API Gateway**
2. **Auth Service**
3. **Masterdata Service**
4. **Auction Service**
5. **Log Service**

Frontend **HANYA** berkomunikasi dengan **API Gateway**.

---

## 3. TANGGUNG JAWAB TIAP SERVICE

### 3.1 API Gateway

- Entry point tunggal
- Validasi JWT
- Validasi role
- Routing request
- Tidak menyimpan business logic

---

### 3.2 Auth Service

- Register user
- Login user
- Generate JWT

Database:

- PostgreSQL → `users`

---

### 3.3 Masterdata Service

- CRUD item
- Approval / reject item
- Kelola kategori & gambar item

Aturan:

- User submit → `PENDING`
- Admin submit → `APPROVED`
- Approval hanya ADMIN

Database:

- `items`
- `item_categories`
- `item_category_maps`
- `item_images`

---

### 3.4 Auction Service

- Jadwal lelang
- Proses bid
- Tentukan pemenang
- Histori lelang
- Transaksi pembayaran

Aturan KRITIS:

- Auction hanya untuk item `APPROVED`
- Bid hanya saat `ONGOING`
- Bid harus lebih besar dari bid tertinggi
- Pemenang = bid tertinggi
- 1 auction = 1 pemenang

Database:

- `auctions`
- `bids`
- `user_auction_history`
- `transactions`

---

### 3.5 Log Service

- Simpan log aktivitas
- Asynchronous
- Tidak mempengaruhi flow utama

Database:

- MongoDB

Event wajib:

- Login
- Create / update / delete item
- Approve / reject item
- Bid masuk
- Auction selesai
- Transaksi

---

## 4. ROLE & AUTHORIZATION

Role:

- `ADMIN`
- `USER`

Aturan:

- Role diambil dari JWT
- Dicek di API Gateway
- User tidak boleh akses data user lain

---

## 5. BUSINESS FLOW WAJIB

### Pengajuan Item

- USER → `PENDING`
- ADMIN → `APPROVED`

### Approval

- Hanya ADMIN
- Setelah approve → boleh dijadwalkan

### Lelang

- `SCHEDULED` → `ONGOING` → `FINISHED`
- Sistem selalu tahu bid tertinggi

### Pemenang

- Otomatis saat selesai
- Isi `winner_user_id` & `final_price`

---

## 6. DATABASE SCHEMA (TIDAK BOLEH DIUBAH)

### users

- id (uuid, PK)
- name
- phone (unique)
- email (unique)
- password
- role (ADMIN, USER)
- is_active
- created_at
- updated_at

---

### items

- id
- name
- description
- starting_price
- status (PENDING, APPROVED, REJECTED)
- created_by
- approved_by
- approved_at
- created_at
- updated_at

---

### item_categories

- id
- name
- description
- created_at
- updated_at

---

### item_category_maps

- id
- item_id
- category_id
- created_at

---

### item_images

- id
- item_id
- image_url
- is_primary
- created_at

---

### auctions

- id
- item_id
- start_time
- end_time
- status (SCHEDULED, ONGOING, FINISHED)
- starting_price
- final_price
- winner_user_id
- created_by
- created_at
- updated_at

---

### bids

- id
- auction_id
- user_id
- bid_amount
- created_at

---

### user_auction_history

- id
- user_id
- auction_id
- last_bid_amount
- is_winner
- created_at

---

### transactions

- id
- auction_id
- user_id
- amount
- status (PENDING, PAID, FAILED)
- payment_method
- paid_at
- created_at

---

### notifications

- id
- user_id
- channel (EMAIL, WHATSAPP)
- title
- message
- is_sent
- is_read
- created_at

---

## 7. API RULES

- REST API
- JSON only
- JWT required (kecuali login & register)

### Response sukses

```json
{
  "success": true,
  "message": "OK",
  "data": {}
}
Response error
json
Copy code
{
  "success": false,
  "message": "Error",
  "errors": {}
}
8. SECURITY RULES
Password wajib hash

JWT diverifikasi

Gunakan database transaction untuk:

Bid

Penentuan pemenang

9. STRUKTUR KODE PER SERVICE
routes

controller

service (business logic)

repository / model

middleware

❌ Business logic di controller DILARANG

10. LARANGAN KERAS
❌ Monolith
❌ Menggabungkan service
❌ Menghilangkan API Gateway
❌ Mengubah mekanisme lelang
❌ Menghilangkan approval admin

END OF DOCUMENT
yaml
Copy code

---

## 🔥 Ini sekarang apa?
✔️ **Benar-benar SATU file MD**
✔️ **Tidak referensi ke dokumen lain**
✔️ **Microservices dikunci**
✔️ **Backend AI Agent siap kerja**
✔️ **Aman untuk tugas besar & real system**

---

Kalau mau lanjut, opsi berikut tinggal pilih:
1️⃣ Generate **struktur folder microservices**
2️⃣ Generate **API Gateway routing map**
3️⃣ Generate **Docker Compose microservices**
4️⃣ Generate **NestJS / Express / Laravel API skeleton**
5️⃣ Generate **Swagger OpenAPI otomatis**

Tinggal bilang angka → aku lanjutkan 🚀
```
