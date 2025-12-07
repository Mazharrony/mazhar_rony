import type { Metadata } from 'next';

const SITE_URL = 'https://mazharrony.vercel.app';

export const metadata: Metadata = {
  title: 'Professional Journey & Experience – Mazhar Rony',
  description: 'Follow my professional journey through creative management, digital marketing, and brand strategy roles across Dubai and Sharjah.',
  alternates: {
    canonical: `${SITE_URL}/journey`,
  },
  openGraph: {
    title: 'Professional Journey & Experience – Mazhar Rony',
    description: 'Follow my professional journey through creative management, digital marketing, and brand strategy roles across Dubai and Sharjah.',
    url: `${SITE_URL}/journey`,
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-journey.jpg`,
      width: 1200,
      height: 630,
      alt: 'Mazhar Rony Professional Journey'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Journey & Experience – Mazhar Rony',
    description: 'My professional journey through creative and marketing roles in Dubai.',
    images: [`${SITE_URL}/og-journey.jpg`],
  },
};

export default function JourneyPage() {
  return (
    <section id="journey" className="fold process">
      <div className="container">
        <h1 className="page-title">My Journey</h1>
        {/* 
          NOTE: Import and use your Process component here
          This showcases the work experience timeline
        */}
        <p>Journey timeline coming soon. For now, see the experience section on the homepage.</p>
      </div>
    </section>
  );
}
