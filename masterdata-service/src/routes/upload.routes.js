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
    console.log(`[Upload Debug] Incoming file: ${file.originalname}, Mimetype: ${file.mimetype}`);
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      console.log(`[Upload Debug] Rejected file type: ${file.mimetype}`);
      const error = new Error(`Only image files are allowed. Received: ${file.mimetype}`);
      error.statusCode = 400;
      cb(error, false);
    }
  }
});

// Single file upload
router.post('/single', authMiddleware, upload.single('file'), uploadController.uploadSingle);

// Multiple files upload (max 5)
router.post('/multiple', authMiddleware, upload.array('files', 5), uploadController.uploadMultiple);

// Delete file from S3
router.delete('/', authMiddleware, uploadController.deleteFile);

export default router;
