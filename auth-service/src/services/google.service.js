import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/user.repository.js';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

/**
 * Verify Google ID Token and login/register user
 * @param {string} idToken - Google ID Token from frontend
 * @returns {Promise<{user: object, token: string}>}
 */
export const googleLogin = async (idToken) => {
  // Verify the Google ID token
  const ticket = await client.verifyIdToken({
    idToken,
    audience: GOOGLE_CLIENT_ID
  });

  const payload = ticket.getPayload();
  const { email, name, picture, sub: googleId } = payload;

  if (!email) {
    const error = new Error('Email not provided by Google');
    error.statusCode = 400;
    throw error;
  }

  // Check if user exists
  let user = await userRepository.findByEmail(email);

  if (user) {
    // User exists - check if it's an admin (admins can't use Google login)
    if (user.role === 'ADMIN') {
      const error = new Error('Admin accounts cannot use Google login');
      error.statusCode = 403;
      throw error;
    }

    // Update Google ID if not set
    if (!user.googleId) {
      user = await userRepository.update(user.id, {
        googleId,
        avatar: picture
      });
    }
  } else {
    // Create new user with Google data
    user = await userRepository.create({
      name: name || email.split('@')[0],
      email,
      googleId,
      avatar: picture,
      role: 'USER', // Always USER for Google login
      password: null // No password for Google users
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );

  // Remove sensitive data
  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token
  };
};

export default { googleLogin };
