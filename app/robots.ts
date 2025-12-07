import { MetadataRoute } from 'next';

// TODO: Update with your actual production URL
const SITE_URL = 'https://mazharrony.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Adjust based on your needs
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
