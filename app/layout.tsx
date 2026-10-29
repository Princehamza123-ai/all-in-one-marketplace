import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MarketPlace Hub',
  description: 'All-in-one marketplace for services, products, and jobs.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
