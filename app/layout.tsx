import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '화성 부동산 인사이트',
  description: '공인중개사를 위한 화성시 아파트 거래·비교·입지분석 브리핑 대시보드',
  openGraph: {
    title: '화성 부동산 인사이트',
    description: '아파트 거래·비교·입지분석 브리핑',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '화성 부동산 인사이트',
    description: '아파트 거래·비교·입지분석 브리핑',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
