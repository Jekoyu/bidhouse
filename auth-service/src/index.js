import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import errorHandler from '../../shared/middleware/errorHandler.js';
import Logger from '../../shared/utils/logger.js';

dotenv.config();

const app = express();
const logger = new Logger('AUTH-SERVICE');
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'auth-service' });
});

// Error Handling
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`Auth Service running on port ${PORT}`);
});
