'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useIndexedParallax } from '../utils/motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './WorkPage.css';

interface WebMockupPlaceholderProps {
  domain: string;
  title: string;
}

const WebMockupPlaceholder: React.FC<WebMockupPlaceholderProps> = ({ domain, title }) => {
  const getGradient = (d: string) => {
    const schemes: Record<string, string> = {
      'cmcauto.ae': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'benex.ae': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'avionrealty.ae': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'naharalmadinatyping.com': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'eaglerestaurant.ae': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'shobkichu.com.bd': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'evafurniture.ae': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'prosciencenutra.com': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
    };
    return schemes[d] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  const gradient = getGradient(domain);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: 0, overflow: 'hidden', background: '#0b0b0b' }}>
      <div style={{ position: 'absolute', inset: 0, background: gradient, opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{domain || 'Website'}</div>
            <div style={{ width: 36, height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.16)' }} />
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{title}</div>
            <div style={{ marginTop: 6, fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)' }}>Website Project</div>
          </div>
        </div>
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

const WorkPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div 
      className="work-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-container">
          <motion.div className="work-hero-content" variants={itemVariants}>
            <motion.p className="work-hero-label" variants={itemVariants}>
              {t('work.label') || 'Portfolio & Projects'}
            </motion.p>
            <motion.h1 className="work-hero-title" variants={itemVariants}>
              {t('work.title') || 'Portfolio & Projects'}
            </motion.h1>
            <motion.p className="work-hero-subtitle" variants={itemVariants}>
              {t('work.subtitle') || 'Explore my portfolio of branding projects, social media campaigns, web experiences, and creative work for clients across Dubai and beyond.'}
            </motion.p>
            <motion.div className="work-hero-cta" variants={itemVariants}>
              <Link href="/contact" className="work-cta-primary">
                {t('work.cta') || 'Get In Touch'} <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="work-portfolio">
        <div className="work-portfolio-container">
          <motion.div 
            className="work-filters"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div 
            className="work-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item: PortfolioItem, index: number) => {
                const mergedCategoryKey =
                  normalizeCategory(item.category) === 'content' ? 'design' : item.category;
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
                          backgroundColor: prefersWhiteBg ? '#ffffff' : '#0b0b0b',
                        }}
                      >
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover', backgroundColor: prefersWhiteBg ? '#ffffff' : '#0b0b0b' }}
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
                const isExternalLink = item.category === 'web' && Boolean(item.url);

                const { ref: parallaxRef, style: parallaxStyle } = useIndexedParallax(index, { base: 28, increment: 14, firstUp: true, mobileScale: 0.6 });

                return (
                  <motion.div
                    ref={parallaxRef as any}
                    style={parallaxStyle as any}
                    key={item.id}
                    className={`work-card ${(isInternalLink || isExternalLink) ? 'is-link' : ''}`}
                    variants={cardVariants}
                    whileHover="hover"
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {isInternalLink ? (
                      <Link href={item.href as string} className="work-card-link" aria-label={`Open ${item.title}`}>
                        {CardInner}
                      </Link>
                    ) : isExternalLink ? (
                      <a
                        href={item.url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card-link"
                        aria-label={`Open ${item.title} website`}
                      >
                        {CardInner}
                      </a>
                    ) : (
                      CardInner
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorkPage;

