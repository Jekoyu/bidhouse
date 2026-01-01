import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import Logger from '../../../shared/utils/logger.js';

const logger = new Logger('SOCKET-SERVER');
let io = null;

/**
 * Initialize Socket.IO server
 * @param {http.Server} httpServer - The HTTP server instance
 */
export const initSocketServer = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: '*', // Configure for production
      methods: ['GET', 'POST']
    }
  });

  // Authentication middleware
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication required'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (err) {
      next(new Error('Invalid token'));
    }
  });

  io.on('connection', (socket) => {
    logger.info(`User connected: ${socket.user.id}`);

    // Join user to their personal room for notifications
    socket.join(`user:${socket.user.id}`);

    // Join auction room
    socket.on('join-auction', (auctionId) => {
      socket.join(`auction:${auctionId}`);
      logger.info(`User ${socket.user.id} joined auction:${auctionId}`);
    });

    // Leave auction room
    socket.on('leave-auction', (auctionId) => {
      socket.leave(`auction:${auctionId}`);
      logger.info(`User ${socket.user.id} left auction:${auctionId}`);
    });

    socket.on('disconnect', () => {
      logger.info(`User disconnected: ${socket.user.id}`);
    });
  });

  logger.info('Socket.IO server initialized');
  return io;
};

/**
 * Get the Socket.IO instance
 */
export const getIO = () => {
  if (!io) {
    throw new Error('Socket.IO not initialized');
  }
  return io;
};

/**
 * Emit new bid to auction room
 */
export const emitNewBid = (auctionId, bidData) => {
  if (!io) return;
  
  io.to(`auction:${auctionId}`).emit('auction:new-bid', {
    auctionId,
    bidId: bidData.id,
    amount: bidData.bidAmount,
    userId: bidData.userId,
    timestamp: new Date().toISOString()
  });

  logger.info(`Emitted new-bid for auction:${auctionId}`);
};

/**
 * Emit outbid notification to specific user
 */
export const emitOutbid = (userId, auctionId, newAmount) => {
  if (!io) return;
  
  io.to(`user:${userId}`).emit('user:outbid', {
    auctionId,
    newAmount,
    message: 'You have been outbid!'
  });

  logger.info(`Emitted outbid notification to user:${userId}`);
};

/**
 * Emit auction started
 */
export const emitAuctionStarted = (auctionId) => {
  if (!io) return;
  
  io.emit('auction:started', {
    auctionId,
    timestamp: new Date().toISOString()
  });

  logger.info(`Emitted auction:started for ${auctionId}`);
};

/**
 * Emit auction finished
 */
export const emitAuctionFinished = (auctionId, winnerId, finalPrice) => {
  if (!io) return;
  
  io.to(`auction:${auctionId}`).emit('auction:finished', {
    auctionId,
    winnerId,
    finalPrice,
    timestamp: new Date().toISOString()
  });

  // Notify winner personally
  if (winnerId) {
    io.to(`user:${winnerId}`).emit('user:won-auction', {
      auctionId,
      finalPrice,
      message: 'Congratulations! You won the auction!'
    });
  }

  logger.info(`Emitted auction:finished for ${auctionId}`);
};

export default {
  initSocketServer,
  getIO,
  emitNewBid,
  emitOutbid,
  emitAuctionStarted,
  emitAuctionFinished
};
