import * as auctionRepository from '../repositories/auction.repository.js';
import * as bidRepository from '../repositories/bid.repository.js';
import * as itemService from './item.service.js';
import * as userService from './user.service.js';
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
  // Validate dates
  const now = new Date();
  const startTime = new Date(data.startTime);
  const endTime = new Date(data.endTime);

  if (startTime <= now) {
    const error = new Error('Start time must be in the future');
    error.statusCode = 400;
    throw error;
  }

  if (endTime <= startTime) {
    const error = new Error('End time must be after start time');
    error.statusCode = 400;
    throw error;
  }

  // Minimum duration: 1 hour (3600000 ms)
  const durationMs = endTime - startTime;
  const minDuration = 60 * 60 * 1000; // 1 hour
  if (durationMs < minDuration) {
    const error = new Error('Auction duration must be at least 1 hour');
    error.statusCode = 400;
    throw error;
  }

  // Validate item exists and get item price
  const item = await itemService.getItemById(data.itemId);
  if (!item) {
    const error = new Error('Item not found');
    error.statusCode = 404;
    throw error;
  }

  // Validate item is APPROVED
  if (item.status !== 'APPROVED') {
    const error = new Error('Only approved items can be auctioned');
    error.statusCode = 400;
    throw error;
  }

  // Validate starting price is not lower than item's starting price
  const itemPrice = parseFloat(item.startingPrice);
  const auctionPrice = parseFloat(data.startingPrice);
  
  if (auctionPrice < itemPrice) {
    const error = new Error(`Auction starting price (${auctionPrice}) cannot be lower than item price (${itemPrice})`);
    error.statusCode = 400;
    throw error;
  }

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
  
  // Enrich bids with user info
  let enrichedBids = auction.bids || [];
  if (enrichedBids.length > 0) {
    const userIds = enrichedBids.map(bid => bid.userId);
    const userMap = await userService.getUsersByIds(userIds);
    
    enrichedBids = enrichedBids.map(bid => ({
      ...bid,
      bidder: userMap.get(bid.userId) || { 
        id: bid.userId, 
        name: 'Unknown User',
        email: 'Unknown'
      }
    }));
  }
  
  return {
    ...auction,
    bids: enrichedBids,
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
  
  // If no bids, set status to CANCELLED
  const finalStatus = highestBid ? 'FINISHED' : 'CANCELLED';

  return prisma.$transaction(async (tx) => {
    // 1. Update auction status and winner
    const updatedAuction = await tx.auction.update({
      where: { id },
      data: {
        status: finalStatus,
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
