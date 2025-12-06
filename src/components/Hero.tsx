import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
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
              Digital Marketing & Creative Specialist
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Mazhar Roni
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Results-driven Digital Marketing & Creative Specialist with expertise in social media strategy, content creation, video production, and campaign optimization across fitness, supplement, and e-commerce brands.
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
                View my work
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
                Get in touch
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
                className="hero-image grayscale"
                style={{ x, y }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.35 }
                }}
              />
              
              <motion.div 
                className="floating-badge badge-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: useTransform(x, [0, 20], [0, -8]),
                  y: useTransform(y, [0, 20], [0, -8]),
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <span>Design</span>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: useTransform(x, [0, 20], [0, 10]),
                  y: useTransform(y, [0, 20], [0, 6]),
                }}
                whileHover={{ scale: 1.15, rotate: -5 }}
              >
                <span>Brand</span>
              </motion.div>
              
              <motion.div 
                className="floating-badge badge-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: useTransform(x, [0, 20], [0, -6]),
                  y: useTransform(y, [0, 20], [0, 10]),
                }}
                whileHover={{ scale: 1.15, rotate: 3 }}
              >
                <span>Web</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
