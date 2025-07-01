// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Reddit_Sans } from 'next/font/google';

const redditSans = Reddit_Sans({
  subsets: ['latin'],
  variable: '--font-reddit',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={redditSans.variable}>
      <body className="bg-gradient-light min-h-screen">{children}</body>
    </html>
  );
}
