import * as transactionRepository from '../repositories/transaction.repository.js';

export const getUserTransactions = async (userId) => {
  return transactionRepository.findAll(userId);
};

export const getTransactionDetail = async (id, userId) => {
  const transaction = await transactionRepository.findById(id);
  if (!transaction) {
    const error = new Error('Transaction not found');
    error.statusCode = 404;
    throw error;
  }

  // Only owner can view their transaction
  if (transaction.userId !== userId) {
    const error = new Error('Forbidden');
    error.statusCode = 403;
    throw error;
  }

  return transaction;
};

export const markAsPaid = async (id, userId, paymentMethod) => {
  const transaction = await transactionRepository.findById(id);
  if (!transaction) {
    const error = new Error('Transaction not found');
    error.statusCode = 404;
    throw error;
  }

  if (transaction.userId !== userId) {
    const error = new Error('Forbidden');
    error.statusCode = 403;
    throw error;
  }

  if (transaction.status === 'PAID') {
    const error = new Error('Transaction already paid');
    error.statusCode = 400;
    throw error;
  }

  return transactionRepository.update(id, {
    status: 'PAID',
    paymentMethod: paymentMethod || 'MANUAL',
    paidAt: new Date()
  });
};
