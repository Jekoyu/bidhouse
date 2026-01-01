import * as bidService from '../services/bid.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const placeBid = async (req, res, next) => {
  try {
    const { auctionId, amount } = req.body;
    const bid = await bidService.placeBid(auctionId, req.user.id, amount);
    res.status(201).json(successResponse('Bid placed successfully', bid));
  } catch (error) {
    next(error);
  }
};
