import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/src/components/ServiceDetail';
import { serviceData, isValidServiceSlug, type ServiceSlug } from '@/lib/services/serviceData';

const SITE_URL = 'https://mazharrony.vercel.app';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (!isValidServiceSlug(slug)) {
    return {};
  }

  const service = serviceData[slug];
  const title = `${service.titleKey.split('.').pop()} - Services | Mazhar Rony`;

  return {
    title,
    description: `Discover our ${slug.replace(/-/g, ' ')} services. Professional digital marketing and development solutions.`,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title,
      description: `Professional ${slug.replace(/-/g, ' ')} services`,
      url: `${SITE_URL}/services/${slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!isValidServiceSlug(slug)) {
    notFound();
  }

  return <ServiceDetailClient slug={slug as ServiceSlug} />;
}
