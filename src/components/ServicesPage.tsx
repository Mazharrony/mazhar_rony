'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { serviceData } from '@/lib/services/serviceData';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { 
      id: "social", 
      slug: "social-media-marketing",
      titleKey: "services.items.0.title", 
      bodyKey: "services.items.0.description",
      detailsKey: "services.details.socialMedia",
      icon: "📱"
    },
    { 
      id: "content", 
      slug: "content-video-production",
      titleKey: "services.items.1.title", 
      bodyKey: "services.items.1.description",
      detailsKey: "services.details.contentVideo",
      icon: "🎥"
    },
    { 
      id: "ads", 
      slug: "google-meta-ads",
      titleKey: "services.items.2.title", 
      bodyKey: "services.items.2.description",
      detailsKey: "services.details.ads",
      icon: "🎯"
    },
    { 
      id: "webopt", 
      slug: "website-optimization",
      titleKey: "services.items.3.title", 
      bodyKey: "services.items.3.description",
      detailsKey: "services.details.website",
      icon: "⚡"
    },
    { 
      id: "brand", 
      slug: "brand-strategy-design",
      titleKey: "services.items.4.title", 
      bodyKey: "services.items.4.description",
      detailsKey: "services.details.brand",
      icon: "✨"
    },
    { 
      id: "ecommerce", 
      slug: "ecommerce-management",
      titleKey: "services.items.5.title", 
      bodyKey: "services.items.5.description",
      detailsKey: "services.details.ecommerce",
      icon: "🛒"
    },
    { 
      id: "webapp", 
      slug: "web-app-development",
      titleKey: "services.items.6.title", 
      bodyKey: "services.items.6.description",
      detailsKey: "services.details.webApp",
      icon: "💻"
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="services-page-container">
      <motion.section 
        className="services-page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="services-page-pill">{t("services.label")}</p>
        <h1 className="services-page-title gradient-text">{t("services.title")}</h1>
        <p className="services-page-subtitle">{t("services.subtitle")}</p>
      </motion.section>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => {
          const skills = t(`${service.detailsKey}.skills`) as any;
          const description = t(`${service.detailsKey}.description`);
          
          return (
            <motion.article
              key={service.id}
              className="service-page-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="service-card-header">
                <div className="service-icon">{service.icon}</div>
                <h2 className="service-card-title gradient-text">
                  {t(service.titleKey)}
                </h2>
              </div>
              
              <p className="service-card-description">
                {description || t(service.bodyKey)}
              </p>

              {skills && Array.isArray(skills) && skills.length > 0 && (
                <div className="service-skills-preview">
                  <h3 className="skills-preview-title">Key Capabilities</h3>
                  <div className="skills-preview-grid">
                    {skills.slice(0, 3).map((skill: any, idx: number) => (
                      <div key={idx} className="skill-preview-item">
                        <span className="skill-preview-icon">{skill.icon}</span>
                        <span className="skill-preview-name">{skill.title}</span>
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

              <Link 
                href={`/services/${service.slug}`}
                className="service-card-cta"
              >
                {t("common.viewMore")} <span>→</span>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.section 
        className="services-page-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="cta-title gradient-text">
          {t("services.detail.cta.title") || "Let's Stop Wasting Time"}
        </h2>
        <p className="cta-description">
          {t("services.detail.cta.description") || "Your competitors are already doing this. Every day you wait, you're leaving money on the table. Let's talk."}
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="cta-btn-primary">
            {t("services.detail.cta.primary") || "I'm Ready, Let's Talk"}
          </Link>
          <Link href="/" className="cta-btn-secondary">
            {t("common.viewMore") || "View More"}
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
