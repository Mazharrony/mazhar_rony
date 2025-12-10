import type { Metadata } from 'next';
import AboutPage from '@/src/components/AboutPage';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: "About – If You're Curious, Start Here",
  description: 'A quiet story about how I learned to create. From a village with slow internet to Dubai—learning design, branding, and building meaningful work.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Mazhar Roni – If You're Curious, Start Here",
    description: "A quiet story about creativity, resilience, and learning. From village beginnings to Dubai's creative scene.",
    url: `${SITE_URL}/about`,
    type: 'profile',
    images: [{
      url: `${SITE_URL}/og-about.jpg`,
      width: 1200,
      height: 630,
      alt: 'About Mazhar Rony'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Mazhar Roni – If You're Curious, Start Here",
    description: 'A quiet story about creativity, resilience, and learning.',
    images: [`${SITE_URL}/og-about.jpg`],
  },
};

export default function About() {
  return <AboutPage />;
}
