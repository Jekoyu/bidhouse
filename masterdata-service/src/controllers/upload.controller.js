import * as uploadService from '../services/upload.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const uploadSingle = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error('No file uploaded');
      error.statusCode = 400;
      throw error;
    }

    const result = await uploadService.uploadFile(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      req.body.folder || 'items'
    );

    res.status(200).json(successResponse('File uploaded successfully', result));
  } catch (error) {
    next(error);
  }
};

export const uploadMultiple = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      const error = new Error('No files uploaded');
      error.statusCode = 400;
      throw error;
    }

    const results = await uploadService.uploadMultipleFiles(
      req.files,
      req.body.folder || 'items'
    );

    res.status(200).json(successResponse('Files uploaded successfully', results));
  } catch (error) {
    next(error);
  }
};
