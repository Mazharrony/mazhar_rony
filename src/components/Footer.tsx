'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const { t } = useLanguage();

  // Footer navigation links
  const footerLinks = [
    { label: t('footer.nav.about'), href: '/about' },
    { label: t('footer.nav.journey'), href: '/journey' },
    { label: t('footer.nav.work'), href: '/work' },
    { label: t('footer.nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-inner">
          {/* Left: Emotional tagline + links */}
          <motion.div
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Emotional tagline */}
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>

            {/* Footer links */}
            <nav className="footer-nav">
              {footerLinks.map((link: any, i: number) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href} className="footer-link">
                    <motion.span whileHover={{ x: 2 }}>
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Location + context */}
            <p className="footer-location">
              {t('footer.location')}
            </p>
          </motion.div>

          {/* Right: "maybe." CTA button */}
          <motion.div
            className="footer-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.button
                className="footer-cta"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('footer.cta')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
