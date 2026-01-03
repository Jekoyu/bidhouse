import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Auction Service...');

  // Clear existing data (order matters due to foreign keys)
  await prisma.transaction.deleteMany({});
  await prisma.userAuctionHistory.deleteMany({});
  await prisma.bid.deleteMany({});
  await prisma.auction.deleteMany({});
  console.log('   ✓ Cleared existing data');

  const now = new Date();

  // =====================
  // AUCTION 1: FINISHED WITH WINNER (Rolex)
  // =====================
  const auction1 = await prisma.auction.create({
    data: {
      id: 'auction-001',
      itemId: 'item-001', // Rolex Submariner
      startTime: new Date('2026-01-01T10:00:00Z'),
      endTime: new Date('2026-01-02T10:00:00Z'),
      status: 'FINISHED',
      startingPrice: 150000000,
      finalPrice: 185000000,
      winnerUserId: 'bidder-001', // Citra won
      createdBy: 'admin-001'
    }
  });
  console.log('   ✓ Created Auction 1 (FINISHED with Winner):', auction1.id);

  // Bids for Auction 1
  await prisma.bid.createMany({
    data: [
      {
        id: 'bid-001',
        auctionId: 'auction-001',
        userId: 'bidder-001', // Citra
        bidAmount: 155000000,
        createdAt: new Date('2026-01-01T11:00:00Z')
      },
      {
        id: 'bid-002',
        auctionId: 'auction-001',
        userId: 'bidder-002', // Dewi
        bidAmount: 165000000,
        createdAt: new Date('2026-01-01T12:00:00Z')
      },
      {
        id: 'bid-003',
        auctionId: 'auction-001',
        userId: 'bidder-001', // Citra (outbid Dewi)
        bidAmount: 175000000,
        createdAt: new Date('2026-01-01T13:00:00Z')
      },
      {
        id: 'bid-004',
        auctionId: 'auction-001',
        userId: 'bidder-002', // Dewi (tried again)
        bidAmount: 180000000,
        createdAt: new Date('2026-01-01T14:00:00Z')
      },
      {
        id: 'bid-005',
        auctionId: 'auction-001',
        userId: 'bidder-001', // Citra (final winning bid)
        bidAmount: 185000000,
        createdAt: new Date('2026-01-01T15:00:00Z')
      }
    ]
  });
  console.log('   ✓ Created 5 bids for Auction 1');

  // User Auction History
  await prisma.userAuctionHistory.createMany({
    data: [
      {
        userId: 'bidder-001',
        auctionId: 'auction-001',
        lastBidAmount: 185000000,
        isWinner: true
      },
      {
        userId: 'bidder-002',
        auctionId: 'auction-001',
        lastBidAmount: 180000000,
        isWinner: false
      }
    ]
  });

  // Transaction for winner
  await prisma.transaction.create({
    data: {
      id: 'txn-001',
      auctionId: 'auction-001',
      userId: 'bidder-001',
      amount: 185000000,
      status: 'PAID'
    }
  });
  console.log('   ✓ Created Transaction for Auction 1 (PAID)');

  // =====================
  // AUCTION 2: ONGOING (MacBook Pro)
  // =====================
  const startOngoing = new Date(now.getTime() - 2 * 60 * 60 * 1000); // Started 2 hours ago
  const endOngoing = new Date(now.getTime() + 22 * 60 * 60 * 1000); // Ends in 22 hours

  const auction2 = await prisma.auction.create({
    data: {
      id: 'auction-002',
      itemId: 'item-002', // MacBook Pro
      startTime: startOngoing,
      endTime: endOngoing,
      status: 'ONGOING',
      startingPrice: 45000000,
      createdBy: 'admin-001'
    }
  });
  console.log('   ✓ Created Auction 2 (ONGOING):', auction2.id);

  // Active bids for Auction 2
  await prisma.bid.createMany({
    data: [
      {
        id: 'bid-006',
        auctionId: 'auction-002',
        userId: 'bidder-001', // Citra
        bidAmount: 47000000,
        createdAt: new Date(now.getTime() - 1 * 60 * 60 * 1000)
      },
      {
        id: 'bid-007',
        auctionId: 'auction-002',
        userId: 'bidder-002', // Dewi
        bidAmount: 50000000,
        createdAt: new Date(now.getTime() - 30 * 60 * 1000)
      }
    ]
  });
  console.log('   ✓ Created 2 bids for Auction 2');

  // User Auction History for ongoing
  await prisma.userAuctionHistory.createMany({
    data: [
      {
        userId: 'bidder-001',
        auctionId: 'auction-002',
        lastBidAmount: 47000000,
        isWinner: false
      },
      {
        userId: 'bidder-002',
        auctionId: 'auction-002',
        lastBidAmount: 50000000,
        isWinner: false
      }
    ]
  });

  // =====================
  // AUCTION 3: SCHEDULED (Lukisan Affandi)
  // =====================
  const startScheduled = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Starts in 24 hours
  const endScheduled = new Date(now.getTime() + 72 * 60 * 60 * 1000); // Ends in 72 hours

  const auction3 = await prisma.auction.create({
    data: {
      id: 'auction-003',
      itemId: 'item-003', // Lukisan Affandi
      startTime: startScheduled,
      endTime: endScheduled,
      status: 'SCHEDULED',
      startingPrice: 500000000,
      createdBy: 'admin-001'
    }
  });
  console.log('   ✓ Created Auction 3 (SCHEDULED):', auction3.id);

  // =====================
  // AUCTION 4: FINISHED WITHOUT WINNER (Vespa - no bids)
  // =====================
  const auction4 = await prisma.auction.create({
    data: {
      id: 'auction-004',
      itemId: 'item-004', // Vespa Sprint
      startTime: new Date('2026-01-01T08:00:00Z'),
      endTime: new Date('2026-01-02T08:00:00Z'),
      status: 'FINISHED',
      startingPrice: 75000000,
      finalPrice: null, // No winner
      winnerUserId: null, // No winner
      createdBy: 'admin-001'
    }
  });
  console.log('   ✓ Created Auction 4 (FINISHED without Winner):', auction4.id);

  console.log('\n✅ Auction Service seeding completed!');
  console.log('   Auctions: 4');
  console.log('   - FINISHED with Winner: 1 (Rolex - Citra won Rp 185.000.000)');
  console.log('   - ONGOING: 1 (MacBook - Current bid Rp 50.000.000)');
  console.log('   - SCHEDULED: 1 (Lukisan - Starting in 24 hours)');
  console.log('   - FINISHED without Winner: 1 (Vespa - No bids)');
  console.log('   Bids: 7');
  console.log('   Transactions: 1 (PAID)');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
