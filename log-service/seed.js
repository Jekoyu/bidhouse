import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || 'bidhouse_logs';

async function main() {
  console.log('🌱 Seeding Log Service...');
  
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  const logsCollection = db.collection('logs');

  // Clear existing logs
  await logsCollection.deleteMany({});
  console.log('   ✓ Cleared existing logs');

  const now = new Date();
  
  // Create sample logs that match our seeded data
  const logs = [
    // Admin login
    {
      service: 'AUTH_SERVICE',
      action: 'LOGIN',
      userId: 'admin-001',
      details: { email: 'admin@bidhouse.com' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 24 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 24 * 60 * 60 * 1000)
    },
    // Item approvals
    {
      service: 'MASTERDATA_SERVICE',
      action: 'APPROVE_ITEM',
      userId: 'admin-001',
      details: { itemId: 'item-001', itemName: 'Rolex Submariner Vintage 1970' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 23 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 23 * 60 * 60 * 1000)
    },
    {
      service: 'MASTERDATA_SERVICE',
      action: 'APPROVE_ITEM',
      userId: 'admin-001',
      details: { itemId: 'item-002', itemName: 'MacBook Pro M3 Max 16" 2025' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 22 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 22 * 60 * 60 * 1000)
    },
    {
      service: 'MASTERDATA_SERVICE',
      action: 'REJECT_ITEM',
      userId: 'admin-001',
      details: { itemId: 'item-007', itemName: 'Jam Tangan Rolex Murah' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 21 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 21 * 60 * 60 * 1000)
    },
    // Auction created
    {
      service: 'AUCTION_SERVICE',
      action: 'CREATE_AUCTION',
      userId: 'admin-001',
      details: { auctionId: 'auction-001', itemId: 'item-001' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 20 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 20 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'START_AUCTION',
      userId: 'admin-001',
      details: { auctionId: 'auction-001' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 19 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 19 * 60 * 60 * 1000)
    },
    // Bids on Rolex auction
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-001',
      details: { bidId: 'bid-001', auctionId: 'auction-001', amount: 155000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 18 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 18 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-002',
      details: { bidId: 'bid-002', auctionId: 'auction-001', amount: 165000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 17 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 17 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-001',
      details: { bidId: 'bid-003', auctionId: 'auction-001', amount: 175000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 16 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 16 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-002',
      details: { bidId: 'bid-004', auctionId: 'auction-001', amount: 180000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 15 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 15 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-001',
      details: { bidId: 'bid-005', auctionId: 'auction-001', amount: 185000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 14 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 14 * 60 * 60 * 1000)
    },
    // Auction finished
    {
      service: 'AUCTION_SERVICE',
      action: 'FINISH_AUCTION',
      userId: 'admin-001',
      details: { auctionId: 'auction-001', winnerId: 'bidder-001', finalPrice: 185000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 13 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 13 * 60 * 60 * 1000)
    },
    // Transaction paid
    {
      service: 'AUCTION_SERVICE',
      action: 'PAY_TRANSACTION',
      userId: 'bidder-001',
      details: { transactionId: 'txn-001', amount: 185000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 12 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 12 * 60 * 60 * 1000)
    },
    // MacBook auction
    {
      service: 'AUCTION_SERVICE',
      action: 'CREATE_AUCTION',
      userId: 'admin-001',
      details: { auctionId: 'auction-002', itemId: 'item-002' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 3 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 3 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'START_AUCTION',
      userId: 'admin-001',
      details: { auctionId: 'auction-002' },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 2 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 2 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-001',
      details: { bidId: 'bid-006', auctionId: 'auction-002', amount: 47000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 1 * 60 * 60 * 1000),
      createdAt: new Date(now.getTime() - 1 * 60 * 60 * 1000)
    },
    {
      service: 'AUCTION_SERVICE',
      action: 'PLACE_BID',
      userId: 'bidder-002',
      details: { bidId: 'bid-007', auctionId: 'auction-002', amount: 50000000 },
      status: 'SUCCESS',
      timestamp: new Date(now.getTime() - 30 * 60 * 1000),
      createdAt: new Date(now.getTime() - 30 * 60 * 1000)
    },
  ];

  await logsCollection.insertMany(logs);
  console.log(`   ✓ Created ${logs.length} activity logs`);

  console.log('\n✅ Log Service seeding completed!');
  console.log('   Logs: ' + logs.length);
  console.log('   - AUTH_SERVICE: 1 (Login)');
  console.log('   - MASTERDATA_SERVICE: 3 (Approvals + Rejection)');
  console.log('   - AUCTION_SERVICE: 13 (Auctions, Bids, Transactions)');

  await client.close();
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  });
