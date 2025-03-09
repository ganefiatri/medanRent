import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Lato } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NextTopLoader from 'nextjs-toploader';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Whatsapp from '@/components/layouts/Whatsapp';
import Loading from '@/components/partials/Loading';
import { Toaster } from 'sonner';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'MedanRent - Bring Home Your Dream Car',
  description: 'MedanRent is Medan trusted destination for any premium new vehicles. Contact Us Now',
  openGraph: {
    title: 'MedanRent - Bring Home Your Dream Car',
    description: 'MedanRent is Medan trusted destination for any premium new vehicles. Contact Us Now',
    images: [
      {
        url: '#',
        width: 1200,
        height: 630,
        alt: 'MedanRent - Bring Home Your Dream Car',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedanRent - Bring Home Your Dream Car',
    description: 'MedanRent is Medan trusted destination for any premium new vehicles. Contact Us Now',
    images: [
      {
        url: '#',
        width: 1200,
        height: 630,
        alt: 'MedanRent - Bring Home Your Dream Car',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Suspense fallback={<Loading isFullScreen />}>
          <Providers>
            <NextTopLoader color="#00ADEF" showSpinner={false} />
            <Navbar />
            <Whatsapp />
            {children}
            <Footer />
            <Toaster />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
