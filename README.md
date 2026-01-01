# BidHouse - Online Auction System

Sistem Rumah Lelang Online dengan arsitektur **Microservices** menggunakan **Express.js**, **Prisma**, dan **MariaDB/MongoDB**.

## 🏗️ Architecture

```
Frontend → API Gateway → [Auth, Masterdata, Auction, Log] Services
```

### Services:

- **API Gateway** (Port 3000) - Entry point & routing
- **Auth Service** (Port 3001) - Authentication & JWT
- **Masterdata Service** (Port 3002) - Item management & approval
- **Auction Service** (Port 3003) - Auction, bidding, transactions
- **Log Service** (Port 3004) - Activity logging (MongoDB)

## 🚀 Quick Start

### Prerequisites

- **Bun** runtime installed
- **MariaDB** server running (3 databases required)
- **MongoDB** server running (1 database required)

### Database Setup

#### MariaDB

```sql
CREATE DATABASE bidhouse_auth;
CREATE DATABASE bidhouse_masterdata;
CREATE DATABASE bidhouse_auction;
```

#### MongoDB

Database `bidhouse_logs` will be created automatically.

### Installation

1. **Clone & Install Dependencies**

```bash
# Install all services dependencies
cd auth-service && bun install && cd ..
cd api-gateway && bun install && cd ..
cd masterdata-service && bun install && cd ..
cd auction-service && bun install && cd ..
cd log-service && bun install && cd ..
```

2. **Configure Environment**

```bash
# Copy .env.example to .env for each service
cp auth-service/.env.example auth-service/.env
cp api-gateway/.env.example api-gateway/.env
cp masterdata-service/.env.example masterdata-service/.env
cp auction-service/.env.example auction-service/.env
cp log-service/.env.example log-service/.env

# Edit each .env file with your database credentials
```

3. **Run Database Migrations**

```bash
# Auth Service
cd auth-service
bun run prisma:generate
bun run prisma:migrate
cd ..

# Masterdata Service
cd masterdata-service
bun run prisma:generate
bun run prisma:migrate
cd ..

# Auction Service
cd auction-service
bun run prisma:generate
bun run prisma:migrate
cd ..
```

### Running Services

**Development Mode (separate terminals):**

```bash
# Terminal 1 - API Gateway
bun run dev:gateway

# Terminal 2 - Auth Service
bun run dev:auth

# Terminal 3 - Masterdata Service
bun run dev:masterdata

# Terminal 4 - Auction Service
bun run dev:auction

# Terminal 5 - Log Service
bun run dev:log
```

**Or run individually:**

```bash
cd auth-service && bun run dev
cd api-gateway && bun run dev
# ... etc
```

## 📁 Project Structure

```
BidHouse/
├── shared/                 # Shared utilities
│   ├── middleware/         # Error handler
│   └── utils/             # Response formatter, logger
├── api-gateway/           # API Gateway (Port 3000)
├── auth-service/          # Auth Service (Port 3001)
├── masterdata-service/    # Masterdata Service (Port 3002)
├── auction-service/       # Auction Service (Port 3003)
└── log-service/           # Log Service (Port 3004)
```

## 🔑 Environment Variables

See `.env.example` in each service folder for required configuration.

**Critical:** `JWT_SECRET` must be the same in `auth-service` and `api-gateway`.

## 📚 API Documentation

API documentation will be available via Postman Collection (coming soon).

### Base URLs:

- API Gateway: `http://localhost:3000`
- Auth Service: `http://localhost:3001`
- Masterdata Service: `http://localhost:3002`
- Auction Service: `http://localhost:3003`
- Log Service: `http://localhost:3004`

## 🔐 Authentication

All requests (except register/login) require JWT token:

```
Authorization: Bearer <your-jwt-token>
```

## 👥 Roles

- **ADMIN** - Full access (approve items, create auctions, etc.)
- **USER** - Limited access (create items, place bids, etc.)

## 📝 Development Guidelines

- Business logic belongs in **services**, not controllers
- Use Prisma transactions for critical operations (bidding, winner determination)
- All responses use standard format (see `shared/utils/response.js`)
- Errors are handled centrally (see `shared/middleware/errorHandler.js`)

## 🛠️ Tech Stack

- **Runtime**: Bun
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: MariaDB (Auth, Masterdata, Auction)
- **NoSQL**: MongoDB (Log Service)
- **Auth**: JWT

## 📖 License

ISC
