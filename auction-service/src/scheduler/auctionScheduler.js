import cron from 'node-cron';
import prisma from '../prisma.js';
import { logActivity } from '../../../shared/utils/activityLogger.js';
import Logger from '../../../shared/utils/logger.js';

const logger = new Logger('AUCTION-SCHEDULER');

/**
 * Finish expired auctions automatically
 * This job runs every minute to check for auctions that have passed their end time
 */
const finishExpiredAuctions = async () => {
  try {
    // Find all ONGOING auctions that have passed their end time
    const expiredAuctions = await prisma.auction.findMany({
      where: {
        status: 'ONGOING',
        endTime: {
          lte: new Date()
        }
      },
      include: {
        bids: {
          orderBy: { bidAmount: 'desc' },
          take: 1
        }
      }
    });

    if (expiredAuctions.length === 0) {
      return;
    }

    logger.info(`Found ${expiredAuctions.length} expired auction(s) to finish`);

    for (const auction of expiredAuctions) {
      try {
        const highestBid = auction.bids[0];

        await prisma.$transaction(async (tx) => {
          // 1. Update auction status and winner
          await tx.auction.update({
            where: { id: auction.id },
            data: {
              status: 'FINISHED',
              finalPrice: highestBid?.bidAmount || null,
              winnerUserId: highestBid?.userId || null
            }
          });

          // 2. If there is a winner, create transaction and update history
          if (highestBid) {
            await tx.transaction.create({
              data: {
                auctionId: auction.id,
                userId: highestBid.userId,
                amount: highestBid.bidAmount,
                status: 'PENDING'
              }
            });

            // Update winner history
            const history = await tx.userAuctionHistory.findFirst({
              where: { userId: highestBid.userId, auctionId: auction.id }
            });

            if (history) {
              await tx.userAuctionHistory.update({
                where: { id: history.id },
                data: { isWinner: true }
              });
            }
          }
        });

        // Log activity
        logActivity({
          service: 'AUCTION_SERVICE',
          action: 'AUTO_FINISH_AUCTION',
          userId: 'SYSTEM',
          details: {
            auctionId: auction.id,
            winnerId: highestBid?.userId || null,
            finalPrice: highestBid?.bidAmount || null
          },
          status: 'SUCCESS'
        });

        logger.info(`Auction ${auction.id} auto-finished. Winner: ${highestBid?.userId || 'No bids'}`);
      } catch (error) {
        logger.error(`Failed to finish auction ${auction.id}:`, { error: error.message });
      }
    }
  } catch (error) {
    logger.error('Scheduler error:', { error: error.message });
  }
};

/**
 * Start expired auction status to ONGOING if startTime has passed
 * This job also runs every minute
 */
const startScheduledAuctions = async () => {
  try {
    const auctionsToStart = await prisma.auction.findMany({
      where: {
        status: 'SCHEDULED',
        startTime: {
          lte: new Date()
        }
      }
    });

    if (auctionsToStart.length === 0) {
      return;
    }

    logger.info(`Found ${auctionsToStart.length} auction(s) to start`);

    for (const auction of auctionsToStart) {
      await prisma.auction.update({
        where: { id: auction.id },
        data: { status: 'ONGOING' }
      });

      logActivity({
        service: 'AUCTION_SERVICE',
        action: 'AUTO_START_AUCTION',
        userId: 'SYSTEM',
        details: { auctionId: auction.id },
        status: 'SUCCESS'
      });

      logger.info(`Auction ${auction.id} auto-started`);
    }
  } catch (error) {
    logger.error('Start scheduler error:', { error: error.message });
  }
};

/**
 * Initialize all cron jobs
 */
export const initScheduler = () => {
  // Run every minute
  cron.schedule('* * * * *', async () => {
    await startScheduledAuctions();
    await finishExpiredAuctions();
  });

  logger.info('Auction scheduler initialized - checking every minute');
};

export default initScheduler;
