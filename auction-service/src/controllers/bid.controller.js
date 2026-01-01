import * as bidService from '../services/bid.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';
import { emitNewBid, emitOutbid } from '../socket/socketServer.js';
import * as bidRepository from '../repositories/bid.repository.js';

export const placeBid = async (req, res, next) => {
  try {
    const { auctionId, amount } = req.body;
    
    // Get previous highest bidder before placing new bid
    const previousHighest = await bidRepository.findHighestBid(auctionId);
    
    const bid = await bidService.placeBid(auctionId, req.user.id, amount);

    // Emit real-time events
    emitNewBid(auctionId, bid);
    
    // Notify previous highest bidder they've been outbid
    if (previousHighest && previousHighest.userId !== req.user.id) {
      emitOutbid(previousHighest.userId, auctionId, amount);
    }

    logActivity({
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: req.user.id,
      details: { bidId: bid.id, auctionId, amount },
      status: 'SUCCESS'
    });

    res.status(201).json(successResponse('Bid placed successfully', bid));
  } catch (error) {
    next(error);
  }
};

export const getMyBids = async (req, res, next) => {
  try {
    const bids = await bidService.getMyBids(req.user.id);
    res.status(200).json(successResponse('My bids retrieved', bids));
  } catch (error) {
    next(error);
  }
};
