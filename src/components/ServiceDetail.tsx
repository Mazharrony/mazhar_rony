'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import './ServiceDetail.css';

type ServiceSlug = 
  | 'social-media-marketing' 
  | 'content-video-production' 
  | 'google-meta-ads' 
  | 'website-optimization' 
  | 'brand-strategy-design' 
  | 'ecommerce-management'
  | 'web-app-development';

interface ServiceDetailProps {
  slug: ServiceSlug;
  onClose: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug, onClose }) => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  // Map slugs to service details
  const serviceMap: Record<ServiceSlug, { titleKey: string; descKey: string; skillsKey: string }> = {
    'social-media-marketing': { titleKey: 'services.details.socialMedia.title', descKey: 'services.details.socialMedia.description', skillsKey: 'services.details.socialMedia.skills' },
    'content-video-production': { titleKey: 'services.details.contentVideo.title', descKey: 'services.details.contentVideo.description', skillsKey: 'services.details.contentVideo.skills' },
    'google-meta-ads': { titleKey: 'services.details.ads.title', descKey: 'services.details.ads.description', skillsKey: 'services.details.ads.skills' },
    'website-optimization': { titleKey: 'services.details.website.title', descKey: 'services.details.website.description', skillsKey: 'services.details.website.skills' },
    'brand-strategy-design': { titleKey: 'services.details.brand.title', descKey: 'services.details.brand.description', skillsKey: 'services.details.brand.skills' },
    'ecommerce-management': { titleKey: 'services.details.ecommerce.title', descKey: 'services.details.ecommerce.description', skillsKey: 'services.details.ecommerce.skills' },
    'web-app-development': { titleKey: 'services.details.webApp.title', descKey: 'services.details.webApp.description', skillsKey: 'services.details.webApp.skills' }
  };

  const service = serviceMap[slug];
  if (!service) {
    onClose();
    return null;
  }

  const title = t(service.titleKey);
  const description = t(service.descKey);
  const skills = t(service.skillsKey) as any;

  useEffect(() => {
    // Disable scrolling when detail page is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="service-detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="service-detail-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="service-detail-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="service-detail-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="service-detail-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {description}
          </motion.p>

          {skills && Array.isArray(skills) && skills.length > 0 && (
            <motion.div
              className="service-detail-skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>{t('services.skillsHeading') || 'Key Services & Capabilities'}</h2>
              <div className="skills-grid">
                {skills.map((skill: any, index: number) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-body">
                      <h3>{skill.title}</h3>
                      <p>{skill.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            className="service-detail-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="cta-button" onClick={onClose}>
              {t('common.getStarted') || 'Get Started'} →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetail;
