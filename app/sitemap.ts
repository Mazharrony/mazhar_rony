import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/work', '/services', '/journey', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
