import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { PERSONAL } from '@/data/personal';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL.siteUrl),
  title: {
    default: `${PERSONAL.name} | Android Developer`,
    template: `%s | ${PERSONAL.name} — Android Developer`,
  },
  description:
    'Android developer specializing in Kotlin, Jetpack, MVVM, and Clean Architecture. View my Android app portfolio and case studies.',
  openGraph: {
    title: `${PERSONAL.name} | Android Developer`,
    description: 'Android developer specializing in Kotlin, Jetpack, MVVM, and Clean Architecture.',
    url: PERSONAL.siteUrl,
    type: 'website',
    images: [{ url: '/assets/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL.name} | Android Developer`,
    description: 'Android developer specializing in Kotlin, Jetpack, MVVM, and Clean Architecture.',
  },
  icons: {
    icon: '/assets/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0e10',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
