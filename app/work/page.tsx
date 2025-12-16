import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: 'Portfolio & Projects – Mazhar Rony',
  description: 'Explore my portfolio of branding projects, social media campaigns, web experiences, and creative work for clients across Dubai and beyond.',
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: 'Portfolio & Projects – Mazhar Rony',
    description: 'Explore my portfolio of branding projects, social media campaigns, web experiences, and creative work for clients across Dubai and beyond.',
    url: `${SITE_URL}/work`,
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-work.jpg`,
      width: 1200,
      height: 630,
      alt: 'Mazhar Rony Portfolio Projects'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Projects – Mazhar Rony',
    description: 'Explore my portfolio of branding projects, social media campaigns, web experiences, and creative work.',
    images: [`${SITE_URL}/og-work.jpg`],
  },
};

// JSON-LD for CreativeWork portfolio items
const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'CreativeWork',
      name: 'RDX Shot - Pre Workout Branding',
      description: 'Complete branding package for RDX Shot pre-workout product line with premium packaging design across all flavor variants.',
      creator: {
        '@type': 'Person',
        name: 'Mazhar Rony'
      },
      image: `${SITE_URL}/portfolio/images/rdx-shot-main.png`,
      dateCreated: '2024-01-01'
    },
    {
      '@type': 'CreativeWork',
      name: 'CMC Auto - Automotive Website',
      description: 'Modern, responsive automotive website with seamless user experience and fast loading times.',
      creator: {
        '@type': 'Person',
        name: 'Mazhar Rony'
      },
      url: 'https://cmcauto.ae',
      dateCreated: '2024-01-01'
    },
    {
      '@type': 'CreativeWork',
      name: 'Benex - Oil & Gas Solutions',
      description: 'Comprehensive B2B website showcasing oil & gas solutions and electrical supplies with intuitive navigation.',
      creator: {
        '@type': 'Person',
        name: 'Mazhar Rony'
      },
      url: 'https://benex.ae',
      dateCreated: '2024-01-01'
    },
    {
      '@type': 'CreativeWork',
      name: 'Muscle Show 2025 Social Media Campaign',
      description: 'High-impact social media campaign creative that generated significant engagement and event attendance.',
      creator: {
        '@type': 'Person',
        name: 'Mazhar Rony'
      },
      image: `${SITE_URL}/portfolio/images/Muscle Show 2025.jpg`,
      dateCreated: '2024-01-01'
    }
  ]
};

import WorkPage from '@/src/components/WorkPage';

export default function Work() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <WorkPage />
    </>
  );
}
