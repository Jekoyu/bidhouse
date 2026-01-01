import express from 'express';
import * as logController from '../controllers/log.controller.js';

const router = express.Router();

// Internal service route to create logs (should be protected in prod)
router.post('/', logController.create);

// Admin routes to view logs
router.get('/', logController.getAll);
router.get('/user/:userId', logController.getByUser);

export default router;
