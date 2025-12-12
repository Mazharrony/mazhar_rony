'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './Hero.css';

const PRIMARY_TOOLS = ['photoshop', 'illustrator', 'figma', 'canva', 'capcut'];
const SECONDARY_TOOLS = ['googleads', 'meta', 'analytics', 'shopify', 'wordpress'];
const ALL_TOOLS = [...PRIMARY_TOOLS, ...SECONDARY_TOOLS];

// Video component for hero section
const HeroVideo: React.FC = () => {
  return (
    <motion.video
      className="hero-video"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

interface FloatingIconProps {
  className: string;
  mouseX: any;
  mouseY: any;
  xMultiplier: number;
  yMultiplier: number;
  delay: number;
  rotationInterval: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  className, 
  mouseX, 
  mouseY, 
  xMultiplier, 
  yMultiplier,
  delay,
  rotationInterval
}) => {
  const [currentToolIndex, setCurrentToolIndex] = useState(Math.floor(Math.random() * ALL_TOOLS.length));
  const [isAnimating, setIsAnimating] = useState(false);

  const transformX = useTransform(mouseX, [0, 20], [0, xMultiplier]);
  const transformY = useTransform(mouseY, [0, 20], [0, yMultiplier]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentToolIndex((prev) => (prev + 1) % ALL_TOOLS.length);
        setIsAnimating(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [rotationInterval]);

  const currentTool = ALL_TOOLS[currentToolIndex];

  return (
    <motion.div 
      className={`floating-icon-badge ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        x: transformX,
        y: transformY,
      }}
      whileHover={{ 
        scale: 1.12,
        boxShadow: '0 12px 32px rgba(99, 102, 241, 0.25)',
        transition: { duration: 0.25 }
      }}
    >
      <motion.div
        className="icon-container"
        animate={{
          opacity: isAnimating ? 0 : 1,
          scale: isAnimating ? 0.85 : 1,
        }}
        transition={{ 
          duration: 0.25,
          ease: isAnimating ? [0.17, 0.67, 0.3, 1] : [0.17, 0.67, 0.3, 1.08]
        }}
      >
        <img 
          src={`https://cdn.simpleicons.org/${currentTool}`}
          alt={currentTool}
          className="tool-icon"
        />
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { t } = useLanguage();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) * 0.015;
    const moveY = (e.clientY - centerY) * 0.015;
    
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="fold hero" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="hero-inner"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-left">
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.title')}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('header.brand')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero.cta')}
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('header.cta')}
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 50, filter: 'blur(10px)' }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero-image-container">
              <motion.div 
                className="hero-image"
                style={{ x, y }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.35 }
                }}
              >
                <HeroVideo />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
