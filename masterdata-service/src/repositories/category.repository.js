import prisma from '../prisma.js';

export const findAll = async () => {
  return prisma.itemCategory.findMany();
};

export const findById = async (id) => {
  return prisma.itemCategory.findUnique({
    where: { id }
  });
};

export const create = async (categoryData) => {
  return prisma.itemCategory.create({
    data: categoryData
  });
};

export const update = async (id, categoryData) => {
  return prisma.itemCategory.update({
    where: { id },
    data: categoryData
  });
};

export const remove = async (id) => {
  return prisma.itemCategory.delete({
    where: { id }
  });
};
