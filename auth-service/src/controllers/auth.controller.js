import * as authService from '../services/auth.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(successResponse('User registered successfully', user));
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
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
