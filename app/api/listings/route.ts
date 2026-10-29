import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const listing = await prisma.listing.create({
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        location: body.location || 'Remote',
        type: body.type,
        userId: body.userId || 'demo-user',
        categoryId: body.categoryId || null,
        status: 'ACTIVE'
      }
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 });
  }
}
