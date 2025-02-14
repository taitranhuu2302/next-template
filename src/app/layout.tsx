import { Toaster } from '@/components/ui/sonner';
import Provider from '@/contexts';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Next.js template with Geist UI and TypeScript'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
