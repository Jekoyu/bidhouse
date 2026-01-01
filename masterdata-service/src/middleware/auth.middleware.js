import jwt from 'jsonwebtoken';
import { errorResponse } from '../../../shared/utils/response.js';

const JWT_SECRET = process.env.JWT_SECRET || 'bidhouse-super-secret-key-2026';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json(errorResponse('Unauthorized: No token provided'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(errorResponse('Unauthorized: Invalid or expired token'));
  }
};

export default authMiddleware;
