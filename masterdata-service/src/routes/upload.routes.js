import express from 'express';
import multer from 'multer';
import * as uploadController from '../controllers/upload.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only images
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (jpeg, png, gif, webp)'), false);
    }
  }
});

// Single file upload
router.post('/single', authMiddleware, upload.single('file'), uploadController.uploadSingle);

// Multiple files upload (max 5)
router.post('/multiple', authMiddleware, upload.array('files', 5), uploadController.uploadMultiple);

export default router;
