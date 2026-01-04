import axios from 'axios';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';

/**
 * Get user by ID from Auth Service
 */
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${AUTH_SERVICE_URL}/api/auth/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error.message);
    return null;
  }
};

/**
 * Get multiple users by IDs
 */
export const getUsersByIds = async (userIds) => {
  const uniqueIds = [...new Set(userIds)];
  const userPromises = uniqueIds.map(id => getUserById(id));
  const users = await Promise.all(userPromises);
  
  const userMap = new Map();
  users.forEach((user, index) => {
    if (user) {
      userMap.set(uniqueIds[index], user);
    }
  });
  
  return userMap;
};
