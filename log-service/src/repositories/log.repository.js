import { getDB } from '../models/mongodb.js';

const COLLECTION_NAME = 'logs';

export const create = async (logData) => {
  const db = getDB();
  return db.collection(COLLECTION_NAME).insertOne({
    ...logData,
    createdAt: new Date()
  });
};

export const findAll = async (query = {}, options = {}) => {
  const db = getDB();
  return db.collection(COLLECTION_NAME)
    .find(query)
    .sort({ createdAt: -1 })
    .limit(options.limit || 100)
    .toArray();
};

export const findByUserId = async (userId) => {
  const db = getDB();
  return db.collection(COLLECTION_NAME)
    .find({ userId })
    .sort({ createdAt: -1 })
    .toArray();
};
