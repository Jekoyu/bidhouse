import * as bidService from '../services/bid.service.js';
import * as userService from '../services/user.service.js';
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

    // Fetch bidder info for WebSocket emission
    const bidder = await userService.getUserById(req.user.id);
    
    // Emit real-time events with bidder info
    emitNewBid(auctionId, {
      ...bid,
      bidder: bidder || { id: req.user.id, name: 'Unknown', email: 'Unknown' }
    });
    
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
    const result = await bidService.getMyBids(req.user.id, req.query);
    res.status(200).json({
      success: true,
      message: 'My bids retrieved',
      data: result.data,
      pagination: result.pagination
    });
  } catch (error) {
    next(error);
  }
};
