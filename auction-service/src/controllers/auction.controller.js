import * as auctionService from '../services/auction.service.js';
import { successResponse } from '../../../shared/utils/response.js';

export const getAll = async (req, res, next) => {
  try {
    const auctions = await auctionService.getAllAuctions(req.query);
    res.status(200).json(successResponse('Auctions retrieved', auctions));
  } catch (error) {
    next(error);
  }
};

export const getDetail = async (req, res, next) => {
  try {
    const auction = await auctionService.getAuctionDetail(req.params.id);
    res.status(200).json(successResponse('Auction detail retrieved', auction));
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const auction = await auctionService.scheduleAuction(req.body, req.user.id);
    res.status(201).json(successResponse('Auction scheduled successfully', auction));
  } catch (error) {
    next(error);
  }
};

export const start = async (req, res, next) => {
  try {
    const auction = await auctionService.startAuction(req.params.id);
    res.status(200).json(successResponse('Auction started', auction));
  } catch (error) {
    next(error);
  }
};

export const finish = async (req, res, next) => {
  try {
    const auction = await auctionService.finishAuction(req.params.id);
    res.status(200).json(successResponse('Auction finished and winner determined', auction));
  } catch (error) {
    next(error);
  }
};
