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

export const findByUserId = async (userId, { search, status, page = 1, limit = 10 } = {}) => {
  const skip = (page - 1) * limit;
  const where = { createdBy: userId };

  // Filter by status (PENDING, APPROVED, REJECTED)
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
  console.log('[REPO CREATE DEBUG] itemData:', JSON.stringify(itemData, null, 2));
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
  
  // Use transaction for updating images and categories
  return prisma.$transaction(async (tx) => {
    // Update basic item fields
    const updatedItem = await tx.item.update({
      where: { id },
      data: rest
    });

    // Sync categories if provided
    if (categories !== undefined) {
      // Delete existing categories
      await tx.itemCategoryMap.deleteMany({
        where: { itemId: id }
      });
      
      // Create new categories
      if (categories && categories.length > 0) {
        await tx.itemCategoryMap.createMany({
          data: categories.map(catId => ({
            itemId: id,
            categoryId: catId
          }))
        });
      }
    }

    // Sync images if provided
    if (images !== undefined) {
      // Delete existing images
      await tx.itemImage.deleteMany({
        where: { itemId: id }
      });
      
      // Create new images
      if (images && images.length > 0) {
        await tx.itemImage.createMany({
          data: images.map(img => ({
            itemId: id,
            imageUrl: img.url,
            isPrimary: img.isPrimary || false
          }))
        });
      }
    }

    // Return updated item with relations
    return tx.item.findUnique({
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
  });
};

export const remove = async (id) => {
  return prisma.item.delete({
    where: { id }
  });
};
