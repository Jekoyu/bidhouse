import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import jwtMiddleware from './middleware/jwt.middleware.js';
import roleMiddleware from './middleware/role.middleware.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const logger = new Logger('API-GATEWAY');
const PORT = process.env.PORT || 3000;

// Service URLs
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
const MASTERDATA_SERVICE_URL = process.env.MASTERDATA_SERVICE_URL || 'http://localhost:3002';
const AUCTION_SERVICE_URL = process.env.AUCTION_SERVICE_URL || 'http://localhost:3003';
const LOG_SERVICE_URL = process.env.LOG_SERVICE_URL || 'http://localhost:3004';

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// --- ROUTES ---

// 1. Auth Service Routes
// Register and Login are public
app.use('/api/auth/register', authRoutes);
app.use('/api/auth/login', authRoutes);
// Profile (/me) needs JWT
app.use('/api/auth/me', jwtMiddleware, createProxyMiddleware({
  target: AUTH_SERVICE_URL,
  changeOrigin: true
}));

// 2. Masterdata Service Routes
app.use('/api/items', jwtMiddleware, createProxyMiddleware({
  target: MASTERDATA_SERVICE_URL,
  changeOrigin: true
}));
app.use('/api/categories', jwtMiddleware, createProxyMiddleware({
  target: MASTERDATA_SERVICE_URL,
  changeOrigin: true
}));

// 3. Auction Service Routes
app.use('/api/auctions', jwtMiddleware, createProxyMiddleware({
  target: AUCTION_SERVICE_URL,
  changeOrigin: true
}));
app.use('/api/bids', jwtMiddleware, createProxyMiddleware({
  target: AUCTION_SERVICE_URL,
  changeOrigin: true
}));
app.use('/api/transactions', jwtMiddleware, createProxyMiddleware({
  target: AUCTION_SERVICE_URL,
  changeOrigin: true
}));

// 4. Log Service Routes (Admin Only)
app.use('/api/logs', jwtMiddleware, roleMiddleware(['ADMIN']), createProxyMiddleware({
  target: LOG_SERVICE_URL,
  changeOrigin: true
}));

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'api-gateway' });
});

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`API Gateway running on port ${PORT}`);
});
