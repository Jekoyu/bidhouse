import * as logService from '../services/log.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const create = async (req, res, next) => {
  try {
    const log = await logService.createLog(req.body);
    res.status(201).json(successResponse('Log created', log));
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const result = await logService.getLogs(req.query);
    res.status(200).json({
      success: true,
      message: 'Logs retrieved',
      data: result.data,
      pagination: result.pagination
    });
  } catch (error) {
    next(error);
  }
};

export const getByUser = async (req, res, next) => {
  try {
    const logs = await logService.getUserLogs(req.params.userId);
    res.status(200).json(successResponse('User logs retrieved', logs));
  } catch (error) {
    next(error);
  }
};
