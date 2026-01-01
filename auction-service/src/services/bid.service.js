import * as bidRepository from '../repositories/bid.repository.js';
import * as auctionRepository from '../repositories/auction.repository.js';

export const placeBid = async (auctionId, userId, amount) => {
  const auction = await auctionRepository.findById(auctionId);
  
  if (!auction) {
    const error = new Error('Auction not found');
    error.statusCode = 404;
    throw error;
  }

  if (auction.status !== 'ONGOING') {
    const error = new Error('Auction is not ongoing');
    error.statusCode = 400;
    throw error;
  }

  // Check if amount is higher than starting price
  if (amount <= auction.startingPrice) {
    const error = new Error('Bid must be higher than starting price');
    error.statusCode = 400;
    throw error;
  }

  // Check if amount is higher than current highest bid
  const highestBid = await bidRepository.findHighestBid(auctionId);
  if (highestBid && amount <= highestBid.bidAmount) {
    const error = new Error('Bid must be higher than current highest bid');
    error.statusCode = 400;
    throw error;
  }

  // Prevent bidding on own item (if we knew item owner)
  // itemOwner check usually requires fetching item from masterdata service

  return bidRepository.create({
    auctionId,
    userId,
    bidAmount: amount
  });
};
