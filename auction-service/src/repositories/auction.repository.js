import prisma from '../prisma.js';

export const findAll = async ({ status, page = 1, limit = 10 } = {}) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (status) {
    where.status = status;
  }

  const [data, total] = await Promise.all([
    prisma.auction.findMany({
      where,
      include: {
        bids: {
          orderBy: { bidAmount: 'desc' },
          take: 1
        },
        _count: {
          select: { bids: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit)
    }),
    prisma.auction.count({ where })
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
  return prisma.auction.findUnique({
    where: { id },
    include: {
      bids: {
        orderBy: { bidAmount: 'desc' }
        // Removed take: 1 to return all bids
      },
      _count: {
        select: { bids: true }
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
