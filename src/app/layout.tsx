import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import PartyPopper from '@/components/PartyPopper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'react-tada',
  description: 'react-tada for state management in React',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <div className="canvas-container">
          <PartyPopper />
        </div>
        <main className="main">
          <div className="code">
            <div className="code-container">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
