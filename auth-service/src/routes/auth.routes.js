import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import * as googleController from '../controllers/google.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/google', googleController.googleLogin);

// Internal route for inter-service communication (no auth required)
router.get('/user/:id', authController.getUserById);

// Protected routes
router.get('/me', authMiddleware, authController.me);

export default router;
