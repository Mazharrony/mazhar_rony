'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { fadeInUp, staggerContainer, motionConfig } from '../utils/motion';
import './Portfolio.css';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[]; // Gallery of images for single product
  tools?: string[];
  results?: string;
  description?: string;
  url?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

interface WebMockupPlaceholderProps {
  domain: string;
  title: string;
}

const WebMockupPlaceholder: React.FC<WebMockupPlaceholderProps> = ({ domain, title }) => {
  // Get color scheme based on domain
  const getColorScheme = (domain: string) => {
    const schemes: Record<string, { gradient: string; primary: string; secondary: string }> = {
      'cmcauto.ae': { 
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        primary: '#667eea', 
        secondary: '#764ba2' 
      },
      'benex.ae': { 
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
        primary: '#f093fb', 
        secondary: '#f5576c' 
      },
      'avionrealty.ae': { 
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
        primary: '#4facfe', 
        secondary: '#00f2fe' 
      },
      'naharalmadinatyping.com': { 
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', 
        primary: '#fa709a', 
        secondary: '#fee140' 
      },
      'eaglerestaurant.ae': { 
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', 
        primary: '#ff9a9e', 
        secondary: '#fecfef' 
      },
      'shobkichu.com.bd': { 
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 
        primary: '#a8edea', 
        secondary: '#fed6e3' 
      },
      'evafurniture.ae': { 
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', 
        primary: '#ffecd2', 
        secondary: '#fcb69f' 
      },
      'prosciencenutra.com': { 
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', 
        primary: '#ff6b6b', 
        secondary: '#ee5a6f' 
      }
    };
    return schemes[domain] || { 
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      primary: '#667eea', 
      secondary: '#764ba2' 
    };
  };

  const colors = getColorScheme(domain);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      {/* Browser Chrome */}
      <div style={{
        background: '#f5f5f5',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28ca42' }}></div>
        </div>
        <div style={{
          flex: 1,
          background: '#ffffff',
          borderRadius: '6px',
          padding: '6px 12px',
          fontSize: '11px',
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12c0 1.2-1.5 2.7-1.5 2.7s-1.5-1.5-1.5-2.7 1.5-2.7 1.5-2.7S21 10.8 21 12zM3 12c0 1.2 1.5 2.7 1.5 2.7s1.5-1.5 1.5-2.7-1.5-2.7-1.5-2.7S3 10.8 3 12zM12 21c1.2 0 2.7-1.5 2.7-1.5S13.2 18 12 18s-2.7 1.5-2.7 1.5S10.8 21 12 21zM12 3C10.8 3 9.3 4.5 9.3 4.5S10.8 6 12 6s2.7-1.5 2.7-1.5S13.2 3 12 3z"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
          <span style={{ color: '#999', fontSize: '10px' }}>https://</span>
          <span style={{ fontWeight: 500 }}>{domain}</span>
        </div>
      </div>

      {/* Website Content Area */}
      <div style={{
        flex: 1,
        background: colors.gradient,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Subtle Pattern Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
          opacity: 0.3
        }}></div>
        
        {/* Domain Display */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          padding: '20px'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 600,
            marginBottom: '8px',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            {domain}
          </div>
          <div style={{
            fontSize: '12px',
            opacity: 0.9,
            fontWeight: 400,
            letterSpacing: '0.5px'
          }}>
            WordPress Website
          </div>
        </div>

        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)'
        }}></div>
      </div>
    </div>
  );
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!item) return null;
  
  const images = item.images && item.images.length > 0 ? item.images : [item.image];
  const currentImage = images[currentImageIndex];

  return (
    <motion.div
      className="portfolio-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="portfolio-modal-box"
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
            layoutId={`portfolio-image-${item.id}`}
            style={{ position: 'relative' }}
          >
            {item.category === 'web' ? (
              <WebMockupPlaceholder 
                domain={item.url?.replace('https://', '').replace('http://', '').split('/')[0] || ''}
                title={item.title}
              />
            ) : currentImage.startsWith('/') ? (
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
            
            {/* Image Gallery Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
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
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
                
                {/* Image Indicators */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      style={{
                        width: currentImageIndex === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        border: 'none',
                        background: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        padding: 0
                      }}
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
              {item.description || `A detailed project case study for ${item.title}. Click to explore more details about our approach and the final outcomes.`}
            </motion.p>

            {item.tools && item.tools.length > 0 && (
              <motion.div
                className="modal-tools"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4>{t('portfolio.modal.toolsUsed')}</h4>
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
                <h4>{t('portfolio.modal.results')}</h4>
                <p>{item.results}</p>
              </motion.div>
            )}

            {item.url ? (
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary modal-cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Visit Website →
              </motion.a>
            ) : (
              <motion.button
                className="btn btn-primary modal-cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('portfolio.modal.cta')}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const ref = React.useRef(null);
  const [mounted, setMounted] = React.useState(false);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Prevent hydration mismatch by only animating after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Portfolio items - automatically uses images from public/portfolio/images/
  // Just upload PNG/JPG files to that folder and they'll appear here
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
    // Design Projects
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
      description: 'Complete QR code scan board design for multiple brands. Features organized layout with QR codes for easy product access, brand consistency, and professional presentation across three pages. Designed for retail displays and marketing materials.'
    },
    // Branding Projects
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
      description: 'Comprehensive branding design for Core Champs RDX Shot pre-workout supplement. Features modern packaging mockups for multiple flavor variants, product photography, and cohesive brand identity. Includes individual bottle designs and multi-pack box mockups with updated, correctly sized images.'
    },
    // Website Projects
    {
      id: 'cmc-auto',
      title: 'CMC Auto - Automotive Website',
      category: 'web',
      image: '/portfolio/websites/cmc-auto.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'WooCommerce'],
      results: 'Modern, responsive automotive website with seamless user experience and fast loading times.',
      description: 'Complete WordPress website development for CMC Auto, featuring modern design, responsive layout, and optimized performance for the automotive industry.',
      url: 'https://cmcauto.ae'
    },
    {
      id: 'benex',
      title: 'Benex - Oil & Gas Solutions',
      category: 'web',
      image: '/portfolio/websites/benex.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Comprehensive B2B website showcasing oil & gas solutions and electrical supplies with intuitive navigation.',
      description: 'Professional WordPress website for Benex, a worldwide provider of oil and gas solutions alongside electrical supplies. Features product catalogs, company information, and inquiry system.',
      url: 'https://benex.ae'
    },
    {
      id: 'avion-realty',
      title: 'Avion Realty - Real Estate Platform',
      category: 'web',
      image: '/portfolio/websites/avion-realty.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Modern real estate platform with property listings and search functionality.',
      description: 'Complete WordPress real estate website development featuring property listings, search functionality, and modern UI/UX design for Avion Realty.',
      url: 'https://avionrealty.ae'
    },
    {
      id: 'nahar-typing',
      title: 'Nahar Al Madina Typing - Business Services',
      category: 'web',
      image: '/portfolio/websites/nahar-typing.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Professional business services website with clear service presentation.',
      description: 'Business WordPress website for Nahar Al Madina Typing services, featuring service information and contact functionality.',
      url: 'https://naharalmadinatyping.com'
    },
    {
      id: 'eagle-restaurant',
      title: 'Eagle Restaurant - Food & Dining',
      category: 'web',
      image: '/portfolio/websites/eagle-restaurant.jpg',
      tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      results: 'Appetizing restaurant website showcasing Indian, Pakistani, and Bangladeshi cuisine with menu display.',
      description: 'Complete WordPress website for Eagle Restaurant featuring menu display, food photography, and reservation system. Showcases authentic Desi flavors and culinary expertise.',
      url: 'https://eaglerestaurant.ae'
    },
    {
      id: 'shobkichu',
      title: 'Shobkichu - E-commerce Platform',
      category: 'web',
      image: '/portfolio/websites/shobkichu.jpg',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'Full-featured e-commerce platform for electronics and gadgets with shopping cart and payment integration.',
      description: 'Complete WordPress e-commerce website for Shobkichu, an online electronics and gadgets store in Bangladesh. Features product catalog, shopping cart, user accounts, and secure checkout.',
      url: 'https://shobkichu.com.bd'
    },
    {
      id: 'eva-furniture',
      title: 'Eva Furniture - Furniture E-commerce',
      category: 'web',
      image: '/portfolio/websites/eva-furniture.jpg',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'Modern furniture e-commerce platform with product catalog, shopping cart, and seamless checkout experience.',
      description: 'Complete WordPress e-commerce website for Eva Furniture, featuring modern design, product catalog, shopping cart functionality, and optimized user experience for furniture shopping in the UAE.',
      url: 'https://evafurniture.ae'
    },
    {
      id: 'proscience-nutra',
      title: 'ProScience Nutra - Supplement Store',
      category: 'web',
      image: '/portfolio/websites/proscience-nutra.jpg',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
      results: 'High-performing supplement e-commerce platform with product categories, goal-based shopping, and promotional features.',
      description: 'Complete WordPress e-commerce website for ProScience Nutra, a nutrition and supplement store. Features product catalog organized by goals (Muscle Building, Energy & Performance, Recovery, Weight Management), shopping cart, wishlist, and promotional campaigns.',
      url: 'https://prosciencenutra.com'
    }
  ];

  const categories = ['all', 'design', 'branding', 'content', 'web'];
  const filtered = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  // Limit items shown on homepage (show only 6 items)
  const ITEMS_PER_PAGE = 6;
  const displayedItems = filtered.slice(0, ITEMS_PER_PAGE);
  const hasMoreItems = filtered.length > ITEMS_PER_PAGE;

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.92, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        delay: i * 0.12,
        ease: motionConfig.easing.smooth,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(4px)',
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="portfolio" className="fold portfolio" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={false}
          animate={mounted && isInView ? "visible" : "visible"}
          variants={mounted ? staggerContainer : undefined}
          suppressHydrationWarning
        >
          <motion.span className="section-label" variants={mounted ? fadeInUp : undefined} suppressHydrationWarning>{t('portfolio.label')}</motion.span>
          <motion.h2 className="gradient-text" variants={mounted ? fadeInUp : undefined} suppressHydrationWarning>{t('portfolio.title')}</motion.h2>
          <motion.p className="section-subtitle" variants={mounted ? fadeInUp : undefined} suppressHydrationWarning>
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        <div className="portfolio-filters">
          <div className="portfolio-filters-container">
            {categories.map((cat: string, index: number) => (
              <button
                key={cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-label={`Filter by ${t(`portfolio.filter.${cat}`)}`}
              >
                <span className="portfolio-filter-text">{t(`portfolio.filter.${cat}`)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-2">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item: any, index: number) => {
              const isFirstThree = index < 3;
              return (
              <motion.div
                key={item.id}
                className="portfolio-card"
                onClick={() => setSelectedItem(item.id)}
                custom={index}
                layout={mounted}
                initial={false}
                animate={mounted ? "visible" : "visible"}
                exit="exit"
                variants={mounted ? cardVariant : undefined}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} portfolio item`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item.id);
                  }
                }}
              >
                <motion.div 
                  className="portfolio-image grayscale" 
                  layoutId={`portfolio-image-${item.id}`}
                  whileHover={{
                    scale: 1.08,
                    filter: 'grayscale(0%)',
                    transition: { duration: 0.45 }
                  }}
                  style={{ willChange: 'transform' }}
                >
                  {item.category === 'web' ? (
                    <WebMockupPlaceholder 
                      domain={item.url?.replace('https://', '').replace('http://', '').split('/')[0] || ''}
                      title={item.title}
                    />
                  ) : item.image.startsWith('/') && !imageErrors[item.id] ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
                        loading={isFirstThree ? 'eager' : 'lazy'}
                        priority={isFirstThree}
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [item.id]: true }));
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{ 
                      background: item.image, 
                      width: '100%', 
                      height: '100%',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.category === 'web' && (
                        <div style={{
                          position: 'absolute',
                          top: '20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '12px',
                          padding: '8px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12c0 1.2-1.5 2.7-1.5 2.7s-1.5-1.5-1.5-2.7 1.5-2.7 1.5-2.7S21 10.8 21 12zM3 12c0 1.2 1.5 2.7 1.5 2.7s1.5-1.5 1.5-2.7-1.5-2.7-1.5-2.7S3 10.8 3 12zM12 21c1.2 0 2.7-1.5 2.7-1.5S13.2 18 12 18s-2.7 1.5-2.7 1.5S10.8 21 12 21zM12 3C10.8 3 9.3 4.5 9.3 4.5S10.8 6 12 6s2.7-1.5 2.7-1.5S13.2 3 12 3z"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                          {item.url?.replace('https://', '').replace('http://', '').split('/')[0]}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
                <motion.div 
                  className="portfolio-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {item.category === 'web' && (
                      <motion.div
                        style={{ 
                          position: 'absolute', 
                          top: '20px', 
                          right: '20px',
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12c0 1.2-1.5 2.7-1.5 2.7s-1.5-1.5-1.5-2.7 1.5-2.7 1.5-2.7S21 10.8 21 12zM3 12c0 1.2 1.5 2.7 1.5 2.7s1.5-1.5 1.5-2.7-1.5-2.7-1.5-2.7S3 10.8 3 12zM12 21c1.2 0 2.7-1.5 2.7-1.5S13.2 18 12 18s-2.7 1.5-2.7 1.5S10.8 21 12 21zM12 3C10.8 3 9.3 4.5 9.3 4.5S10.8 6 12 6s2.7-1.5 2.7-1.5S13.2 3 12 3z"/>
                          <circle cx="12" cy="12" r="2"/>
                        </svg>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Website</span>
                      </motion.div>
                    )}
                    <motion.h4
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p 
                      className="category-tag"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.category}
                    </motion.p>
                    <motion.button 
                      className="view-link"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1, x: 4 }}
                      transition={{ delay: 0.15 }}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item.id);
                      }}
                    >
                      {item.url ? 'Visit Website →' : 'View →'}
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {hasMoreItems && (
          <motion.div 
            className="portfolio-view-all"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/work" className="portfolio-view-all-btn">
              {t('portfolio.viewAll') || 'View All Projects'} <span>→</span>
            </Link>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedItem && (
            <PortfolioModal 
              item={portfolioItems.find(i => i.id === selectedItem) || null}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
