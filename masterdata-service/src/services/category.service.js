import * as categoryRepository from '../repositories/category.repository.js';

export const getAllCategories = async () => {
  return categoryRepository.findAll();
};

export const getCategoryDetail = async (id) => {
  const category = await categoryRepository.findById(id);
  if (!category) {
    const error = new Error('Category not found');
    error.statusCode = 404;
    throw error;
  }
  return category;
};

export const createCategory = async (data) => {
  return categoryRepository.create(data);
};

export const updateCategory = async (id, data) => {
  return categoryRepository.update(id, data);
};

export const deleteCategory = async (id) => {
  return categoryRepository.remove(id);
};
