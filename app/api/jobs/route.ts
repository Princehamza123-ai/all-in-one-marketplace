import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const item = await prisma.job.create({
      data: {
        title: body.title,
        description: body.description,
        salary: body.salary,
        location: body.location || 'Remote',
        employmentType: body.employmentType || 'Full-time',
        userId: body.userId || 'demo-user',
        categoryId: body.categoryId || null
      }
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
  }
}
