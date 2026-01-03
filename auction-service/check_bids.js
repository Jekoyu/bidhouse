import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  // Get all bids with user info
  const bids = await prisma.bid.findMany({
    include: {
      auction: {
        select: {
          id: true,
          itemId: true,
          status: true,
          startingPrice: true
        }
      }
    },
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  console.log('=== Recent Bids ===');
  console.log(JSON.stringify(bids, null, 2));

  // Get users who have bid
  const uniqueUserIds = [...new Set(bids.map(b => b.userId))];
  console.log('\n=== Users with Bids ===');
  console.log(uniqueUserIds);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
