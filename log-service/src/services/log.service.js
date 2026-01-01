import * as logRepository from '../repositories/log.repository.js';

export const createLog = async (logData) => {
  // Can add validation or specific formatting
  return logRepository.create(logData);
};

export const getLogs = async (filters = {}) => {
  return logRepository.findAll(filters);
};

export const getUserLogs = async (userId) => {
  return logRepository.findByUserId(userId);
};
