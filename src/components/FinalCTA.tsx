import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { motionConfig } from '../utils/motion';
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  
  // Parallax effect for image grid
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const imageVariants = [
    { hidden: { opacity: 0, scale: 0.8, rotate: -5 }, y: y1 },
    { hidden: { opacity: 0, scale: 0.8, rotate: 3 }, y: y2 },
    { hidden: { opacity: 0, scale: 0.8, rotate: -3 }, y: y3 },
    { hidden: { opacity: 0, scale: 0.8, rotate: 5 }, y: y4 },
  ];

  return (
    <section className="fold final-cta" ref={ref}>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-images">
            {imageVariants.map((variant, index) => (
              <motion.div
                key={index}
                className="cta-image-card grayscale"
                style={{ 
                  background: `linear-gradient(135deg, ${['#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0'][index]}, ${['#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0'][index]})`,
                  y: variant.y
                }}
                initial={variant.hidden}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: motionConfig.easing.smooth
                  }
                } : variant.hidden}
                whileHover={{
                  scale: 1.08,
                  rotate: index % 2 === 0 ? 3 : -3,
                  filter: 'grayscale(0%)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.4 }
                }}
              />
            ))}
          </div>

          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 50, filter: 'blur(10px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Because your project<br/>deserves the best,<br/>always
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Let's work together to create something extraordinary. Get in touch and let's discuss your project.
            </motion.p>
            <motion.button 
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              whileHover={{
                scale: 1.06,
                y: -4,
                boxShadow: '0 16px 48px rgba(99, 102, 241, 0.45)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
