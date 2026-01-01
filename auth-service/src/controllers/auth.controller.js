import * as authService from '../services/auth.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';

export const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    
    // Log activity
    logActivity({
      service: 'AUTH_SERVICE',
      action: 'REGISTER',
      userId: user.id,
      details: { email: user.email },
      status: 'SUCCESS'
    });

    res.status(201).json(successResponse('User registered successfully', user));
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);

    // Log activity
    logActivity({
      service: 'AUTH_SERVICE',
      action: 'LOGIN',
      userId: user.id,
      details: { email: user.email },
      status: 'SUCCESS'
    });

    res.status(200).json(successResponse('Login successful', { user, token }));
  } catch (error) {
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = await authService.getProfile(req.user.id);
    res.status(200).json(successResponse('User profile retrieved', user));
  } catch (error) {
    next(error);
  }
};
