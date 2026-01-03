import axios from 'axios';

const MASTERDATA_SERVICE_URL = process.env.MASTERDATA_SERVICE_URL || 'http://localhost:3002';

/**
 * Fetch item details from Masterdata Service
 * @param {string} itemId - Item ID
 * @returns {Promise<{id: string, name: string, description: string, images: Array} | null>}
 */
export const getItemById = async (itemId) => {
  try {
    // Use internal endpoint that doesn't require auth
    const response = await axios.get(`${MASTERDATA_SERVICE_URL}/api/items/internal/${itemId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Failed to fetch item ${itemId}:`, error.message);
    return null;
  }
};

/**
 * Fetch multiple items by IDs
 * @param {string[]} itemIds - Array of item IDs
 * @returns {Promise<Map<string, {id: string, name: string, description: string, images: Array}>>}
 */
export const getItemsByIds = async (itemIds) => {
  const uniqueIds = [...new Set(itemIds)];
  const itemMap = new Map();

  await Promise.all(
    uniqueIds.map(async (itemId) => {
      const item = await getItemById(itemId);
      if (item) {
        itemMap.set(itemId, item);
      }
    })
  );

  return itemMap;
};

export default { getItemById, getItemsByIds };
