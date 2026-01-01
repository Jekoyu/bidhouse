import * as itemRepository from '../repositories/item.repository.js';

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
  return itemRepository.findAll(filters);
};

export const getMyItems = async (userId) => {
  return itemRepository.findByUserId(userId);
};

export const getItemDetail = async (id) => {
  const item = await itemRepository.findById(id);
  if (!item) {
    const error = new Error('Item not found');
    error.statusCode = 404;
    throw error;
  }
  return item;
};

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

  return itemRepository.remove(id);
};
