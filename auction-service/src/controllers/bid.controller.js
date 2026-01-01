import * as bidService from '../services/bid.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';

export const placeBid = async (req, res, next) => {
  try {
    const { auctionId, amount } = req.body;
    const bid = await bidService.placeBid(auctionId, req.user.id, amount);

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
