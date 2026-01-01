import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import auctionRoutes from './routes/auction.routes.js';
import bidRoutes from './routes/bid.routes.js';
import transactionRoutes from './routes/transaction.routes.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';
import { initScheduler } from './scheduler/auctionScheduler.js';

dotenv.config();

const app = express();
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
  res.status(200).json({ status: 'OK', service: 'auction-service' });
});

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`Auction Service running on port ${PORT}`);
  
  // Initialize auction scheduler
  initScheduler();
});
