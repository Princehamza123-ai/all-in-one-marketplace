import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Building & Construction Trades', slug: 'construction' },
    { name: 'Electrical, Power & Cooling', slug: 'electrical' },
    { name: 'Automotive & Transport Repair', slug: 'automotive' },
    { name: 'Fashion, Garment & Leatherworks', slug: 'fashion' },
    { name: 'Home Maintenance & Events', slug: 'home-services' },
    { name: 'Professional Services', slug: 'professional-services' }
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category
    });
  }

  const adminEmail = 'admin@marketplacehub.com';
  const adminPassword = 'admin123';

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Admin User',
      email: adminEmail,
      passwordHash: await bcrypt.hash(adminPassword, 10),
      role: 'ADMIN'
    }
  });

  const categoriesList = await prisma.category.findMany();
  const categoryMap = new Map(categoriesList.map((c) => [c.slug, c.id]));

  const listings = [
    {
      title: 'Dr. Amelia Reed',
      description: 'Board-certified physician specializing in family care and preventive health services.',
      price: '$120/session',
      location: 'Lagos',
      type: 'SERVICE',
      categoryId: categoryMap.get('professional-services') || null,
      status: 'ACTIVE',
      userEmail: adminEmail,
      imageUrl: '/placeholder.jpg'
    },
    {
      title: 'SmartPower Solar Solutions',
      description: 'Solar panel installation, inverter repair, CCTV setup, and smart home automation.',
      price: '$160/service',
      location: 'Abuja',
      type: 'SERVICE',
      categoryId: categoryMap.get('electrical') || null,
      status: 'ACTIVE',
      userEmail: adminEmail,
      imageUrl: '/placeholder.jpg'
    },
    {
      title: 'Dell XPS 13 Laptop',
      description: 'Lightweight premium laptop in excellent condition, ideal for students and remote work.',
      price: '$799',
      location: 'Ibadan',
      type: 'PRODUCT',
      categoryId: categoryMap.get('professional-services') || null,
      status: 'ACTIVE',
      userEmail: adminEmail,
      imageUrl: '/placeholder.jpg'
    }
  ];

  for (const item of listings) {
    const user = await prisma.user.findUnique({ where: { email: item.userEmail } });
    if (!user) continue;

    await prisma.listing.upsert({
      where: { id: `${user.id}-${item.title}` },
      update: {},
      create: {
        title: item.title,
        description: item.description,
        price: item.price,
        location: item.location,
        type: item.type as any,
        status: item.status as any,
        imageUrl: item.imageUrl,
        userId: user.id,
        categoryId: item.categoryId || undefined
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
