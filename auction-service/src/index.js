import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import auctionRoutes from './routes/auction.routes.js';
import bidRoutes from './routes/bid.routes.js';
import transactionRoutes from './routes/transaction.routes.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';
import { initScheduler } from './scheduler/auctionScheduler.js';
import { initSocketServer } from './socket/socketServer.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const logger = new Logger('AUCTION-SERVICE');
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auctions', auctionRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'auction-service', websocket: true });
});

// Error Handling
app.use(errorHandler);

// Start Server with Socket.IO
httpServer.listen(PORT, () => {
  logger.info(`Auction Service running on port ${PORT}`);
  
  // Initialize Socket.IO
  initSocketServer(httpServer);
  
  // Initialize auction scheduler
  initScheduler();
});
