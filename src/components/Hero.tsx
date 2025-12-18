'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './Hero.css';
import { useScrollReveal } from '../utils/motion';

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
      preload="metadata"
      aria-label="Hero background video"
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
  
  // Scroll-based parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  // Parallax transforms based on scroll
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Scroll reveal hooks for title/copy
  const { ref: titleRef, style: titleStyle } = useScrollReveal({ speed: 30 });
  const { ref: copyRef, style: copyStyle } = useScrollReveal({ speed: 22 });

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
          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-left">
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.title')}
            </motion.span>
            
            {/* Title with scroll-reactive reveal */}
            <motion.h1
              ref={titleRef as any}
              style={titleStyle as any}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title-text"
            >
              {t('header.brand').split(' ').map((word: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    delay: 0.3 + (i * 0.1), 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              ref={copyRef as any}
              style={copyStyle as any}
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
                className="btn btn-primary hero-cta-button"
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.span
                  style={{ position: 'relative', zIndex: 1 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('hero.cta')}
                </motion.span>
                <motion.div
                  className="button-shimmer"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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
