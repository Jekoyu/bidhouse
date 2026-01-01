import * as transactionService from '../services/transaction.service.js';
import { successResponse } from '../../../shared/utils/response.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';

export const getAll = async (req, res, next) => {
  try {
    const transactions = await transactionService.getUserTransactions(req.user.id);
    res.status(200).json(successResponse('Transactions retrieved', transactions));
  } catch (error) {
    next(error);
  }
};

export const getDetail = async (req, res, next) => {
  try {
    const transaction = await transactionService.getTransactionDetail(req.params.id, req.user.id);
    res.status(200).json(successResponse('Transaction detail retrieved', transaction));
  } catch (error) {
    next(error);
  }
};

export const pay = async (req, res, next) => {
  try {
    const { paymentMethod } = req.body;
    const transaction = await transactionService.markAsPaid(req.params.id, req.user.id, paymentMethod);

    logActivity({
      service: 'AUCTION_SERVICE',
      action: 'PAY_TRANSACTION',
      userId: req.user.id,
      details: { transactionId: transaction.id, amount: transaction.amount },
      status: 'SUCCESS'
    });

    res.status(200).json(successResponse('Transaction marked as paid', transaction));
  } catch (error) {
    next(error);
  }
};
