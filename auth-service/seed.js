import prisma from './src/prisma.js';
import bcrypt from 'bcrypt';

async function main() {
  console.log('Seeding Auth Service...');

  const hashedPassword = await bcrypt.hash('password123', 10);

  // Seed Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@bidhouse.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@bidhouse.com',
      phone: '081122334455',
      password: hashedPassword,
      role: 'ADMIN'
    }
  });
  console.log('Admin created:', admin.email);

  // Seed Regular User
  const user = await prisma.user.upsert({
    where: { email: 'user@bidhouse.com' },
    update: {},
    create: {
      name: 'Regular User',
      email: 'user@bidhouse.com',
      phone: '085566778899',
      password: hashedPassword,
      role: 'USER'
    }
  });
  console.log('User created:', user.email);

  console.log('Auth seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
