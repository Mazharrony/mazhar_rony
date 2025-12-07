import type { Metadata } from 'next';

const SITE_URL = 'https://mazharrony.vercel.app';

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
    // TODO: Add your actual projects here
    {
      '@type': 'CreativeWork',
      name: 'Brand Identity Project',
      description: 'Complete branding solution for a Dubai-based business',
      creator: {
        '@type': 'Person',
        name: 'Mazhar Rony'
      },
      // image: 'URL to project image',
      // url: 'URL to case study if applicable',
    },
    // Add more projects...
  ]
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <section id="work" className="fold portfolio">
        <div className="container">
          <h1 className="page-title">Portfolio & Projects</h1>
          {/* 
            NOTE: Import and use your Portfolio component here
            Or create a full-page version with more detailed project views
          */}
          <p>Full portfolio page coming soon. For now, see the work section on the homepage.</p>
        </div>
      </section>
    </>
  );
}
