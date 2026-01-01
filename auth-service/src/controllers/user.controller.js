import * as userService from '../services/user.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const getAll = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers(req.query);
    res.status(200).json({
      success: true,
      message: 'Users retrieved',
      data: result.data,
      pagination: result.pagination
    });
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(successResponse('User retrieved', user));
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(successResponse('User created', user));
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(successResponse('User updated', user));
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.params.id, req.user.id);
    res.status(200).json(successResponse(result.message));
  } catch (error) {
    next(error);
  }
};
