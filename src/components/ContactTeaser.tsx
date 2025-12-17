'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './ContactTeaser.css';

const ContactTeaser: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section 
      ref={ref}
      className="contact-teaser"
    >
      <div className="container">
        <motion.div
          className="contact-teaser-inner"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.h2
            className="contact-teaser-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('contact.teaser.title') || 'Let\'s work together'}
          </motion.h2>
          <motion.p
            className="contact-teaser-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('contact.teaser.description') || 'Ready to bring your vision to life? Let\'s discuss your project and create something amazing together.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link href="/contact" className="contact-teaser-cta">
              {t('contact.teaser.cta') || 'Get in touch'}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTeaser;




