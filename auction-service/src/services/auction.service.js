import * as auctionRepository from '../repositories/auction.repository.js';
import * as bidRepository from '../repositories/bid.repository.js';
import * as itemService from './item.service.js';
import prisma from '../prisma.js';

/**
 * Enrich auctions with item information
 */
const enrichAuctionsWithItems = async (auctions) => {
  if (!auctions || auctions.length === 0) return auctions;

  const itemIds = auctions.map(auction => auction.itemId);
  const itemMap = await itemService.getItemsByIds(itemIds);

  return auctions.map(auction => ({
    ...auction,
    item: itemMap.get(auction.itemId) || { id: auction.itemId, name: 'Unknown Item' }
  }));
};

export const scheduleAuction = async (data, adminId) => {
  // item validation normally happens here via cross-service check
  return auctionRepository.create({
    ...data,
    status: 'SCHEDULED',
    createdBy: adminId
  });
};

export const getAllAuctions = async (filters = {}) => {
  const result = await auctionRepository.findAll(filters);
  result.data = await enrichAuctionsWithItems(result.data);
  return result;
};

export const getAuctionDetail = async (id) => {
  const auction = await auctionRepository.findById(id);
  if (!auction) {
    const error = new Error('Auction not found');
    error.statusCode = 404;
    throw error;
  }
  
  // Enrich with item info
  const item = await itemService.getItemById(auction.itemId);
  return {
    ...auction,
    item: item || { id: auction.itemId, name: 'Unknown Item' }
  };
};

export const startAuction = async (id) => {
  return auctionRepository.update(id, { status: 'ONGOING' });
};

export const finishAuction = async (id) => {
  const auction = await auctionRepository.findAuctionWithHighestBid(id);
  if (!auction) {
    const error = new Error('Auction not found');
    error.statusCode = 404;
    throw error;
  }

  const highestBid = auction.bids[0];

  return prisma.$transaction(async (tx) => {
    // 1. Update auction status and winner
    const updatedAuction = await tx.auction.update({
      where: { id },
      data: {
        status: 'FINISHED',
        finalPrice: highestBid?.bidAmount || null,
        winnerUserId: highestBid?.userId || null
      }
    });

    // 2. If there is a winner, create transaction and update history
    if (highestBid) {
      await tx.transaction.create({
        data: {
          auctionId: id,
          userId: highestBid.userId,
          amount: highestBid.bidAmount,
          status: 'PENDING'
        }
      });

      // Find the history record for the winner
      const history = await tx.userAuctionHistory.findFirst({
        where: { userId: highestBid.userId, auctionId: id }
      });
      
      if (history) {
        await tx.userAuctionHistory.update({
          where: { id: history.id },
          data: { isWinner: true }
        });
      }
    }

    return updatedAuction;
  });
};

export const getWonAuctions = async (userId) => {
  return auctionRepository.findWonByUserId(userId);
};

export const getParticipatingAuctions = async (userId) => {
  return auctionRepository.findParticipatingByUserId(userId);
};
