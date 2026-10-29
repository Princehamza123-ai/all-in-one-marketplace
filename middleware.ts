import { createHmac } from 'node:crypto';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

export const SESSION_COOKIE = 'marketplace_session';
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'marketplace-dev-secret';

export function signSessionValue(userId: string) {
  return createHmac('sha256', COOKIE_SECRET).update(userId).digest('hex');
}

export function createSessionCookie(userId: string) {
  return `${userId}.${signSessionValue(userId)}`;
}

export function verifySessionCookie(value: string | undefined) {
  if (!value) return null;
  const [userId, signature] = value.split('.');
  if (!userId || !signature) return null;
  if (signature !== signSessionValue(userId)) return null;
  return userId;
}

export function setSessionCookie(userId: string) {
  cookies().set({
    name: SESSION_COOKIE,
    value: createSessionCookie(userId),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });
}

export function clearSessionCookie() {
  cookies().set({
    name: SESSION_COOKIE,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
}

export async function getSessionUser() {
  const cookieValue = cookies().get(SESSION_COOKIE)?.value;
  const userId = verifySessionCookie(cookieValue);

  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      avatarUrl: true,
      location: true
    }
  });
}
