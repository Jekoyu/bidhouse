import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/user.repository.js';

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';

export const register = async (userData) => {
  const { email, phone, password, name, role } = userData;

  // Check if user exists
  const existingEmail = await userRepository.findByEmail(email);
  if (existingEmail) {
    const error = new Error('Email already registered');
    error.statusCode = 409;
    throw error;
  }

  const existingPhone = await userRepository.findByPhone(phone);
  if (existingPhone) {
    const error = new Error('Phone number already registered');
    error.statusCode = 409;
    throw error;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  // Create user
  const user = await userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: role || 'USER'
  });

  // Remove password from response
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const login = async (email, password) => {
  const user = await userRepository.findByEmail(email);
  if (!user || !user.isActive) {
    const error = new Error('Invalid credentials or account inactive');
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const error = new Error('Invalid credentials');
    error.statusCode = 401;
    throw error;
  }

  // Generate JWT
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );

  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};

export const getProfile = async (id) => {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
