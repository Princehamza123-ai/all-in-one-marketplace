import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MarketPlace Hub',
  description: 'A polished marketplace for services, products, jobs, and local expertise.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
