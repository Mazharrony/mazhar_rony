import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import DarkModeSuggestion from '@/src/components/DarkModeSuggestion';
import LanguageConfirmation from '@/lib/i18n/LanguageConfirmation';
import '../src/index.css';
import '../src/App.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// TODO: Replace with your actual production URL
const SITE_URL = 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mazhar Rony – Creative Digital Specialist in Dubai (Design, Marketing, Web)',
    template: '%s | Mazhar Rony'
  },
  description: 'Portfolio of Mazhar Rony, a Dubai-based digital creative specializing in branding, social content, web experiences and performance-focused design.',
  keywords: ['digital marketing', 'branding', 'web design', 'Dubai', 'creative', 'social media', 'content production'],
  authors: [{ name: 'Mazhar Rony' }],
  creator: 'Mazhar Rony',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Mazhar Rony Portfolio',
    title: 'Mazhar Rony – Creative Digital Specialist in Dubai',
    description: 'Portfolio of Mazhar Rony, a Dubai-based digital creative specializing in branding, social content, web experiences and performance-focused design.',
    // TODO: Add your actual OG image URL
    images: [{
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Mazhar Rony Portfolio'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mazhar Rony – Creative Digital Specialist in Dubai',
    description: 'Portfolio of Mazhar Rony, a Dubai-based digital creative specializing in branding, social content, web experiences and performance-focused design.',
    // TODO: Add your actual OG image URL
    images: [`${SITE_URL}/og-image.jpg`],
    // TODO: Add your Twitter handle if applicable
    // creator: '@yourhandle',
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

// JSON-LD Structured Data for Person and Website
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Mazhar Rony',
      jobTitle: 'Creative Digital Specialist',
      description: 'Digital creative specializing in branding, social media marketing, content production, web design, and performance marketing.',
      url: SITE_URL,
      image: `${SITE_URL}/profile-image.jpg`, // TODO: Add your profile image
      homeLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        }
      },
      // TODO: Add your actual social media URLs
      sameAs: [
        // 'https://www.linkedin.com/in/yourprofile',
        // 'https://www.instagram.com/yourprofile',
        // 'https://github.com/yourprofile',
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Mazhar Rony Portfolio',
      description: 'Professional portfolio showcasing digital marketing, branding, and creative work',
      publisher: {
        '@id': `${SITE_URL}/#person`
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/work?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <LanguageConfirmation />
            <Header />
            <main>{children}</main>
            <Footer />
            <DarkModeSuggestion />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
