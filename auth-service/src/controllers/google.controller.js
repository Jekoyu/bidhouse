import * as googleService from '../services/google.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';

export const googleLogin = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      const error = new Error('Google ID token is required');
      error.statusCode = 400;
      throw error;
    }

    const result = await googleService.googleLogin(idToken);

    logActivity({
      service: 'AUTH_SERVICE',
      action: 'GOOGLE_LOGIN',
      userId: result.user.id,
      details: { email: result.user.email },
      status: 'SUCCESS'
    });

    res.status(200).json(successResponse('Google login successful', result));
  } catch (error) {
    next(error);
  }
};
