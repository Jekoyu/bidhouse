import prisma from '../prisma.js';

export const findAll = async (userId) => {
  return prisma.transaction.findMany({
    where: { userId },
    include: {
      auction: {
        select: {
          id: true,
          itemId: true,
          status: true,
          finalPrice: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
};

export const findById = async (id) => {
  return prisma.transaction.findUnique({
    where: { id },
    include: {
      auction: true
    }
  });
};

export const update = async (id, data) => {
  return prisma.transaction.update({
    where: { id },
    data
  });
};
