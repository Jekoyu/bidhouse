import { errorResponse } from '../../../shared/utils/response.js';

/**
 * Role-based Authorization Middleware
 * @param {string[]} allowedRoles - Roles allowed to access the route
 */
const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json(errorResponse('Forbidden: No role identified'));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json(errorResponse('Forbidden: Insufficient permissions'));
    }

    next();
  };
};

export default roleMiddleware;
