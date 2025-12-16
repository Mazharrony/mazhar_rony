'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './WorkPage.css';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[];
  tools?: string[];
  results?: string;
  description?: string;
  url?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!item) return null;
  
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const currentImage = images[currentImageIndex];

  return (
    <motion.div
      className="work-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="work-modal-box"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-content">
          <motion.div
            className="modal-image"
            layoutId={`work-image-${item.id}`}
            style={{ position: 'relative' }}
          >
            {currentImage.startsWith('/') ? (
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                <Image 
                  src={currentImage} 
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{ 
                    objectFit: 'contain', 
                    borderRadius: '12px', 
                    backgroundColor: '#f5f5f5'
                  }}
                  priority={currentImageIndex === 0}
                />
              </div>
            ) : (
              <div style={{ background: currentImage, width: '100%', height: '100%', borderRadius: '12px' }} />
            )}
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                  className="modal-nav-btn modal-nav-prev"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                  className="modal-nav-btn modal-nav-next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
                
                <div className="modal-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`modal-indicator ${currentImageIndex === index ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>

          <div className="modal-info">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {item.title}
            </motion.h2>

            <motion.p
              className="modal-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {item.description || `A detailed project case study for ${item.title}.`}
            </motion.p>

            {item.tools && item.tools.length > 0 && (
              <motion.div
                className="modal-tools"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4>{t('portfolio.modal.toolsUsed') || 'Tools Used'}</h4>
                <div className="tools-list">
                  {item.tools.map((tool: string, idx: number) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {item.results && (
              <motion.div
                className="modal-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <h4>{t('portfolio.modal.results') || 'Results'}</h4>
                <p>{item.results}</p>
              </motion.div>
            )}

            {item.url && (
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-cta-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website →
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    { 
      id: 'bcaa', 
      title: 'BCAA Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/BCAA.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Engaging social media poster that increased product visibility and engagement.',
      description: 'Social media poster design for BCAA supplement product with modern, fitness-focused aesthetic optimized for Instagram and Facebook.'
    },
    { 
      id: 'beef-isolate', 
      title: 'Beef Isolate Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/BEEF ISOLATE.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'High-performing social media content that drives brand awareness and conversions.',
      description: 'Social media poster for beef isolate supplement with clean, premium branding designed for social platforms.'
    },
    { 
      id: 'carbox-kiwi', 
      title: 'Carbox Kiwi Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/CARBOX KIWI.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Vibrant social media creative that stands out in competitive feed.',
      description: 'Colorful and energetic social media poster for fruit-flavored supplement product optimized for engagement.'
    },
    { 
      id: 'core-champs-cla', 
      title: 'Core Champs CLA Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/CORE CHAMPS CLA.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Cohesive social media content that increased brand recognition and engagement.',
      description: 'Social media poster design for Core Champs CLA supplement line with strong brand identity.'
    },
    { 
      id: 'core-champs-collagen', 
      title: 'Core Champs Collagen Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/CORE CHAMPS COLLAGEN JUICY PEACH 28SV.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Premium social media content that elevates brand perception and drives sales.',
      description: 'Sophisticated social media poster for collagen supplement with peach flavor variant designed for social platforms.'
    },
    { 
      id: 'creatine', 
      title: 'Creatine Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/CREATINE 1 KG.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Professional social media content that communicates product value and drives conversions.',
      description: 'Social media poster design for 1KG creatine supplement product optimized for Instagram and Facebook feeds.'
    },
    { 
      id: 'isolate', 
      title: 'Isolate Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/ISOLATE.jpg',
      tools: ['Photoshop', 'Illustrator', 'Canva'],
      results: 'Clean, modern social media content that appeals to fitness enthusiasts and drives engagement.',
      description: 'Minimalist social media poster design for isolate supplement product created for social media platforms.'
    },
    { 
      id: 'muscle-show', 
      title: 'Muscle Show 2025 Social Media Campaign', 
      category: 'content',
      image: '/portfolio/images/Muscle Show 2025.jpg',
      tools: ['CapCut', 'Adobe Premiere', 'Canva', 'Photoshop'],
      results: 'High-impact social media campaign creative that generated significant engagement and event attendance.',
      description: 'Social media poster and campaign creative for Muscle Show 2025 fitness event designed for maximum reach and engagement.'
    },
    { 
      id: 'nitrix-xtreme', 
      title: 'Nitrix Xtreme Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/NITRIX XTREME.jpg',
      tools: ['Photoshop', 'Figma', 'Adobe Creative Suite'],
      results: 'Bold social media content that captures extreme fitness positioning and drives brand awareness.',
      description: 'High-energy social media poster design for Nitrix Xtreme supplement line optimized for social platforms.'
    },
    { 
      id: 'rdx-xtreme-social', 
      title: 'RDX Xtreme Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/RDX XTREME SOCIAL.jpg',
      tools: ['CapCut', 'Canva', 'After Effects', 'Photoshop'],
      results: 'Engaging social media content that drives brand awareness and increases follower engagement.',
      description: 'Social media poster creative for RDX Xtreme brand designed for Instagram, Facebook, and other social platforms.'
    },
    { 
      id: 'whey', 
      title: 'Whey Protein Social Media Poster', 
      category: 'content',
      image: '/portfolio/images/WHEY.jpg',
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
      image: '/portfolio/images/rdx-shot-main.png',
      images: [
        '/portfolio/images/rdx-shot-main.png',
        '/portfolio/images/rdx-shot-layer4.jpg',
        '/portfolio/images/rdx-shot-layer3.jpg',
        '/portfolio/images/rdx-shot-layer2.jpg',
        '/portfolio/images/rdx-shot-layer1.jpg'
      ],
      tools: ['Photoshop', 'Illustrator', '3D Design'],
      results: 'Complete branding package for RDX Shot pre-workout product line with premium packaging design across all flavor variants.',
      description: 'Comprehensive branding design for Core Champs RDX Shot pre-workout supplement. Features modern packaging mockups for multiple flavor variants, product photography, and cohesive brand identity.'
    },
    {
      id: 'cmc-auto',
      title: 'CMC Auto - Automotive Website',
      category: 'web',
      image: '/portfolio/images/cmc-auto.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'WooCommerce'],
      results: 'Modern, responsive automotive website with seamless user experience and fast loading times.',
      description: 'Complete WordPress website development for CMC Auto, featuring modern design, responsive layout, and optimized performance for the automotive industry.',
      url: 'https://cmcauto.ae'
    },
    {
      id: 'benex',
      title: 'Benex - Oil & Gas Solutions',
      category: 'web',
      image: '/portfolio/images/benex.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Comprehensive B2B website showcasing oil & gas solutions and electrical supplies with intuitive navigation.',
      description: 'Professional WordPress website for Benex, a worldwide provider of oil and gas solutions alongside electrical supplies. Features product catalogs, company information, and inquiry system.',
      url: 'https://benex.ae'
    },
    {
      id: 'muscle-show',
      title: 'Muscle Show 2025 Social Media Campaign',
      category: 'content',
      image: '/portfolio/images/Muscle Show 2025.jpg',
      tools: ['CapCut', 'Adobe Premiere', 'Canva', 'Photoshop'],
      results: 'High-impact social media campaign creative that generated significant engagement and event attendance.',
      description: 'Social media poster and campaign creative for Muscle Show 2025 fitness event designed for maximum reach and engagement.'
    }
  ];

  const categories = ['all', 'design', 'branding', 'content', 'web'];
  const filtered = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
            {categories.map((cat: string) => (
              <button
                key={cat}
                className={`work-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t(`portfolio.filter.${cat}`) || cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="work-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item: PortfolioItem, index: number) => (
                <motion.div
                  key={item.id}
                  className="work-card"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setSelectedItem(item.id)}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="work-card-image">
                    {item.image.startsWith('/') ? (
                      <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
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
                    <div className="work-card-overlay">
                      <h3>{item.title}</h3>
                      <span className="work-card-category">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <PortfolioModal 
            item={portfolioItems.find(i => i.id === selectedItem) || null}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkPage;

