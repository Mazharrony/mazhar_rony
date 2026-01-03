'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { getAllWebProjectSlugs } from '@/lib/data/webProjects';
import './WorkPage.css';

interface WorkPageProps {
  jsonLd?: any;
}

interface WebMockupPlaceholderProps {
  domain: string;
  title: string;
}

const WebMockupPlaceholder: React.FC<WebMockupPlaceholderProps> = ({ domain, title }) => {
  const getGradient = (d: string) => {
    const schemes: Record<string, string> = {
      'cmcauto.ae': 'linear-gradient(135deg, #666666 0%, #4a4a4a 100%)',
      'benex.ae': 'linear-gradient(135deg, #808080 0%, #5a5a5a 100%)',
      'avionrealty.ae': 'linear-gradient(135deg, #737373 0%, #525252 100%)',
      'naharalmadinatyping.com': 'linear-gradient(135deg, #8c8c8c 0%, #6b6b6b 100%)',
      'eaglerestaurant.ae': 'linear-gradient(135deg, #999999 0%, #707070 100%)',
      'shobkichu.com.bd': 'linear-gradient(135deg, #7a7a7a 0%, #595959 100%)',
      'evafurniture.ae': 'linear-gradient(135deg, #8a8a8a 0%, #666666 100%)',
      'prosciencenutra.com': 'linear-gradient(135deg, #757575 0%, #555555 100%)',
      'omnex-five.vercel.app': 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      'bridge-seven-delta.vercel.app': 'linear-gradient(135deg, #7c7c7c 0%, #5a5a5a 100%)',
      'inventory-app-brown-two.vercel.app': 'linear-gradient(135deg, #8b7355 0%, #6b5a45 100%)',
      'xotools.vercel.app': 'linear-gradient(135deg, #6a6a6a 0%, #4d4d4d 100%)',
      'prosciencenutra.vercel.app': 'linear-gradient(135deg, #757575 0%, #555555 100%)',
    };
    return schemes[d] || 'linear-gradient(135deg, #666666 0%, #4a4a4a 100%)';
  };

  const gradient = getGradient(domain);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      background: gradient,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.25rem',
    }}>
      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
        {domain || 'Website'}
      </div>
      <div style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4 }}>
        {title}
      </div>
    </div>
  );
};

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[];
  href?: string;
  tools?: string[];
  results?: string;
  description?: string;
  url?: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  normalizeCategory: (c: string) => string;
  cardVariants: any;
}

// Separate component to properly use hooks
const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index, normalizeCategory, cardVariants }) => {
  const { t } = useLanguage();
  
  const mergedCategoryKey = normalizeCategory(item.category) === 'content' ? 'design' : item.category;
  const categoryLabel = t(`portfolio.filter.${mergedCategoryKey}`) || mergedCategoryKey;
  const domain = item.url?.replace('https://', '').replace('http://', '').split('/')[0] || '';
  const isSocial = item.category === 'content';
  const prefersWhiteBg =
    item.image.toLowerCase().endsWith('.png') &&
    (item.id.includes('rdx-shot') || item.image.includes('/portfolio/jnk/rdx-shot/'));

  const CardInner = (
    <>
      <div className="work-card-image">
        {item.category === 'web' && item.url ? (
          <WebMockupPlaceholder domain={domain} title={item.title} />
        ) : item.image.startsWith('/') ? (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '300px',
              backgroundColor: prefersWhiteBg ? 'var(--bg-primary)' : 'var(--bg-primary)',
            }}
          >
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover', backgroundColor: prefersWhiteBg ? 'var(--bg-primary)' : 'var(--bg-primary)' }}
              loading={index < 6 ? 'eager' : 'lazy'}
              priority={index < 3}
            />
          </div>
        ) : (
          <div style={{ 
            background: item.image, 
            width: '100%', 
            height: '100%',
            minHeight: '300px'
          }} />
        )}
        {!isSocial && (
          <div className="work-card-overlay">
            <h3>{item.title}</h3>
            <span className="work-card-category">{categoryLabel}</span>
          </div>
        )}
      </div>
      {!isSocial && (
        <div className="work-card-meta">
          <div className="work-card-title">{item.title}</div>
          <div className="work-card-tag">{categoryLabel}</div>
        </div>
      )}
    </>
  );

  const isInternalLink = Boolean(item.href);
  const isWebProject = item.category === 'web' && Boolean(item.url);
  const webProjectSlugs = getAllWebProjectSlugs();
  const isWebProjectDetail = isWebProject && webProjectSlugs.includes(item.id);

  return (
    <motion.div
      key={item.id}
      className={`work-card ${(isInternalLink || isWebProjectDetail) ? 'is-link' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {isInternalLink ? (
        <Link href={item.href as string} className="work-card-link" aria-label={`Open ${item.title}`}>
          {CardInner}
        </Link>
      ) : isWebProjectDetail ? (
        <Link
          href={`/work/${item.id}`}
          className="work-card-link"
          aria-label={`View ${item.title} details`}
        >
          {CardInner}
        </Link>
      ) : (
        CardInner
      )}
    </motion.div>
  );
};

const WorkPage: React.FC<WorkPageProps> = ({ jsonLd }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Add JSON-LD script if provided
  React.useEffect(() => {
    if (jsonLd && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      script.id = 'portfolio-json-ld';
      
      // Remove existing script if present
      const existing = document.getElementById('portfolio-json-ld');
      if (existing) existing.remove();
      
      document.head.appendChild(script);
      
      return () => {
        const scriptToRemove = document.getElementById('portfolio-json-ld');
        if (scriptToRemove) scriptToRemove.remove();
      };
    }
  }, [jsonLd]);

  const portfolioItems: PortfolioItem[] = [
    { 
      id: 'bcaa', 
      title: 'BCAA Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/BCAA.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Engaging social media poster that increased product visibility and engagement.',
      description: 'Social media poster design for BCAA supplement product with modern, fitness-focused aesthetic optimized for Instagram and Facebook.'
    },
    { 
      id: 'beef-isolate', 
      title: 'Beef Isolate Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/BEEF ISOLATE.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'High-performing social media content that drives brand awareness and conversions.',
      description: 'Social media poster for beef isolate supplement with clean, premium branding designed for social platforms.'
    },
    { 
      id: 'carbox-kiwi', 
      title: 'Carbox Kiwi Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/CARBOX KIWI.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Vibrant social media creative that stands out in competitive feed.',
      description: 'Colorful and energetic social media poster for fruit-flavored supplement product optimized for engagement.'
    },
    { 
      id: 'core-champs-cla', 
      title: 'Core Champs CLA Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/CORE CHAMPS CLA.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Cohesive social media content that increased brand recognition and engagement.',
      description: 'Social media poster design for Core Champs CLA supplement line with strong brand identity.'
    },
    { 
      id: 'core-champs-collagen', 
      title: 'Core Champs Collagen Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/CORE CHAMPS COLLAGEN JUICY PEACH 28SV.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Premium social media content that elevates brand perception and drives sales.',
      description: 'Sophisticated social media poster for collagen supplement with peach flavor variant designed for social platforms.'
    },
    { 
      id: 'creatine', 
      title: 'Creatine Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/CREATINE 1 KG.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Professional social media content that communicates product value and drives conversions.',
      description: 'Social media poster design for 1KG creatine supplement product optimized for Instagram and Facebook feeds.'
    },
    { 
      id: 'isolate', 
      title: 'Isolate Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/ISOLATE.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Clean, modern social media content that appeals to fitness enthusiasts and drives engagement.',
      description: 'Minimalist social media poster design for isolate supplement product created for social media platforms.'
    },
    { 
      id: 'muscle-show', 
      title: 'Muscle Show 2025 Social Media Campaign', 
      category: 'content',
      image: '/portfolio/social/Muscle Show 2025.jpg',
      tools: ['CapCut', 'Adobe Premiere', 'Canva', 'Photoshop'],
      results: 'High-impact social media campaign creative that generated significant engagement and event attendance.',
      description: 'Social media poster and campaign creative for Muscle Show 2025 fitness event designed for maximum reach and engagement.'
    },
    { 
      id: 'nitrix-xtreme', 
      title: 'Nitrix Xtreme Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/NITRIX XTREME.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Bold social media content that captures extreme fitness positioning and drives brand awareness.',
      description: 'High-energy social media poster design for Nitrix Xtreme supplement line optimized for social platforms.'
    },
    { 
      id: 'rdx-xtreme-social', 
      title: 'RDX Xtreme Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/RDX XTREME SOCIAL.jpg',
      tools: ['CapCut', 'Canva', 'After Effects', 'Photoshop'],
      results: 'Engaging social media content that drives brand awareness and increases follower engagement.',
      description: 'Social media poster creative for RDX Xtreme brand designed for Instagram, Facebook, and other social platforms.'
    },
    { 
      id: 'whey', 
      title: 'Whey Protein Social Media Poster', 
      category: 'content',
      image: '/portfolio/social/WHEY.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Professional social media content that communicates product quality and drives conversions.',
      description: 'Premium social media poster design for whey protein supplement product optimized for social media engagement.'
    },
    {
      id: 'qr-code-scan-board',
      title: 'QR Code Scan Board - All Brands',
      category: 'design',
      image: '/portfolio/images/qr-code-board-page1.jpg',
      images: [
        '/portfolio/images/qr-code-board-page1.jpg',
        '/portfolio/images/qr-code-board-page2.jpg',
        '/portfolio/images/qr-code-board-page3.jpg'
      ],
      tools: ['Photoshop', 'Illustrator', 'InDesign'],
      results: 'Professional QR code scan board design showcasing all brand products with clear visual hierarchy and easy scanning access.',
      description: 'Complete QR code scan board design for multiple brands. Features organized layout with QR codes for easy product access, brand consistency, and professional presentation across three pages.'
    },
    {
      id: 'rdx-shot-pre-workout',
      title: 'RDX Shot - Pre Workout Branding',
      category: 'branding',
      image: '/portfolio/jnk/rdx-shot/rdx-shot-main.png',
      images: [
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
      href: '/label-concepts/rdx-shot',
      tools: ['Photoshop', 'Illustrator', '3D Design'],
      results: 'Complete branding package for RDX Shot pre-workout product line with premium packaging design across all flavor variants.',
      description: 'Comprehensive branding design for Core Champs RDX Shot pre-workout supplement. Features modern packaging mockups for multiple flavor variants, product photography, and cohesive brand identity.'
    },
    {
      id: 'label-concept-multi-vitamin',
      title: 'Multi Vitamin — Label Concept',
      category: 'branding',
      image: '/portfolio/jnk/multi-vitamin/mv-01.png',
      images: [
        '/portfolio/jnk/multi-vitamin/mv-01.png',
        '/portfolio/jnk/multi-vitamin/mv-01.png',
        '/portfolio/jnk/multi-vitamin/mv-02.png',
        '/portfolio/jnk/multi-vitamin/mv-03.png',
        '/portfolio/jnk/multi-vitamin/mv-04.png',
        '/portfolio/jnk/multi-vitamin/mv-05.png',
        '/portfolio/jnk/multi-vitamin/mv-06.png',
        '/portfolio/jnk/multi-vitamin/mv-07.png'
      ],
      href: '/label-concepts/multi-vitamin',
      tools: ['Photoshop', 'Illustrator'],
      results: 'A clean, premium packaging direction that balances nutrition clarity with a modern shelf-first look.',
      description: 'Branding (packaging) label concept for a Multi Vitamin product. The focus was on strong hierarchy for key benefits, controlled color, and a premium finish that reads instantly on shelf and in e-commerce.'
    },
    {
      id: 'label-concept-demon-oni',
      title: 'Demon Oni — Label Concept',
      category: 'branding',
      image: '/portfolio/jnk/demon-oni/demon-01.png',
      images: [
        '/portfolio/jnk/demon-oni/demon-01.png',
        '/portfolio/jnk/demon-oni/demon-02.png',
        '/portfolio/jnk/demon-oni/demon-03.png',
        '/portfolio/jnk/demon-oni/demon-04.png',
        '/portfolio/jnk/demon-oni/demon-05.png',
        '/portfolio/jnk/demon-oni/demon-06.png'
      ],
      href: '/label-concepts/demon-oni',
      tools: ['Photoshop', 'Illustrator'],
      results: 'A bold, aggressive packaging concept designed for high-energy positioning and strong visual impact.',
      description: 'Branding (packaging) label concept for “Demon Oni”. Built around an intense, graphic identity with high contrast and strong iconography—designed to feel powerful, collectible, and instantly recognizable.'
    },
    {
      id: 'label-concept-dominate',
      title: 'Dominate — Pre-Workout Label Concept',
      category: 'branding',
      image: '/portfolio/jnk/dominate/dom-01.png',
      images: [
        '/portfolio/jnk/dominate/dom-01.png',
        '/portfolio/jnk/dominate/dom-02.png',
        '/portfolio/jnk/dominate/dom-03.png',
        '/portfolio/jnk/dominate/dom-04.png'
      ],
      href: '/label-concepts/dominate',
      tools: ['Photoshop', 'Illustrator'],
      results: 'A performance-driven packaging direction that communicates intensity while staying clean and premium.',
      description: 'Branding (packaging) label concept for a pre-workout product. Focused on strong typography, fast readability, and a “performance” visual language that looks premium across mockups and digital listings.'
    },
    {
      id: 'cmc-auto',
      title: 'CMC Auto - Automotive Website',
      category: 'web',
      image: '',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'WooCommerce'],
      results: 'Modern, responsive automotive website with seamless user experience and fast loading times.',
      description: 'Complete WordPress website development for CMC Auto, featuring modern design, responsive layout, and optimized performance for the automotive industry.',
      url: 'https://cmcauto.ae'
    },
    {
      id: 'benex',
      title: 'Benex - Oil & Gas Solutions',
      category: 'web',
      image: '',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Comprehensive B2B website showcasing oil & gas solutions and electrical supplies with intuitive navigation.',
      description: 'Professional WordPress website for Benex, a worldwide provider of oil and gas solutions alongside electrical supplies. Features product catalogs, company information, and inquiry system.',
      url: 'https://benex.ae'
    },
    {
      id: 'avion-realty',
      title: 'Avion Realty - Real Estate Platform',
      category: 'web',
      image: '',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Modern real estate platform with property listings and search functionality.',
      description: 'Complete WordPress real estate website development featuring property listings, search functionality, and modern UI/UX design for Avion Realty.',
      url: 'https://avionrealty.ae'
    },
    {
      id: 'nahar-typing',
      title: 'Nahar Al Madina Typing - Business Services',
      category: 'web',
      image: '',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Professional business services website with clear service presentation.',
      description: 'Business WordPress website for Nahar Al Madina Typing services, featuring service information and contact functionality.',
      url: 'https://naharalmadinatyping.com'
    },
    {
      id: 'eagle-restaurant',
      title: 'Eagle Restaurant - Food & Dining',
      category: 'web',
      image: '',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Appetizing restaurant website showcasing Indian, Pakistani, and Bangladeshi cuisine with menu display.',
      description: 'Complete WordPress website for Eagle Restaurant featuring menu display, food photography, and reservation system. Showcases authentic Desi flavors and culinary expertise.',
      url: 'https://eaglerestaurant.ae'
    },
    {
      id: 'shobkichu',
      title: 'Shobkichu - E-commerce Platform',
      category: 'web',
      image: '',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'Full-featured e-commerce platform for electronics and gadgets with shopping cart and payment integration.',
      description: 'Complete WordPress e-commerce website for Shobkichu, an online electronics and gadgets store in Bangladesh. Features product catalog, shopping cart, user accounts, and secure checkout.',
      url: 'https://shobkichu.com.bd'
    },
    {
      id: 'eva-furniture',
      title: 'Eva Furniture - Furniture E-commerce',
      category: 'web',
      image: '',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'Modern furniture e-commerce platform with product catalog, shopping cart, and seamless checkout experience.',
      description: 'Complete WordPress e-commerce website for Eva Furniture, featuring modern design, product catalog, shopping cart functionality, and optimized user experience for furniture shopping in the UAE.',
      url: 'https://evafurniture.ae'
    },
    {
      id: 'proscience-nutra',
      title: 'ProScience Nutra - Supplement Store',
      category: 'web',
      image: '',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'High-performing supplement e-commerce platform with product categories, goal-based shopping, and promotional features.',
      description: 'Complete WordPress e-commerce website for ProScience Nutra, a nutrition and supplement store. Features product catalog organized by goals (Muscle Building, Energy & Performance, Recovery, Weight Management), shopping cart, wishlist, and promotional campaigns.',
      url: 'https://prosciencenutra.com'
    },
    {
      id: 'omnex',
      title: 'OMNEX - Oil & Gas Solutions',
      category: 'web',
      image: '',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      results: 'Modern, high-performance B2B website showcasing global energy solutions with comprehensive product catalogs and streamlined inquiry systems.',
      description: 'Next.js website for OMNEX, a global provider of oil & gas solutions and electrical supplies. Features product catalogs, technical specifications, global reach information, and comprehensive service offerings.',
      url: 'https://omnex-five.vercel.app'
    },
    {
      id: 'bridge',
      title: 'BRIDGE - Business Development & Advisory',
      category: 'web',
      image: '',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      results: 'Professional business advisory website with clear service descriptions, client success stories, and streamlined consultation booking.',
      description: 'Next.js website for BRIDGE, a business development and advisory firm in Dubai. Features service offerings, market entry strategies, business setup guidance, and client testimonials.',
      url: 'https://bridge-seven-delta.vercel.app'
    },
    {
      id: 'jnk-inventory',
      title: 'JNK Nutrition - Sales & Inventory System',
      category: 'web',
      image: '',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      results: 'Comprehensive sales and inventory management system enabling real-time tracking and improved operational efficiency.',
      description: 'Next.js application for JNK Nutrition sales and inventory management. Features sales tracking, inventory management, product catalog, and comprehensive reporting capabilities.',
      url: 'https://inventory-app-brown-two.vercel.app'
    },
    {
      id: 'xotools',
      title: 'XOTools - Online Utility Tools',
      category: 'web',
      image: '',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      results: 'Fast and efficient online tools platform providing instant access to utility tools including image converters, QR code generators, and PDF utilities.',
      description: 'Next.js platform offering a suite of fast and free online tools accessible directly from the browser. Features image converters, QR code generators, PDF utilities, and various productivity tools.',
      url: 'https://xotools.vercel.app'
    },
    {
      id: 'proscience-nutra-nextjs',
      title: 'ProScience Nutra - Next.js Platform',
      category: 'web',
      image: '',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      results: 'Modern, high-performance supplement e-commerce platform with fast loading times and optimized product presentation.',
      description: 'Next.js e-commerce website for ProScience Nutra, featuring premium science-backed supplements. Built with modern web technologies for optimal performance and user experience.',
      url: 'https://prosciencenutra.vercel.app'
    },
  ];

  // Merge "design" + "content" into a single tab (design).
  const categories = ['all', 'design', 'branding', 'web'];
  const normalizeCategory = (c: string) => (c || '').trim().toLowerCase();
  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => {
          const cat = normalizeCategory(item.category);
          // Design tab includes both design + content items
          if (activeCategory === 'design') return cat === 'design' || cat === 'content';
          // Web tab should only show real web projects (must have URL)
          if (activeCategory === 'web') return cat === 'web' && Boolean(item.url);
          return cat === activeCategory;
        });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {},
  };

  return (
    <div className="work-page">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-container">
          <div className="work-hero-content">
            <p className="work-hero-label">
              {t('work.label') || 'Portfolio & Projects'}
            </p>
            <h1 className="work-hero-title">
              {t('work.title') || 'Portfolio & Projects'}
            </h1>
            <p className="work-hero-subtitle">
              {t('work.subtitle') || 'Explore my portfolio of branding projects, social media campaigns, web experiences, and creative work for clients across Dubai and beyond.'}
            </p>
            <div className="work-hero-cta">
              <Link href="/contact" className="work-cta-primary">
                {t('work.cta') || 'Get In Touch'} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="work-portfolio">
        <div className="work-portfolio-container">
          <div className="work-filters">
            <div className="work-filters-container">
              {categories.map((cat: string) => (
                <button
                  key={cat}
                  className={`work-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {t(`portfolio.filter.${cat}`) || cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="work-grid">
            {filtered.map((item: PortfolioItem, index: number) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                normalizeCategory={normalizeCategory}
                cardVariants={cardVariants}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;


