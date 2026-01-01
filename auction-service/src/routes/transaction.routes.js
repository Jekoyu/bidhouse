import express from 'express';
import * as transactionController from '../controllers/transaction.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, transactionController.getAll);
router.get('/:id', authMiddleware, transactionController.getDetail);
router.post('/:id/pay', authMiddleware, transactionController.pay);

export default router;
