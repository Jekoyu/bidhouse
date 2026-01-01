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
