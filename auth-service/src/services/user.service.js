import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/user.repository.js';

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;

export const getAllUsers = async () => {
  return userRepository.findAll();
};

export const getUserById = async (id) => {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const createUser = async (userData) => {
  const { email, phone, password, name, role } = userData;

  // Validate role
  if (role && !['USER', 'ADMIN'].includes(role)) {
    const error = new Error('Invalid role. Must be USER or ADMIN');
    error.statusCode = 400;
    throw error;
  }

  // Check duplicate email
  const existingEmail = await userRepository.findByEmail(email);
  if (existingEmail) {
    const error = new Error('Email already registered');
    error.statusCode = 409;
    throw error;
  }

  // Check duplicate phone
  const existingPhone = await userRepository.findByPhone(phone);
  if (existingPhone) {
    const error = new Error('Phone number already registered');
    error.statusCode = 409;
    throw error;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

  const user = await userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: role || 'USER'
  });

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const updateUser = async (id, userData) => {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  // Prepare update data
  const updateData = {};
  
  if (userData.name) updateData.name = userData.name;
  if (userData.email) updateData.email = userData.email;
  if (userData.phone) updateData.phone = userData.phone;
  if (userData.role) {
    if (!['USER', 'ADMIN'].includes(userData.role)) {
      const error = new Error('Invalid role');
      error.statusCode = 400;
      throw error;
    }
    updateData.role = userData.role;
  }
  if (userData.password) {
    updateData.password = await bcrypt.hash(userData.password, BCRYPT_SALT_ROUNDS);
  }

  const updated = await userRepository.update(id, updateData);
  const { password: _, ...userWithoutPassword } = updated;
  return userWithoutPassword;
};

export const deleteUser = async (id, adminId) => {
  // Prevent self-deletion
  if (id === adminId) {
    const error = new Error('Cannot delete your own account');
    error.statusCode = 400;
    throw error;
  }

  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  await userRepository.remove(id);
  return { message: 'User deleted successfully' };
};
