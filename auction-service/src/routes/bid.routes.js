import express from 'express';
import * as bidController from '../controllers/bid.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, bidController.placeBid);

export default router;
