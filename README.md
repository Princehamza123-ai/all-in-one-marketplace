# MarketPlace Hub

A full-stack starter project for an all-in-one marketplace platform.

## Tech stack

- Next.js
- TypeScript
- Prisma
- SQLite for local development
- API routes for listings and auth

## Setup

1. Install dependencies:

```bash
npm install
```

2. Generate the Prisma client:

```bash
npx prisma generate
```

3. Push the Prisma schema to SQLite:

```bash
npm run db:push
```

4. Seed demo data:

```bash
npm run db:seed
```

5. Start the app:

```bash
npm run dev
```

## Demo login

- Email: admin@marketplacehub.com
- Password: admin123

## Structure

- app/ : frontend pages and API routes
- prisma/ : database schema and seed scripts
- lib/ : Prisma client and data helpers

## Notes

This is a starter package for a marketplace MVP. You can extend it with:

- authentication sessions
- real file uploads
- messaging and booking requests
- admin moderation
- production hosting
