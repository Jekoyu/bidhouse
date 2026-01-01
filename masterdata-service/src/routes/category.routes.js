import express from 'express';
import * as categoryController from '../controllers/category.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ success: false, message: 'Admin only' });
  }
  next();
};

router.get('/', authMiddleware, categoryController.getAll);
router.get('/:id', authMiddleware, categoryController.getDetail);
router.post('/', authMiddleware, checkAdmin, categoryController.create);

export default router;
