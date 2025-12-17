export type LabelConcept = {
  id: string;
  slug: string;
  title: string;
  category: 'branding';
  thumbnail: string; // mockup thumbnail (4:5 crop in UI)
  heroImage: string; // mockup hero image
  labelImage: string; // flat label artwork
  gallery: string[]; // mockups + process images
  frameBg?: 'dark' | 'light';
  tools?: string[];
  results?: string;
  description?: string;
  role?: string;
  deliverables?: string[];
};

export const labelConcepts: LabelConcept[] = [
  {
    id: 'label-concept-multi-vitamin',
    slug: 'multi-vitamin',
    title: 'Multi Vitamin — Label Concept',
    category: 'branding',
    thumbnail: '/portfolio/jnk/multi-vitamin/mv-01.png',
    heroImage: '/portfolio/jnk/multi-vitamin/mv-01.png',
    labelImage: '/portfolio/jnk/multi-vitamin/multi-vitamin-label-flat.jpg',
    gallery: [
      '/portfolio/jnk/multi-vitamin/mv-01.png',
      '/portfolio/jnk/multi-vitamin/mv-02.png',
      '/portfolio/jnk/multi-vitamin/mv-03.png',
      '/portfolio/jnk/multi-vitamin/mv-04.png',
      '/portfolio/jnk/multi-vitamin/mv-05.png',
      '/portfolio/jnk/multi-vitamin/mv-06.png',
      '/portfolio/jnk/multi-vitamin/mv-07.png',
    ],
    role: 'Packaging — Label concept + mockups',
    deliverables: ['Label design', 'Packaging mockups', 'Visual system'],
    tools: ['Photoshop', 'Illustrator'],
    results:
      'A clean, premium packaging direction that balances nutrition clarity with a modern shelf-first look.',
    description:
      'Designed a packaging label concept with strong hierarchy for key benefits and a controlled color system. Built to read instantly on shelf and stay consistent across digital listings.',
  },
  {
    id: 'label-concept-demon-oni',
    slug: 'demon-oni',
    title: 'Demon Oni — Label Concept',
    category: 'branding',
    thumbnail: '/portfolio/jnk/demon-oni/demon-01.png',
    heroImage: '/portfolio/jnk/demon-oni/demon-01.png',
    labelImage: '/portfolio/jnk/demon-oni/demon-oni-label-flat.jpg',
    gallery: [
      '/portfolio/jnk/demon-oni/demon-01.png',
      '/portfolio/jnk/demon-oni/demon-02.png',
      '/portfolio/jnk/demon-oni/demon-03.png',
      '/portfolio/jnk/demon-oni/demon-04.png',
      '/portfolio/jnk/demon-oni/demon-05.png',
      '/portfolio/jnk/demon-oni/demon-06.png',
    ],
    role: 'Packaging — Label concept + mockups',
    deliverables: ['Label design', 'Packaging mockups', 'Icon + graphic system'],
    tools: ['Photoshop', 'Illustrator'],
    results:
      'A bold, aggressive packaging concept designed for high-energy positioning and strong visual impact.',
    description:
      'Built around an intense, graphic identity with high contrast and strong iconography—designed to feel powerful, collectible, and instantly recognizable.',
  },
  {
    id: 'label-concept-dominate',
    slug: 'dominate',
    title: 'Dominate — Pre-Workout Label Concept',
    category: 'branding',
    thumbnail: '/portfolio/jnk/dominate/dom-01.png',
    heroImage: '/portfolio/jnk/dominate/dom-01.png',
    labelImage: '/portfolio/jnk/dominate/dominate-label-flat.jpg',
    gallery: [
      '/portfolio/jnk/dominate/dom-01.png',
      '/portfolio/jnk/dominate/dom-02.png',
      '/portfolio/jnk/dominate/dom-03.png',
      '/portfolio/jnk/dominate/dom-04.png',
    ],
    role: 'Packaging — Label concept + mockups',
    deliverables: ['Label design', 'Packaging mockups', 'Typography system'],
    tools: ['Photoshop', 'Illustrator'],
    results:
      'A performance-driven packaging direction that communicates intensity while staying clean and premium.',
    description:
      'Focused on strong typography, fast readability, and a “performance” visual language that looks premium across mockups and digital listings.',
  },
  {
    id: 'label-concept-rdx-shot',
    slug: 'rdx-shot',
    title: 'RDX Shot — Pre Workout Branding',
    category: 'branding',
    // Use a product mockup (PNG) as thumbnail/hero
    thumbnail: '/portfolio/jnk/rdx-shot/rdx-shot-main.png',
    heroImage: '/portfolio/jnk/rdx-shot/rdx-shot-main.png',
    labelImage: '/portfolio/jnk/rdx-shot/rdx-label.jpg',
    // PNG mockups should sit on a white background for clean edges
    frameBg: 'light',
    gallery: [
      '/portfolio/jnk/rdx-shot/rdx-shot-main.png',
      '/portfolio/jnk/rdx-shot/rdx-shot-coco-cherry.png',
      '/portfolio/jnk/rdx-shot/rdx-shot-fruit-punch.png',
      '/portfolio/jnk/rdx-shot/rdx-shot-green-apple.png',
      '/portfolio/jnk/rdx-shot/rdx-shot-tropical.png',
      '/portfolio/jnk/rdx-shot/rdx-shot-layer4.jpg',
      '/portfolio/jnk/rdx-shot/rdx-shot-layer3.jpg',
      '/portfolio/jnk/rdx-shot/rdx-shot-layer2.jpg',
      '/portfolio/jnk/rdx-shot/rdx-shot-layer1.jpg'
    ],
    role: 'Packaging — Label concept + mockups',
    deliverables: ['Label design', 'Variant mockups', 'Packaging system'],
    tools: ['Photoshop', 'Illustrator', '3D Mockups'],
    results:
      'A complete packaging direction for a pre-workout shot line, designed to feel premium, bold, and consistent across flavors.',
    description:
      'Packaging branding for the RDX Shot pre-workout line. Built with a clear hierarchy, strong identity, and flavor differentiation—optimized for both shelf presence and e-commerce thumbnails.',
  },
];

export function getLabelConceptBySlug(slug: string) {
  return labelConcepts.find((c) => c.slug === slug);
}


