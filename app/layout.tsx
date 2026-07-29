import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FLowcity Plumbing | 24/7 Rapid Emergency Plumbing & Drain Cleaning',
  description: 'Top-rated 24/7 emergency plumbing, leak detection, hydro-jetting drain cleaning, and tankless water heater installation. Licensed, insured, upfront flat-rate quotes.',
  keywords: [
    'Emergency Plumbing',
    'Plumber near me',
    'Leak Detection',
    'Drain Cleaning Hydro-Jetting',
    'Tankless Water Heater Installation',
    '24/7 Plumber Metro',
  ],
  authors: [{ name: 'FLowcity Plumbing' }],
  creator: 'FLowcity Plumbing',
  metadataBase: new URL('https://flowcityplumbing.com'),
  openGraph: {
    title: 'FLowcity Plumbing | Precision Plumbing. Instant Relief.',
    description: 'Top-rated 24/7 emergency plumbing, leak detection, and water heater installs with upfront flat-rate pricing.',
    url: 'https://flowcityplumbing.com',
    siteName: 'FLowcity Plumbing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FLowcity Plumbing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLowcity Plumbing | 24/7 Emergency Plumbing',
    description: 'Precision Plumbing. Instant Relief. Upfront flat-rate quotes & 24/7 rapid dispatch.',
    images: ['https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
