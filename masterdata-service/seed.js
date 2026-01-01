import prisma from './src/prisma.js';

async function main() {
  console.log('Seeding Masterdata Service...');

  const categories = [
    { name: 'Electronics', description: 'Gadgets, cameras, and more' },
    { name: 'Art', description: 'Paintings, sculptures, and collectibles' },
    { name: 'Fashion', description: 'Vintage clothes, watches, and jewelry' },
    { name: 'Vehicles', description: 'Cars, bikes, and parts' }
  ];

  for (const cat of categories) {
    const category = await prisma.itemCategory.upsert({
      where: { name: cat.name },
      update: {},
      create: cat
    });
    console.log('Category created:', category.name);
  }

  console.log('Masterdata seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
