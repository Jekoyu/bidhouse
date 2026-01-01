import express from 'express';
import * as itemController from '../controllers/item.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
// roleMiddleware removed as it caused cross-service dependency issues. Using local checkAdmin instead.

// For microservices, we should probably have a local role middleware or pass roles via headers
// But since Gateway already verified, we can trust the req.user
const router = express.Router();

const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ success: false, message: 'Admin only' });
  }
  next();
};

router.get('/', authMiddleware, itemController.getAll);
router.get('/:id', authMiddleware, itemController.getDetail);
router.post('/', authMiddleware, itemController.create);
router.put('/:id', authMiddleware, itemController.update);
router.delete('/:id', authMiddleware, itemController.remove);

// Admin only
router.post('/:id/approve', authMiddleware, checkAdmin, itemController.approve);
router.post('/:id/reject', authMiddleware, checkAdmin, itemController.reject);

export default router;
