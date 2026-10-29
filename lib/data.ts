import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function readHomeData() {
  try {
    const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
    const listings = await prisma.listing.findMany({
      orderBy: { createdAt: 'desc' },
      include: { category: true }
    });

    return {
      categories,
      listings
    };
  } catch (error) {
    console.warn('DB not ready, falling back to mock marketplace data.');

    return {
      categories: [
        { id: '1', name: 'Building & Construction Trades', slug: 'construction' },
        { id: '2', name: 'Electrical, Power & Cooling', slug: 'electrical' },
        { id: '3', name: 'Automotive & Transport Repair', slug: 'automotive' },
        { id: '4', name: 'Fashion, Garment & Leatherworks', slug: 'fashion' },
        { id: '5', name: 'Home Maintenance & Events', slug: 'home-services' },
        { id: '6', name: 'Professional Services', slug: 'professional-services' }
      ],
      listings: [
        {
          id: '1',
          title: 'Dr. Amelia Reed',
          description: 'Board-certified physician specializing in family care and preventive health services.',
          price: '$120/session',
          location: 'Lagos',
          type: 'SERVICE',
          status: 'ACTIVE',
          category: { name: 'Professional Services' },
          imageUrl: '/placeholder.jpg'
        },
        {
          id: '2',
          title: 'SmartPower Solar Solutions',
          description: 'Solar panel installation, inverter repair, CCTV setup, and smart home automation.',
          price: '$160/service',
          location: 'Abuja',
          type: 'SERVICE',
          status: 'ACTIVE',
          category: { name: 'Electrical, Power & Cooling' },
          imageUrl: '/placeholder.jpg'
        }
      ]
    };
  }
}
