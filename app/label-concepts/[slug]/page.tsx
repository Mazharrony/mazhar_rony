import type { Metadata } from 'next';
import LabelConceptPage from '@/src/components/LabelConceptPage';
import { getLabelConceptBySlug, labelConcepts } from '@/src/data/labelConcepts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mazharrony.vercel.app';

export async function generateStaticParams() {
  return labelConcepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const { slug } = await props.params;
  const concept = getLabelConceptBySlug(slug);

  const title = concept
    ? `${concept.title} – Packaging`
    : 'Label Concept – Packaging';

  const description = concept?.description || 'Packaging label concept with mockups and design details.';

  const ogImage = concept?.heroImage
    ? `${SITE_URL}${concept.heroImage}`
    : `${SITE_URL}/og-work.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/label-concepts/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/label-concepts/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return <LabelConceptPage slug={slug} />;
}


