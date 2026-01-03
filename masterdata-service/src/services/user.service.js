import axios from 'axios';

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:3001';

/**
 * Fetch user details from Auth Service
 * @param {string} userId - User ID
 * @returns {Promise<{id: string, name: string, email: string} | null>}
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
 * Fetch multiple users by IDs
 * @param {string[]} userIds - Array of user IDs
 * @returns {Promise<Map<string, {id: string, name: string, email: string}>>}
 */
export const getUsersByIds = async (userIds) => {
  const uniqueIds = [...new Set(userIds)];
  const userMap = new Map();

  await Promise.all(
    uniqueIds.map(async (userId) => {
      const user = await getUserById(userId);
      if (user) {
        userMap.set(userId, user);
      }
    })
  );

  return userMap;
};

export default { getUserById, getUsersByIds };
