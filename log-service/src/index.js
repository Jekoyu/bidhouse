import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import logRoutes from './routes/log.routes.js';
import { connectDB } from './models/mongodb.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';

dotenv.config();

const app = express();
const logger = new Logger('LOG-SERVICE');
const PORT = process.env.PORT || 3004;

// Middleware
app.use(cors());
app.use(express.json());

// Main Function to Connect DB and Start Server
const startServer = async () => {
  try {
    await connectDB();
    
    // Routes
    app.use('/api/logs', logRoutes);

    // Health check
    app.get('/health', (req, res) => {
      res.status(200).json({ status: 'OK', service: 'log-service', database: 'connected' });
    });

    // Error Handling
    app.use(errorHandler);

    app.listen(PORT, () => {
      logger.info(`Log Service running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start Log Service:', error);
    process.exit(1);
  }
};

startServer();
