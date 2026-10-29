import { prisma } from '@/lib/prisma';

export async function readHomeData() {
  try {
    const [categories, listings] = await Promise.all([
      prisma.category.findMany({ orderBy: { name: 'asc' } }),
      prisma.listing.findMany({
        orderBy: { createdAt: 'desc' },
        take: 6,
        include: { category: true }
      })
    ]);

    return { categories, listings };
  } catch (error) {
    return {
      categories: [
        { id: '1', name: 'Professional Services', slug: 'professional-services' },
        { id: '2', name: 'Home Services', slug: 'home-services' },
        { id: '3', name: 'Electrical & Power', slug: 'electrical-power' },
        { id: '4', name: 'Automotive', slug: 'automotive' },
        { id: '5', name: 'Construction', slug: 'construction' },
        { id: '6', name: 'Retail & Products', slug: 'retail-products' }
      ],
      listings: [
        {
          id: '1',
          title: 'Dr. Amelia Reed',
          description: 'Board-certified physician specializing in family care and preventive healthcare services.',
          price: '$120/session',
          location: 'Lagos',
          type: 'SERVICE',
          status: 'ACTIVE',
          category: { name: 'Professional Services' }
        },
        {
          id: '2',
          title: 'SmartPower Solar Solutions',
          description: 'Solar installation, inverter repair, and smart-home energy upgrades.',
          price: '$160/service',
          location: 'Abuja',
          type: 'SERVICE',
          status: 'ACTIVE',
          category: { name: 'Electrical & Power' }
        },
        {
          id: '3',
          title: 'Dell XPS 13',
          description: 'Premium lightweight laptop in excellent condition for students and professionals.',
          price: '$799',
          location: 'Ibadan',
          type: 'PRODUCT',
          status: 'ACTIVE',
          category: { name: 'Retail & Products' }
        },
        {
          id: '4',
          title: 'Operations Manager',
          description: 'Full-time operations manager to supervise service delivery and field teams.',
          price: '$3,500/mo',
          location: 'Remote',
          type: 'JOB',
          status: 'ACTIVE',
          category: { name: 'Professional Services' }
        }
      ]
    };
  }
}
