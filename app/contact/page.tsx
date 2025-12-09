import type { Metadata } from 'next';
import Contact from '../../src/components/Contact';

const SITE_URL = 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: 'Contact – Get In Touch',
  description: 'Ready to start a project? Get in touch with Mazhar Rony for digital marketing, branding, and creative services in Dubai.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Mazhar Rony – Digital Creative in Dubai',
    description: 'Ready to start a project? Get in touch for digital marketing, branding, and creative services.',
    url: `${SITE_URL}/contact`,
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-contact.jpg`,
      width: 1200,
      height: 630,
      alt: 'Contact Mazhar Rony'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mazhar Rony – Digital Creative in Dubai',
    description: 'Get in touch for digital marketing, branding, and creative services.',
    images: [`${SITE_URL}/og-contact.jpg`],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Mazhar Rony',
  description: 'Contact form and information for reaching Mazhar Rony',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Person',
    name: 'Mazhar Rony',
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Contact />
    </>
  );
}
