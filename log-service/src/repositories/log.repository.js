import { getDB } from '../models/mongodb.js';

const COLLECTION_NAME = 'logs';

export const create = async (logData) => {
  const db = getDB();
  return db.collection(COLLECTION_NAME).insertOne({
    ...logData,
    createdAt: new Date()
  });
};

export const findAll = async ({ 
  page = 1, 
  limit = 20, 
  service, 
  action, 
  userId,
  startDate,
  endDate 
} = {}) => {
  const db = getDB();
  
  // Build query with filters
  const query = {};
  
  if (service) query.service = service;
  if (action) query.action = action;
  if (userId) query.userId = userId;
  
  // Date range filter
  if (startDate || endDate) {
    query.createdAt = {};
    if (startDate) query.createdAt.$gte = new Date(startDate);
    if (endDate) query.createdAt.$lte = new Date(endDate);
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const limitNum = parseInt(limit);
  
  // Get data and total count in parallel
  const [data, total] = await Promise.all([
    db.collection(COLLECTION_NAME)
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum)
      .toArray(),
    db.collection(COLLECTION_NAME).countDocuments(query)
  ]);

  return {
    data,
    pagination: {
      page: parseInt(page),
      limit: limitNum,
      total,
      totalPages: Math.ceil(total / limitNum)
    }
  };
};

export const findByUserId = async (userId) => {
  const db = getDB();
  return db.collection(COLLECTION_NAME)
    .find({ userId })
    .sort({ createdAt: -1 })
    .toArray();
};

