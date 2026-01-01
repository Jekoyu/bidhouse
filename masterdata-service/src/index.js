import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import itemRoutes from './routes/item.routes.js';
import categoryRoutes from './routes/category.routes.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';

dotenv.config();

const app = express();
const logger = new Logger('MASTERDATA-SERVICE');
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'masterdata-service' });
});

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`Masterdata Service running on port ${PORT}`);
});
