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
