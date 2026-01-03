import { PrismaClient } from './src/generated/client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Auth Service...');

  // Clear existing data
  await prisma.user.deleteMany({});
  console.log('   ✓ Cleared existing users');

  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      id: 'admin-001',
      name: 'Admin BidHouse',
      email: 'admin@bidhouse.com',
      phone: '081234567890',
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true
    }
  });
  console.log('   ✓ Created Admin:', admin.email);

  // Create Seller 1 - Ahmad (owns luxury items)
  const seller1 = await prisma.user.create({
    data: {
      id: 'seller-001',
      name: 'Ahmad Santoso',
      email: 'ahmad@bidhouse.com',
      phone: '081234567891',
      password: hashedPassword,
      role: 'USER',
      isActive: true
    }
  });
  console.log('   ✓ Created Seller 1:', seller1.email);

  // Create Seller 2 - Budi (owns electronic items)
  const seller2 = await prisma.user.create({
    data: {
      id: 'seller-002',
      name: 'Budi Prakoso',
      email: 'budi@bidhouse.com',
      phone: '081234567892',
      password: hashedPassword,
      role: 'USER',
      isActive: true
    }
  });
  console.log('   ✓ Created Seller 2:', seller2.email);

  // Create Bidder - Citra (active bidder)
  const bidder = await prisma.user.create({
    data: {
      id: 'bidder-001',
      name: 'Citra Dewi',
      email: 'citra@bidhouse.com',
      phone: '081234567893',
      password: hashedPassword,
      role: 'USER',
      isActive: true
    }
  });
  console.log('   ✓ Created Bidder:', bidder.email);

  // Create Bidder 2 - Dewi (another bidder for competition)
  const bidder2 = await prisma.user.create({
    data: {
      id: 'bidder-002',
      name: 'Dewi Anggraini',
      email: 'dewi@bidhouse.com',
      phone: '081234567894',
      password: hashedPassword,
      role: 'USER',
      isActive: true
    }
  });
  console.log('   ✓ Created Bidder 2:', bidder2.email);

  console.log('\n✅ Auth Service seeding completed!');
  console.log('   Users created: 5 (1 Admin, 2 Sellers, 2 Bidders)');
  console.log('\n📋 Login Credentials:');
  console.log('   Admin: admin@bidhouse.com / password123');
  console.log('   Seller 1: ahmad@bidhouse.com / password123');
  console.log('   Seller 2: budi@bidhouse.com / password123');
  console.log('   Bidder 1: citra@bidhouse.com / password123');
  console.log('   Bidder 2: dewi@bidhouse.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
