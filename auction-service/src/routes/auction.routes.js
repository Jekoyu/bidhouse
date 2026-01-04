import express from 'express';
import * as auctionController from '../controllers/auction.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ success: false, message: 'Admin only' });
  }
  next();
};

// Public routes (no auth required) - to attract users to browse
router.get('/', auctionController.getAll);
router.get('/:id', auctionController.getDetail);

// Protected routes (requires login)
router.get('/won', authMiddleware, auctionController.getWon);
router.get('/participating', authMiddleware, auctionController.getParticipating);
router.post('/', authMiddleware, checkAdmin, auctionController.create);
router.post('/:id/start', authMiddleware, checkAdmin, auctionController.start);
router.post('/:id/finish', authMiddleware, checkAdmin, auctionController.finish);

export default router;
