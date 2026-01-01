import prisma from '../prisma.js';

export const findAll = async (filters = {}) => {
  return prisma.auction.findMany({
    where: filters,
    orderBy: { createdAt: 'desc' }
  });
};

export const findById = async (id) => {
  return prisma.auction.findUnique({
    where: { id },
    include: {
      bids: {
        orderBy: { bidAmount: 'desc' },
        take: 1
      }
    }
  });
};

export const create = async (auctionData) => {
  return prisma.auction.create({
    data: auctionData
  });
};

export const update = async (id, auctionData) => {
  return prisma.auction.update({
    where: { id },
    data: auctionData
  });
};

export const findAuctionWithHighestBid = async (id) => {
  return prisma.auction.findUnique({
    where: { id },
    include: {
      bids: {
        orderBy: { bidAmount: 'desc' },
        take: 1
      }
    }
  });
};

export const findWonByUserId = async (userId) => {
  return prisma.auction.findMany({
    where: {
      winnerUserId: userId,
      status: 'FINISHED'
    },
    include: {
      transactions: true
    },
    orderBy: { updatedAt: 'desc' }
  });
};

export const findParticipatingByUserId = async (userId) => {
  // Find all auctions where user has placed at least one bid
  const userBids = await prisma.bid.findMany({
    where: { userId },
    select: { auctionId: true },
    distinct: ['auctionId']
  });

  const auctionIds = userBids.map(b => b.auctionId);

  return prisma.auction.findMany({
    where: {
      id: { in: auctionIds }
    },
    include: {
      bids: {
        where: { userId },
        orderBy: { bidAmount: 'desc' },
        take: 1
      }
    },
    orderBy: { endTime: 'desc' }
  });
};
