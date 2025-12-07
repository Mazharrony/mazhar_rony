'use client';

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { fadeInUp, staggerContainer, motionConfig } from '../utils/motion';
import './Portfolio.css';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tools?: string[];
  results?: string;
  description?: string;
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  const { t } = useLanguage();
  if (!item) return null;

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
            style={{ background: item.image }}
            layoutId={`portfolio-image-${item.id}`}
          />

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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    { 
      id: '1', 
      title: 'Supplements Packaging Design', 
      category: 'design',
      image: 'linear-gradient(135deg, #e0e0e0, #d0d0d0)',
      tools: ['Photoshop', 'Illustrator', 'Adobe XD'],
      results: 'Increased product shelf visibility by 45% with eye-catching packaging design.',
      description: 'A complete product packaging redesign for a premium supplement brand. Including label design, box mockups, and production specifications.'
    },
    { 
      id: '2', 
      title: 'Brand Strategy & Visual Identity', 
      category: 'branding',
      image: 'linear-gradient(135deg, #d0d0d0, #c0c0c0)',
      tools: ['Figma', 'Adobe Creative Suite', 'Canva'],
      results: 'Created cohesive brand identity resulting in 60% increased brand recognition.',
      description: 'Developed comprehensive brand guidelines including logo systems, color palettes, typography, and brand voice documentation.'
    },
    { 
      id: '3', 
      title: 'Social Media Creative Content', 
      category: 'content',
      image: 'linear-gradient(135deg, #c0c0c0, #b0b0b0)',
      tools: ['CapCut', 'Adobe Premiere', 'Canva', 'After Effects'],
      results: '2M+ reach on viral Facebook frame and 5K+ engagement per post.',
      description: 'High-impact social media creatives including carousel posts, Reels, TikToks, and video content for fitness and e-commerce brands.'
    },
    { 
      id: '4', 
      title: 'Website & Digital Marketing', 
      category: 'web',
      image: 'linear-gradient(135deg, #b0b0b0, #a0a0a0)',
      tools: ['WordPress', 'Shopify', 'Google Analytics', 'Meta Ads'],
      results: '35% increase in conversion rate and 150% ROI improvement.',
      description: 'Website optimization, e-commerce management, and integrated digital marketing campaigns across Google Ads and Meta platforms.'
    }
  ];

  const categories = ['all', 'design', 'branding', 'content', 'web'];
  const filtered = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span className="section-label" variants={fadeInUp}>{t('portfolio.label')}</motion.span>
          <motion.h2 variants={fadeInUp}>{t('portfolio.title')}</motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            {t('portfolio.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="filter-pills"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((cat: string, index: number) => (
            <motion.button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: '0 6px 20px rgba(99, 102, 241, 0.2)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`portfolio.filter.${cat}`)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item: any, index: number) => (
              <motion.div
                key={item.id}
                className="portfolio-card"
                onClick={() => setSelectedItem(item.id)}
                custom={index}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariant}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <motion.div 
                  className="portfolio-image grayscale" 
                  style={{ background: item.image }}
                  layoutId={`portfolio-image-${item.id}`}
                  whileHover={{
                    scale: 1.08,
                    filter: 'grayscale(0%)',
                    transition: { duration: 0.45 }
                  }}
                />
                <motion.div 
                  className="portfolio-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
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
                      View →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
