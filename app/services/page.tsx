import type { Metadata } from 'next';
import ServicesPage from '@/src/components/ServicesPage';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: 'Services – Digital Marketing, Branding & Web',
  description: 'Full-service digital solutions: Social Media Marketing, Content & Video Production, Google & Meta Ads, Website Optimization, Brand Strategy, and E-commerce Management.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Services – Digital Marketing, Branding & Web | Mazhar Rony',
    description: 'Full-service digital solutions: Social Media Marketing, Content & Video Production, Google & Meta Ads, Website Optimization, Brand Strategy, and E-commerce Management.',
    url: `${SITE_URL}/services`,
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-services.jpg`,
      width: 1200,
      height: 630,
      alt: 'Mazhar Rony Services'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services – Digital Marketing, Branding & Web | Mazhar Rony',
    description: 'Full-service digital solutions including marketing, content production, and web optimization.',
    images: [`${SITE_URL}/og-services.jpg`],
  },
};

// JSON-LD for Services
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mazhar Rony Digital Services',
  description: 'Professional digital marketing, branding, and web services',
  provider: {
    '@type': 'Person',
    name: 'Mazhar Rony'
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Social Media Marketing',
          description: 'Strategic content creation and campaign management'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content & Video Production',
          description: 'Professional multimedia production for social platforms'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Google & Meta Ads',
          description: 'Conversion-first ad campaigns with precise targeting'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Optimization',
          description: 'Speed, SEO, and UX improvements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Strategy & Design',
          description: 'Building strong brand identities'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Management',
          description: 'Optimizing product listings and conversion flow'
        }
      }
    ]
  }
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPage />
    </>
  );
}
