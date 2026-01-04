import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';
import jwtMiddleware from './middleware/jwt.middleware.js';
import roleMiddleware from './middleware/role.middleware.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';

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

// Proxy configuration helper - only applies fixRequestBody when there's a body
// Proxy configuration helper - only applies fixRequestBody when there's a body
// Proxy configuration helper - only applies fixRequestBody when there's a body
const createServiceProxy = (target) => createProxyMiddleware({
  target,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    // Debug logging
    const contentType = req.headers['content-type'];
    const path = req.url;
    
    if (path.includes('/upload')) {
        logger.info(`[Gateway Upload Debug] Path: ${path}, Content-Type: ${contentType}`);
    }

    // Only fix request body for methods that have body AND are not multipart
    if (req.body && Object.keys(req.body).length > 0 && !contentType?.includes('multipart/form-data')) {
      fixRequestBody(proxyReq, req, res);
    }
  },
  onError: (err, req, res) => {
    logger.error(`Proxy Error: ${err.message}`);
    res.status(500).json({ success: false, message: 'Proxy Error', error: err.message });
  }
});

// --- ROUTES ---

// 1. Auth Service Routes
app.use('/api/auth/me', jwtMiddleware);
app.use('/api/auth', createServiceProxy(AUTH_SERVICE_URL));

// 1b. User Management Routes (Admin Only)
app.use('/api/users', jwtMiddleware, roleMiddleware(['ADMIN']));
app.use('/api/users', createServiceProxy(AUTH_SERVICE_URL));

// 2. Masterdata Service Routes
app.use('/api/items', jwtMiddleware);
app.use('/api/items', createServiceProxy(MASTERDATA_SERVICE_URL));

app.use('/api/categories', jwtMiddleware);
app.use('/api/categories', createServiceProxy(MASTERDATA_SERVICE_URL));

app.use('/api/upload', jwtMiddleware);
app.use('/api/upload', createServiceProxy(MASTERDATA_SERVICE_URL));

// 3. Auction Service Routes
// Public: GET /auctions and GET /auctions/:id (allow browsing without login)
app.get('/api/auctions', createServiceProxy(AUCTION_SERVICE_URL));
app.get('/api/auctions/:id', createServiceProxy(AUCTION_SERVICE_URL));
// Protected auction routes
app.use('/api/auctions', jwtMiddleware);
app.use('/api/auctions', createServiceProxy(AUCTION_SERVICE_URL));

app.use('/api/bids', jwtMiddleware);
app.use('/api/bids', createServiceProxy(AUCTION_SERVICE_URL));

app.use('/api/transactions', jwtMiddleware);
app.use('/api/transactions', createServiceProxy(AUCTION_SERVICE_URL));

// 4. Log Service Routes (Admin Only)
app.use('/api/logs', jwtMiddleware, roleMiddleware(['ADMIN']));
app.use('/api/logs', createServiceProxy(LOG_SERVICE_URL));

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
