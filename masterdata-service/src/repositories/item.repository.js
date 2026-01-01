import prisma from '../prisma.js';

export const findAll = async ({ search, status, page = 1, limit = 10 } = {}) => {
  const skip = (page - 1) * limit;
  const where = {};

  // Filter by status
  if (status) {
    where.status = status;
  }

  // Search by name or description
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { description: { contains: search } }
    ];
  }

  const [data, total] = await Promise.all([
    prisma.item.findMany({
      where,
      include: {
        images: true,
        categories: {
          include: {
            category: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit)
    }),
    prisma.item.count({ where })
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

export const findByUserId = async (userId) => {
  return prisma.item.findMany({
    where: { createdBy: userId },
    include: {
      images: true,
      categories: {
        include: {
          category: true
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
};

export const findById = async (id) => {
  return prisma.item.findUnique({
    where: { id },
    include: {
      images: true,
      categories: {
        include: {
          category: true
        }
      }
    }
  });
};

export const create = async (itemData) => {
  const { categories, images, ...rest } = itemData;
  return prisma.item.create({
    data: {
      ...rest,
      categories: categories ? {
        create: categories.map(catId => ({ categoryId: catId }))
      } : undefined,
      images: images ? {
        create: images.map(img => ({ imageUrl: img.url, isPrimary: img.isPrimary }))
      } : undefined
    },
    include: {
      images: true,
      categories: true
    }
  });
};

export const update = async (id, itemData) => {
  const { categories, images, ...rest } = itemData;
  return prisma.item.update({
    where: { id },
    data: {
      ...rest,
      // Simple update logic, can be improved to sync categories/images
    },
    include: {
      images: true,
      categories: true
    }
  });
};

export const remove = async (id) => {
  return prisma.item.delete({
    where: { id }
  });
};
