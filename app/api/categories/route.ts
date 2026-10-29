import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getSessionUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const listingSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.string().min(1),
  location: z.string().min(2),
  type: z.enum(['SERVICE', 'PRODUCT', 'JOB']),
  category: z.string().min(2)
});

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET() {
  const listings = await prisma.listing.findMany({
    orderBy: { createdAt: 'desc' },
    include: { category: true },
    take: 20
  });

  return NextResponse.json(listings);
}

export async function POST(request: Request) {
  try {
    const user = await getSessionUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const payload = {
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
      price: String(formData.get('price') || ''),
      location: String(formData.get('location') || ''),
      type: String(formData.get('type') || 'SERVICE'),
      category: String(formData.get('category') || 'Professional Services')
    };

    const parsed = listingSchema.parse(payload);

    let category = await prisma.category.findUnique({
      where: { slug: slugify(parsed.category) }
    });

    if (!category) {
      category = await prisma.category.create({
        data: {
          name: parsed.category,
          slug: slugify(parsed.category)
        }
      });
    }

    const listing = await prisma.listing.create({
      data: {
        title: parsed.title,
        description: parsed.description,
        price: parsed.price,
        location: parsed.location,
        type: parsed.type,
        status: 'ACTIVE',
        userId: user.id,
        categoryId: category.id
      }
    });

    return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create listing' }, { status: 500 });
  }
}
