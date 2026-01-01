import { errorResponse } from '../utils/response.js';

/**
 * Global Error Handler Middleware
 * Catches all errors and returns standardized error response
 */
const errorHandler = (err, req, res, next) => {
  // Log error for debugging
  console.error('Error:', err);

  // Default error
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = err.errors || null;

  // Handle specific error types
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    errors = err.details || err.errors;
  }

  if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Unauthorized';
  }

  if (err.name === 'ForbiddenError') {
    statusCode = 403;
    message = 'Forbidden';
  }

  if (err.code === 'P2002') { // Prisma unique constraint
    statusCode = 409;
    message = 'Duplicate entry';
    errors = { field: err.meta?.target };
  }

  if (err.code === 'P2025') { // Prisma record not found
    statusCode = 404;
    message = 'Record not found';
  }

  // Send error response
  res.status(statusCode).json(errorResponse(message, errors));
};

export default errorHandler;
