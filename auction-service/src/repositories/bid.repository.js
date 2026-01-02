import prisma from '../prisma.js';

export const create = async (bidData) => {
  return prisma.$transaction(async (tx) => {
    // 1. Create the bid
    const bid = await tx.bid.create({
      data: bidData
    });

    // 2. Update user auction history
    await tx.userAuctionHistory.upsert({
      where: {
        // Since we don't have a composite unique on userId-auctionId in history model, 
        // normally we should add it. For now, we'll search and update or create.
        id: (await tx.userAuctionHistory.findFirst({
          where: { userId: bidData.userId, auctionId: bidData.auctionId }
        }))?.id || 'new-id'
      },
      update: {
        lastBidAmount: bidData.bidAmount
      },
      create: {
        userId: bidData.userId,
        auctionId: bidData.auctionId,
        lastBidAmount: bidData.bidAmount
      }
    });

    return bid;
  });
};

export const findHighestBid = async (auctionId) => {
  return prisma.bid.findFirst({
    where: { auctionId },
    orderBy: { bidAmount: 'desc' }
  });
};

export const findByUserId = async (userId, { page = 1, limit = 10 } = {}) => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prisma.bid.findMany({
      where: { userId },
      include: {
        auction: {
          select: {
            id: true,
            itemId: true,
            status: true,
            startingPrice: true,
            finalPrice: true,
            endTime: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit)
    }),
    prisma.bid.count({ where: { userId } })
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
