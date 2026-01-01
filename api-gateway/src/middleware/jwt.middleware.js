import jwt from 'jsonwebtoken';
import { errorResponse } from '../../../shared/utils/response.js';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // Some routes might be public but want user info if available
    // For now, we assume if standard gateway routes need auth, this middleware is applied
    return res.status(401).json(errorResponse('Unauthorized: No token provided'));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, email, role }
    next();
  } catch (error) {
    return res.status(401).json(errorResponse('Unauthorized: Invalid or expired token'));
  }
};

export default jwtMiddleware;
