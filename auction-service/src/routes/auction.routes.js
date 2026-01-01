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

router.get('/', authMiddleware, auctionController.getAll);
router.get('/won', authMiddleware, auctionController.getWon);
router.get('/participating', authMiddleware, auctionController.getParticipating);
router.get('/:id', authMiddleware, auctionController.getDetail);
router.post('/', authMiddleware, checkAdmin, auctionController.create);
router.post('/:id/start', authMiddleware, checkAdmin, auctionController.start);
router.post('/:id/finish', authMiddleware, checkAdmin, auctionController.finish);

export default router;
