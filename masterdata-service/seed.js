import { PrismaClient } from './src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Masterdata Service...');

  // Clear existing data (order matters due to foreign keys)
  await prisma.itemImage.deleteMany({});
  await prisma.itemCategoryMap.deleteMany({});
  await prisma.item.deleteMany({});
  await prisma.itemCategory.deleteMany({});
  console.log('   ✓ Cleared existing data');

  // =====================
  // CREATE CATEGORIES
  // =====================
  const categories = await Promise.all([
    prisma.itemCategory.create({
      data: {
        id: 'cat-art',
        name: 'Art',
        description: 'Paintings, sculptures, and artistic collectibles'
      }
    }),
    prisma.itemCategory.create({
      data: {
        id: 'cat-electronics',
        name: 'Electronics',
        description: 'Gadgets, computers, and electronic devices'
      }
    }),
    prisma.itemCategory.create({
      data: {
        id: 'cat-fashion',
        name: 'Fashion',
        description: 'Luxury bags, watches, and accessories'
      }
    }),
    prisma.itemCategory.create({
      data: {
        id: 'cat-vehicles',
        name: 'Vehicles',
        description: 'Cars, motorcycles, and automotive collectibles'
      }
    }),
    prisma.itemCategory.create({
      data: {
        id: 'cat-collectibles',
        name: 'Collectibles',
        description: 'Rare items, antiques, and memorabilia'
      }
    })
  ]);
  console.log('   ✓ Created 5 categories');

  // =====================
  // CREATE ITEMS
  // =====================

  // Item 1: APPROVED - Vintage Rolex (Ahmad's) - For FINISHED auction WITH winner
  const item1 = await prisma.item.create({
    data: {
      id: 'item-001',
      name: 'Rolex Submariner Vintage 1970',
      description: 'Jam tangan Rolex Submariner asli tahun 1970. Kondisi sangat baik dengan dokumen lengkap. Rare collector item.',
      startingPrice: 150000000,
      status: 'APPROVED',
      createdBy: 'seller-001', // Ahmad
      approvedBy: 'admin-001',
      approvedAt: new Date('2026-01-01'),
      images: {
        create: [
          { id: 'img-001', imageUrl: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-fashion' },
          { categoryId: 'cat-collectibles' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 1:', item1.name);

  // Item 2: APPROVED - MacBook Pro (Budi's) - For ONGOING auction
  const item2 = await prisma.item.create({
    data: {
      id: 'item-002',
      name: 'MacBook Pro M3 Max 16" 2025',
      description: 'MacBook Pro terbaru dengan chip M3 Max, RAM 64GB, SSD 2TB. Masih segel, garansi resmi Apple 1 tahun.',
      startingPrice: 45000000,
      status: 'APPROVED',
      createdBy: 'seller-002', // Budi
      approvedBy: 'admin-001',
      approvedAt: new Date('2026-01-02'),
      images: {
        create: [
          { id: 'img-002', imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-electronics' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 2:', item2.name);

  // Item 3: APPROVED - Lukisan (Ahmad's) - For SCHEDULED auction
  const item3 = await prisma.item.create({
    data: {
      id: 'item-003',
      name: 'Lukisan Affandi Original - Pemandangan Gunung',
      description: 'Lukisan cat minyak original karya Affandi tahun 1985. Ukuran 100x150cm dengan sertifikat keaslian.',
      startingPrice: 500000000,
      status: 'APPROVED',
      createdBy: 'seller-001', // Ahmad
      approvedBy: 'admin-001',
      approvedAt: new Date('2026-01-03'),
      images: {
        create: [
          { id: 'img-003', imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-art' },
          { categoryId: 'cat-collectibles' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 3:', item3.name);

  // Item 4: APPROVED - Vespa (Budi's) - For FINISHED auction WITHOUT winner
  const item4 = await prisma.item.create({
    data: {
      id: 'item-004',
      name: 'Vespa Sprint 150 Limited Edition 2024',
      description: 'Vespa Sprint edisi terbatas, warna racing sixties. KM rendah, pajak hidup, surat lengkap.',
      startingPrice: 75000000,
      status: 'APPROVED',
      createdBy: 'seller-002', // Budi
      approvedBy: 'admin-001',
      approvedAt: new Date('2026-01-01'),
      images: {
        create: [
          { id: 'img-004', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-vehicles' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 4:', item4.name);

  // Item 5: PENDING - iPhone 16 Pro (Budi's) - Waiting approval
  const item5 = await prisma.item.create({
    data: {
      id: 'item-005',
      name: 'iPhone 16 Pro Max 1TB Titanium',
      description: 'iPhone terbaru, masih segel, garansi resmi iBox. Warna Natural Titanium.',
      startingPrice: 28000000,
      status: 'PENDING',
      createdBy: 'seller-002', // Budi
      images: {
        create: [
          { id: 'img-005', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-electronics' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 5 (PENDING):', item5.name);

  // Item 6: PENDING - Tas Hermes (Ahmad's) - Waiting approval
  const item6 = await prisma.item.create({
    data: {
      id: 'item-006',
      name: 'Hermes Birkin 30 Noir Togo Gold Hardware',
      description: 'Tas Hermes Birkin original dengan receipt dan dust bag. Kondisi like new.',
      startingPrice: 450000000,
      status: 'PENDING',
      createdBy: 'seller-001', // Ahmad
      images: {
        create: [
          { id: 'img-006', imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-fashion' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 6 (PENDING):', item6.name);

  // Item 7: REJECTED - Item mencurigakan
  const item7 = await prisma.item.create({
    data: {
      id: 'item-007',
      name: 'Jam Tangan Rolex Murah',
      description: 'Rolex murah, kondisi bagus...',
      startingPrice: 5000000,
      status: 'REJECTED',
      createdBy: 'seller-001',
      approvedBy: 'admin-001',
      approvedAt: new Date('2026-01-01'),
      images: {
        create: [
          { id: 'img-007', imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800', isPrimary: true }
        ]
      },
      categories: {
        create: [
          { categoryId: 'cat-fashion' }
        ]
      }
    }
  });
  console.log('   ✓ Created Item 7 (REJECTED):', item7.name);

  console.log('\n✅ Masterdata Service seeding completed!');
  console.log('   Categories: 5');
  console.log('   Items: 7 (4 APPROVED, 2 PENDING, 1 REJECTED)');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
