import type { Metadata } from 'next';

const SITE_URL = 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: 'About – Creative Digital Specialist in Dubai',
  description: 'Learn about Mazhar Rony, a Dubai-based creative digital specialist with expertise in marketing, branding, content production, and web experiences.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Mazhar Rony – Creative Digital Specialist',
    description: 'Learn about Mazhar Rony, a Dubai-based creative digital specialist with expertise in marketing, branding, content production, and web experiences.',
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
    title: 'About Mazhar Rony – Creative Digital Specialist',
    description: 'Dubai-based creative digital specialist with expertise in marketing, branding, and content.',
    images: [`${SITE_URL}/og-about.jpg`],
  },
};

export default function AboutPage() {
  return (
    <section id="about" className="fold about">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        {/* 
          NOTE: Import and use your About component here
          Consider expanding with more personal story and background
        */}
        <p>Full about page coming soon. For now, see the about section on the homepage.</p>
      </div>
    </section>
  );
}
