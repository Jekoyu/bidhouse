import * as categoryService from '../services/category.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(successResponse('Categories retrieved', categories));
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(successResponse('Category created', category));
  } catch (error) {
    next(error);
  }
};

export const getDetail = async (req, res, next) => {
  try {
    const category = await categoryService.getCategoryDetail(req.params.id);
    res.status(200).json(successResponse('Category detailed retrieved', category));
  } catch (error) {
    next(error);
  }
};
