import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { calculate3DTilt, reset3DTilt } from '../utils/motion';
import './Services.css';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  // Scroll-scrubbed animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Strategic content creation and campaign management across Instagram, Facebook, and TikTok.',
      link: 'Learn more'
    },
    {
      title: 'Content & Video Production',
      description: 'Professional photography, videography, and motion content using CapCut and DaVinci Resolve.',
      link: 'Learn more'
    },
    {
      title: 'Google & Meta Ads',
      description: 'Data-driven advertising campaigns optimized for conversion and ROI.',
      link: 'Learn more'
    },
    {
      title: 'Website Optimization',
      description: 'WordPress and Shopify site management, SEO, and UX improvements.',
      link: 'Learn more'
    },
    {
      title: 'Brand Strategy & Design',
      description: 'Visual assets, packaging design, and brand consistency using professional tools.',
      link: 'Learn more'
    },
    {
      title: 'E-commerce Management',
      description: 'Full-spectrum operations including listings, inventory, and sales optimization.',
      link: 'Learn more'
    }
  ];

  const [tiltStyles, setTiltStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setTiltStyles(prev => ({
      ...prev,
      [index]: calculate3DTilt(e, 4)
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTiltStyles(prev => ({
      ...prev,
      [index]: reset3DTilt
    }));
  };

  // Create scroll-scrubbed transforms for each card (must be at top level, not in loops)
  const card0X = useTransform(scrollYProgress, [0.2, 0.6], [-120, 0]);
  const card0Opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  
  const card1X = useTransform(scrollYProgress, [0.15, 0.55], [0, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  
  const card2X = useTransform(scrollYProgress, [0.1, 0.5], [120, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  
  const card3X = useTransform(scrollYProgress, [0.05, 0.45], [-120, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  
  const card4X = useTransform(scrollYProgress, [0, 0.4], [0, 0]);
  const card4Opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  const card5X = useTransform(scrollYProgress, [0, 0.35], [120, 0]);
  const card5Opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  
  const cardTransforms = [
    { x: card0X, opacity: card0Opacity },
    { x: card1X, opacity: card1Opacity },
    { x: card2X, opacity: card2Opacity },
    { x: card3X, opacity: card3Opacity },
    { x: card4X, opacity: card4Opacity },
    { x: card5X, opacity: card5Opacity },
  ];

  return (
    <section className="fold services" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marketing & Creative Skills
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Full-spectrum digital marketing and creative expertise
          </motion.p>
        </motion.div>

        <div className="grid grid-3">
          {services.map((service, index) => {
            const { x, opacity } = cardTransforms[index];
            
            return (
              <motion.div 
                key={index} 
                className="card service-card"
                style={{ 
                  x, 
                  opacity,
                  ...tiltStyles[index] 
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                >
                  {service.description}
                </motion.p>
                <motion.a 
                  href="#" 
                  className="service-link"
                  whileHover={{ 
                    x: 6,
                    transition: { duration: 0.22 }
                  }}
                >
                  {service.link} →
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
