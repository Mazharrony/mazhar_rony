'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { serviceData, type ServiceSlug } from '@/lib/services/serviceData';
import './ServicesPage.css';

const ServicesPageClient: React.FC = () => {
  const { t, tObject } = useLanguage();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Map service IDs to detail keys
  const serviceDetailMap: Record<string, { titleKey: string; descKey: string; skillsKey: string }> = {
    social: { 
      titleKey: 'services.details.socialMedia.title', 
      descKey: 'services.details.socialMedia.description', 
      skillsKey: 'services.details.socialMedia.skills' 
    },
    content: { 
      titleKey: 'services.details.contentVideo.title', 
      descKey: 'services.details.contentVideo.description', 
      skillsKey: 'services.details.contentVideo.skills' 
    },
    ads: { 
      titleKey: 'services.details.ads.title', 
      descKey: 'services.details.ads.description', 
      skillsKey: 'services.details.ads.skills' 
    },
    webopt: { 
      titleKey: 'services.details.website.title', 
      descKey: 'services.details.website.description', 
      skillsKey: 'services.details.website.skills' 
    },
    brand: { 
      titleKey: 'services.details.brand.title', 
      descKey: 'services.details.brand.description', 
      skillsKey: 'services.details.brand.skills' 
    },
    ecommerce: { 
      titleKey: 'services.details.ecommerce.title', 
      descKey: 'services.details.ecommerce.description', 
      skillsKey: 'services.details.ecommerce.skills' 
    },
    webapp: { 
      titleKey: 'services.details.webApp.title', 
      descKey: 'services.details.webApp.description', 
      skillsKey: 'services.details.webApp.skills' 
    },
  };

  const services = Object.entries(serviceData).map(([slug, data]) => ({
    slug: slug as ServiceSlug,
    ...data,
    detail: serviceDetailMap[data.id],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="services-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="services-hero" variants={itemVariants}>
        <div className="services-hero-content">
          <motion.span className="services-badge" variants={itemVariants}>
            {t('services.label')}
          </motion.span>
          <motion.h1 className="services-hero-title gradient-text" variants={itemVariants}>
            {t('services.title')}
          </motion.h1>
          <motion.p className="services-hero-subtitle" variants={itemVariants}>
            {t('services.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section className="services-grid-section" variants={containerVariants}>
        <div className="services-grid-container">
          {services.map((service, index) => {
            const title = t(service.detail?.titleKey || service.titleKey);
            const description = t(service.detail?.descKey || '');
            const skillsData = service.detail?.skillsKey ? tObject(service.detail.skillsKey) : null;
            const skills = Array.isArray(skillsData) ? skillsData : [];

            return (
              <motion.article
                key={service.slug}
                className="service-card-modern"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                whileHover="hover"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                  <div className="service-card-number">0{index + 1}</div>
                </div>

                <div className="service-card-content">
                  <h2 className="service-card-title gradient-text">{title}</h2>
                  <p className="service-card-description">{description}</p>

                  {skills && Array.isArray(skills) && skills.length > 0 && (
                    <div className="service-skills-preview">
                      <div className="skills-preview-grid">
                        {skills.slice(0, 3).map((skill: any, skillIndex: number) => (
                          <div
                            key={skillIndex}
                            className="skill-preview-item"
                            style={{ '--accent': skill.accent } as React.CSSProperties}
                          >
                            <span className="skill-preview-icon">{skill.icon}</span>
                            <span className="skill-preview-title">{skill.title}</span>
                          </div>
                        ))}
                        {skills.length > 3 && (
                          <div className="skill-preview-more">
                            +{skills.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="service-card-footer">
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-card-link"
                  >
                    <span>{t('common.viewMore')}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                {skills.length > 0 && (
                  <div
                    className={`service-card-glow ${hoveredService === service.id ? 'active' : ''}`}
                    style={{
                      '--accent': skills[0]?.accent || '#6366f1',
                    } as React.CSSProperties}
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="services-cta-section" variants={itemVariants}>
        <div className="services-cta-content">
          <motion.h2 className="services-cta-title gradient-text" variants={itemVariants}>
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p className="services-cta-description" variants={itemVariants}>
            Let's discuss how we can help you achieve your goals. Get in touch and let's build something extraordinary together.
          </motion.p>
          <motion.div className="services-cta-buttons" variants={itemVariants}>
            <Link href="/contact" className="cta-button-primary">
              Get Started
            </Link>
            <Link href="/#portfolio" className="cta-button-secondary">
              View Work
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ServicesPageClient;

