'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { motionConfig } from '../utils/motion';
import './Footer.css';

const Footer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const sectionVariant = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        delay: i * 0.12,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  const linkVariant = {
    rest: { x: 0, color: 'inherit' },
    hover: { 
      x: 6,
      color: 'var(--accent)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariant}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              Mazhar Roni
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Digital Marketing & Creative Specialist
            </motion.p>
          </motion.div>

          <motion.div 
            className="footer-section"
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariant}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Navigate
            </motion.h4>
            <ul>
              {['Home', 'Work', 'About', 'Contact'].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    variants={linkVariant}
                    initial="rest"
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariant}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Services
            </motion.h4>
            <ul>
              {['Product Design', 'Brand Identity', 'Web Design', 'Strategy'].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                >
                  <motion.a 
                    href="#"
                    variants={linkVariant}
                    initial="rest"
                    whileHover="hover"
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariant}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              Contact
            </motion.h4>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="mailto:hello@meetmazhar.site"
                  variants={linkVariant}
                  initial="rest"
                  whileHover="hover"
                >
                  hello@meetmazhar.site
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.55 }}
              >
                <motion.a 
                  href="tel:+971507217156"
                  variants={linkVariant}
                  initial="rest"
                  whileHover="hover"
                >
                  +971 50 721 7156
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a 
                  href="#"
                  variants={linkVariant}
                  initial="rest"
                  whileHover="hover"
                >
                  LinkedIn
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.65 }}
              >
                <motion.a 
                  href="#"
                  variants={linkVariant}
                  initial="rest"
                  whileHover="hover"
                >
                  Twitter
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="footer-bottom-content">
            <p>Based in Dubai, working worldwide.</p>
            <p>&copy; 2025 Mazhar Roni | www.meetmazhar.site</p>
          </div>
        </motion.div>

        <motion.button
          className="footer-maybe-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 12px 32px rgba(99, 102, 241, 0.3)',
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          maybe.
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
