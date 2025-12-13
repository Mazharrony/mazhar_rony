'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const ContactTeaser: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section 
      ref={ref}
      className="contact-teaser"
      style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(139, 92, 246, 0.03) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <motion.div
          style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              marginBottom: '20px',
              color: 'var(--text-primary)',
              lineHeight: 1.2
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('contact.teaser.title') || 'Let\'s work together'}
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              lineHeight: 1.7
            }}
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
            <Link href="/contact">
              <motion.button
                style={{
                  padding: '16px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'var(--accent-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t('contact.teaser.cta') || 'Get in touch'}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTeaser;


