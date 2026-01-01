import * as itemService from '../services/item.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';

export const getAll = async (req, res, next) => {
  try {
    const items = await itemService.getAllItems(req.query);
    res.status(200).json(successResponse('Items retrieved', items));
  } catch (error) {
    next(error);
  }
};

export const getDetail = async (req, res, next) => {
  try {
    const item = await itemService.getItemDetail(req.params.id);
    res.status(200).json(successResponse('Item detail retrieved', item));
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const item = await itemService.createItem(req.body, req.user);
    
    logActivity({
      service: 'MASTERDATA_SERVICE',
      action: 'CREATE_ITEM',
      userId: req.user.id,
      details: { itemId: item.id, itemName: item.name },
      status: 'SUCCESS'
    });

    res.status(201).json(successResponse('Item created successfully', item));
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body, req.user);
    res.status(200).json(successResponse('Item updated successfully', item));
  } catch (error) {
    next(error);
  }
};

export const approve = async (req, res, next) => {
  try {
    const item = await itemService.approveItem(req.params.id, req.user.id);

    logActivity({
      service: 'MASTERDATA_SERVICE',
      action: 'APPROVE_ITEM',
      userId: req.user.id,
      details: { itemId: item.id },
      status: 'SUCCESS'
    });

    res.status(200).json(successResponse('Item approved', item));
  } catch (error) {
    next(error);
  }
};

export const reject = async (req, res, next) => {
  try {
    const item = await itemService.rejectItem(req.params.id, req.user.id);

    logActivity({
      service: 'MASTERDATA_SERVICE',
      action: 'REJECT_ITEM',
      userId: req.user.id,
      details: { itemId: item.id },
      status: 'SUCCESS'
    });

    res.status(200).json(successResponse('Item rejected', item));
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await itemService.deleteItem(req.params.id, req.user);
    res.status(200).json(successResponse('Item deleted successfully'));
  } catch (error) {
    next(error);
  }
};
