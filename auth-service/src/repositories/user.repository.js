import prisma from '../prisma.js';

export const findByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email }
  });
};

export const findByPhone = async (phone) => {
  return prisma.user.findUnique({
    where: { phone }
  });
};

export const findById = async (id) => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const create = async (userData) => {
  return prisma.user.create({
    data: userData
  });
};

export const update = async (id, userData) => {
  return prisma.user.update({
    where: { id },
    data: userData
  });
};

export const findAll = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      createdAt: true,
      updatedAt: true
    },
    orderBy: { createdAt: 'desc' }
  });
};

export const remove = async (id) => {
  return prisma.user.delete({
    where: { id }
  });
};
