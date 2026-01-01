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

export const findAll = async ({ search, role, page = 1, limit = 10 } = {}) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (role) {
    where.role = role;
  }

  if (search) {
    where.OR = [
      { name: { contains: search } },
      { email: { contains: search } }
    ];
  }

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit)
    }),
    prisma.user.count({ where })
  ]);

  return {
    data,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};

export const remove = async (id) => {
  return prisma.user.delete({
    where: { id }
  });
};
