// Service data configuration for detail pages
export const serviceData = {
  'social-media-marketing': {
    id: 'social',
    titleKey: 'services.items.0.title',
    taglineKey: 'services.detail.social.tagline',
    overviewKey: 'services.detail.social.overview',
    icon: '📱',
  },
  'content-video-production': {
    id: 'content',
    titleKey: 'services.items.1.title',
    taglineKey: 'services.detail.content.tagline',
    overviewKey: 'services.detail.content.overview',
    icon: '🎥',
  },
  'google-meta-ads': {
    id: 'ads',
    titleKey: 'services.items.2.title',
    taglineKey: 'services.detail.ads.tagline',
    overviewKey: 'services.detail.ads.overview',
    icon: '🎯',
  },
  'website-optimization': {
    id: 'webopt',
    titleKey: 'services.items.3.title',
    taglineKey: 'services.detail.webopt.tagline',
    overviewKey: 'services.detail.webopt.overview',
    icon: '⚡',
  },
  'brand-strategy-design': {
    id: 'brand',
    titleKey: 'services.items.4.title',
    taglineKey: 'services.detail.brand.tagline',
    overviewKey: 'services.detail.brand.overview',
    icon: '✨',
  },
  'ecommerce-management': {
    id: 'ecommerce',
    titleKey: 'services.items.5.title',
    taglineKey: 'services.detail.ecommerce.tagline',
    overviewKey: 'services.detail.ecommerce.overview',
    icon: '🛒',
  },
  'web-app-development': {
    id: 'webapp',
    titleKey: 'services.items.6.title',
    taglineKey: 'services.detail.webapp.tagline',
    overviewKey: 'services.detail.webapp.overview',
    icon: '💻',
  },
} as const;

export type ServiceSlug = keyof typeof serviceData;

export const isValidServiceSlug = (slug: string): slug is ServiceSlug => {
  return slug in serviceData;
};
