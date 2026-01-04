import * as itemRepository from '../repositories/item.repository.js';
import * as userService from './user.service.js';

/**
 * Enrich items with seller information
 */
const enrichItemsWithSeller = async (items) => {
  if (!items || items.length === 0) return items;

  const userIds = items.map(item => item.createdBy);
  const userMap = await userService.getUsersByIds(userIds);

  return items.map(item => ({
    ...item,
    seller: userMap.get(item.createdBy) || { id: item.createdBy, name: 'Unknown', email: 'Unknown' }
  }));
};

export const createItem = async (data, user) => {
  // USER creates -> PENDING, ADMIN creates -> APPROVED
  const status = user.role === 'ADMIN' ? 'APPROVED' : 'PENDING';
  
  return itemRepository.create({
    ...data,
    status,
    createdBy: user.id
  });
};

export const getAllItems = async (filters = {}) => {
  const result = await itemRepository.findAll(filters);
  result.data = await enrichItemsWithSeller(result.data);
  return result;
};

export const getMyItems = async (userId, params) => {
  const result = await itemRepository.findByUserId(userId, params);
  result.data = await enrichItemsWithSeller(result.data);
  return result;
};

export const getItemDetail = async (id) => {
  const item = await itemRepository.findById(id);
  if (!item) {
    const error = new Error('Item not found');
    error.statusCode = 404;
    throw error;
  }
  
  // Enrich with seller/owner info
  const seller = await userService.getUserById(item.createdBy);
  return {
    ...item,
    seller: seller || { id: item.createdBy, name: 'Unknown', email: 'Unknown' }
  };
};

import * as uploadService from './upload.service.js';

export const updateItem = async (id, data, user) => {
  const item = await itemRepository.findById(id);
  if (!item) {
    const error = new Error('Item not found');
    error.statusCode = 404;
    throw error;
  }

  // Only owner or admin can update
  if (item.createdBy !== user.id && user.role !== 'ADMIN') {
    const error = new Error('Forbidden');
    error.statusCode = 403;
    throw error;
  }

  // APPROVED or REJECTED items cannot be edited by user (only admin)
  if ((item.status === 'APPROVED' || item.status === 'REJECTED') && user.role !== 'ADMIN') {
    const error = new Error('Cannot edit approved or rejected items');
    error.statusCode = 400;
    throw error;
  }

  // If images are being updated, delete old images from S3
  if (data.images && item.images && item.images.length > 0) {
    // Find images that are not in the new list (deleted or replaced)
    const newImageUrls = data.images.map(img => img.url);
    const imagesToDelete = item.images.filter(img => !newImageUrls.includes(img.imageUrl));

    // Delete from S3
    for (const img of imagesToDelete) {
      await uploadService.deleteFileFromUrl(img.imageUrl);
    }
  }

  return itemRepository.update(id, data);
};

export const approveItem = async (id, adminId) => {
  return itemRepository.update(id, {
    status: 'APPROVED',
    approvedBy: adminId,
    approvedAt: new Date()
  });
};

export const rejectItem = async (id, adminId) => {
  return itemRepository.update(id, {
    status: 'REJECTED',
    approvedBy: adminId,
    approvedAt: new Date()
  });
};

export const deleteItem = async (id, user) => {
  const item = await itemRepository.findById(id);
  if (!item) {
    const error = new Error('Item not found');
    error.statusCode = 404;
    throw error;
  }

  if (item.createdBy !== user.id && user.role !== 'ADMIN') {
    const error = new Error('Forbidden');
    error.statusCode = 403;
    throw error;
  }

  // APPROVED or REJECTED items cannot be deleted by user (only admin)
  if ((item.status === 'APPROVED' || item.status === 'REJECTED') && user.role !== 'ADMIN') {
    const error = new Error('Cannot delete approved or rejected items');
    error.statusCode = 400;
    throw error;
  }

  // Delete all images from S3
  if (item.images && item.images.length > 0) {
    for (const img of item.images) {
      await uploadService.deleteFileFromUrl(img.imageUrl);
    }
  }

  return itemRepository.remove(id);
};
