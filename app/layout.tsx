import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import JsonLd from './components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dodo Cleaners | Professional Wet Cleaning Services',
    template: '%s | Dodo Cleaners',
  },
  description:
    'Professional wet cleaning services in Burlington. Eco-friendly cleaning for all your garments with expert care and quick service.',
  keywords: [
    'wet cleaning',
    'dry cleaning',
    'burlington',
    'eco-friendly',
    'laundry service',
    'professional cleaning',
  ],
  authors: [{ name: 'Dodo Cleaners' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://dodocleaners.ca',
    siteName: 'Dodo Cleaners',
    title: 'Dodo Cleaners | Professional Wet Cleaning Services',
    description:
      'Professional wet cleaning services in Burlington. Eco-friendly cleaning for all your garments with expert care and quick service.',
    images: [
      {
        url: '/og-image.jpg', // 추가 필요
        width: 1200,
        height: 630,
        alt: 'Dodo Cleaners',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console 코드 필요
  },
  alternates: {
    canonical: 'https://dodocleaners.ca',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-4 pt-[96px] md:pt-[112px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
