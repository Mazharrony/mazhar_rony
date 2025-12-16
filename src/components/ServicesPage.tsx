'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { serviceData } from '@/lib/services/serviceData';
import {
  SocialMediaIcon,
  VideoIcon,
  TargetIcon,
  LightningIcon,
  SparkleIcon,
  ShoppingIcon,
  CodeIcon,
  LockIcon,
  ChartIcon,
  MobileIcon,
  PaletteIcon,
  TrendingIcon,
  WrenchIcon,
  LightbulbIcon,
  StoreIcon,
  RefreshIcon,
} from './ServicesPageIcons';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const { t, tObject } = useLanguage();

  // Get services from translation - try items first (for Services.tsx compatibility), then cards
  const servicesItems = tObject('services.items') as Array<{ title: string; description: string }> | undefined;
  const servicesCards = tObject('services.cards') as Array<{ title: string; description: string }> | undefined;
  const servicesArray = servicesItems || servicesCards || [];

  const services = [
    { id: "social", title: servicesArray[0]?.title || t('services.cards.0.title') || "Social Media Marketing", description: servicesArray[0]?.description || t('services.cards.0.description') || "", href: "/services/social-media-marketing", icon: SocialMediaIcon, color: "#6366f1" },
    { id: "content", title: servicesArray[1]?.title || t('services.cards.1.title') || "Content & Video Production", description: servicesArray[1]?.description || t('services.cards.1.description') || "", href: "/services/content-video-production", icon: VideoIcon, color: "#a855f7" },
    { id: "ads", title: servicesArray[2]?.title || t('services.cards.2.title') || "Google & Meta Ads", description: servicesArray[2]?.description || t('services.cards.2.description') || "", href: "/services/google-meta-ads", icon: TargetIcon, color: "#ec4899" },
    { id: "webopt", title: servicesArray[3]?.title || t('services.cards.3.title') || "Website Optimization", description: servicesArray[3]?.description || t('services.cards.3.description') || "", href: "/services/website-optimization", icon: LightningIcon, color: "#f59e0b" },
    { id: "brand", title: servicesArray[4]?.title || t('services.cards.4.title') || "Brand Strategy & Design", description: servicesArray[4]?.description || t('services.cards.4.description') || "", href: "/services/brand-strategy-design", icon: SparkleIcon, color: "#10b981" },
    { id: "ecommerce", title: servicesArray[5]?.title || t('services.cards.5.title') || "E-commerce Management", description: servicesArray[5]?.description || t('services.cards.5.description') || "", href: "/services/ecommerce-management", icon: ShoppingIcon, color: "#06b6d4" },
    { id: "webapp", title: servicesArray[6]?.title || t('services.cards.6.title') || "Web App Development", description: servicesArray[6]?.description || t('services.cards.6.description') || "", href: "/services/web-app-development", icon: CodeIcon, color: "#8b5cf6" },
  ];

  const features = [
    { icon: LockIcon, titleKey: "services.page.intro.features.outcome.title", descKey: "services.page.intro.features.outcome.description", color: "#6366f1" },
    { icon: ChartIcon, titleKey: "services.page.intro.features.data.title", descKey: "services.page.intro.features.data.description", color: "#10b981" },
    { icon: LightningIcon, titleKey: "services.page.intro.features.fast.title", descKey: "services.page.intro.features.fast.description", color: "#f59e0b" },
  ];

  const capabilities = [
    { icon: MobileIcon, titleKey: "services.page.capabilities.multiplatform.title", descKey: "services.page.capabilities.multiplatform.description", color: "#6366f1" },
    { icon: PaletteIcon, titleKey: "services.page.capabilities.creative.title", descKey: "services.page.capabilities.creative.description", color: "#a855f7" },
    { icon: TrendingIcon, titleKey: "services.page.capabilities.performance.title", descKey: "services.page.capabilities.performance.description", color: "#ec4899" },
    { icon: WrenchIcon, titleKey: "services.page.capabilities.technical.title", descKey: "services.page.capabilities.technical.description", color: "#f59e0b" },
    { icon: LightbulbIcon, titleKey: "services.page.capabilities.strategic.title", descKey: "services.page.capabilities.strategic.description", color: "#10b981" },
    { icon: StoreIcon, titleKey: "services.page.capabilities.ecommerce.title", descKey: "services.page.capabilities.ecommerce.description", color: "#06b6d4" },
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.4 },
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
      <section className="services-hero">
        <div className="services-hero-container">
          <motion.div className="services-hero-content" variants={itemVariants}>
            <motion.p className="services-hero-label" variants={itemVariants}>
              {t('services.page.hero.label') || t('services.label') || 'Digital Services'}
            </motion.p>
            <motion.h1 className="services-hero-title" variants={itemVariants}>
              {t('services.page.hero.title') || t('services.title') || 'Services'}
            </motion.h1>
            <motion.p className="services-hero-subtitle" variants={itemVariants}>
              {t('services.page.hero.subtitle') || t('services.subtitle') || 'Comprehensive digital solutions tailored to your business needs'}
            </motion.p>
            <motion.div className="services-hero-cta" variants={itemVariants}>
              <Link href="/contact" className="services-cta-primary">
                {t('services.page.hero.ctaPrimary') || 'Get Started'} <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="services-hero-visual" variants={itemVariants}>
            <div className="services-hero-showcase">
              {/* Service Cards Grid - Clean Layout */}
              <div className="hero-showcase-grid">
                {services.slice(0, 6).map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      className="hero-service-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      style={{ '--accent-color': service.color } as React.CSSProperties}
                    >
                      <div className="hero-service-icon">
                        <IconComponent size={24} />
                      </div>
                      <span className="hero-service-name">{service.title.split(' ')[0]}</span>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Stats Section - Clean Bottom Layout */}
              <div className="hero-showcase-stats">
                <motion.div 
                  className="stat-badge stat-badge-growth"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="stat-badge-icon">
                    <TrendingIcon size={16} />
                  </div>
                  <div className="stat-badge-content">
                    <div className="stat-value">250%</div>
                    <div className="stat-label">{t('services.page.hero.stats.growth') || 'Growth'}</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="stat-badge stat-badge-reach"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="stat-badge-icon">
                    <ChartIcon size={16} />
                  </div>
                  <div className="stat-badge-content">
                    <div className="stat-value">2M+</div>
                    <div className="stat-label">{t('services.page.hero.stats.reach') || 'Reach'}</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="stat-badge stat-badge-roi"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="stat-badge-icon">
                    <TargetIcon size={16} />
                  </div>
                  <div className="stat-badge-content">
                    <div className="stat-value">180%</div>
                    <div className="stat-label">{t('services.page.hero.stats.roi') || 'ROI'}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="services-intro">
        <div className="services-intro-container">
          <motion.div className="services-intro-content" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="services-intro-label">{t('services.page.intro.label') || 'The digital-first platform'}</p>
            <h2 className="services-intro-title">{t('services.page.intro.title') || 'Simplify your growth with our services'}</h2>
            <p className="services-intro-description">
              {t('services.page.intro.description') || 'Outcome-focused solutions designed to eliminate friction and connect your business to rapid growth opportunities.'}
            </p>
            <div className="services-intro-features">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="intro-feature-item"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    style={{ '--accent-color': feature.color } as React.CSSProperties}
                  >
                    <div className="intro-feature-icon">
                      <IconComponent size={28} />
                    </div>
                    <h3 className="intro-feature-title">{t(feature.titleKey)}</h3>
                    <p className="intro-feature-description">{t(feature.descKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div 
            className="services-intro-visual" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="intro-visual-container">
              <motion.div 
                className="visual-gradient-square"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <motion.div 
                  className="visual-inner-square"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Growth Chart Animation */}
                  <div className="growth-chart-container">
                    <svg className="growth-chart" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid lines */}
                      <defs>
                        <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                          <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
                        </linearGradient>
                      </defs>
                      {/* Background grid */}
                      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                      <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                      <line x1="20" y1="60" x2="180" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                      <line x1="20" y1="40" x2="180" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                      <line x1="20" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                      
                      {/* Animated growth line */}
                      <motion.path
                        d="M 30 90 Q 50 85, 70 75 T 110 55 T 150 35 T 170 25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                      />
                      
                      {/* Area under curve */}
                      <motion.path
                        d="M 30 90 Q 50 85, 70 75 T 110 55 T 150 35 T 170 25 L 170 100 L 30 100 Z"
                        fill="url(#growthGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      
                      {/* Data points */}
                      {[
                        { x: 30, y: 90 },
                        { x: 70, y: 75 },
                        { x: 110, y: 55 },
                        { x: 150, y: 35 },
                        { x: 170, y: 25 }
                      ].map((point, index) => (
                        <motion.circle
                          key={index}
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="currentColor"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.5 + (index * 0.2),
                            type: "spring",
                            stiffness: 200
                          }}
                        />
                      ))}
                    </svg>
                    
                    {/* Floating feature icons around the chart */}
                    <motion.div
                      className="floating-feature-icon floating-icon-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <LockIcon size={24} />
                    </motion.div>
                    <motion.div
                      className="floating-feature-icon floating-icon-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                      }}
                    >
                      <ChartIcon size={24} />
                    </motion.div>
                    <motion.div
                      className="floating-feature-icon floating-icon-3"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{ 
                        y: [0, -12, 0],
                        rotate: [0, 3, 0]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      <LightningIcon size={24} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optimized Section */}
      <section className="services-optimized">
        <div className="services-optimized-container">
          <motion.div 
            className="services-optimized-content"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="services-optimized-label">{t('services.page.optimized.label') || 'Performance First'}</p>
            <h2 className="services-optimized-title">{t('services.page.optimized.title') || 'Optimized for results'}</h2>
            <p className="services-optimized-description">
              {t('services.page.optimized.description') || 'Designed with a focus on performance, our services employ data-driven strategies, continuous optimization, and advanced analytics to ensure measurable growth and maximum ROI.'}
            </p>
            <div className="services-optimized-features">
              <div className="optimized-feature">
                <LightningIcon size={20} />
                <span>{t('services.page.optimized.features.analytics') || 'Real-time Analytics'}</span>
              </div>
              <div className="optimized-feature">
                <ChartIcon size={20} />
                <span>{t('services.page.optimized.features.tracking') || 'Performance Tracking'}</span>
              </div>
              <div className="optimized-feature">
                <TargetIcon size={20} />
                <span>{t('services.page.optimized.features.goals') || 'Goal-Oriented'}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="services-optimized-visual"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="optimized-visual-grid">
              <motion.div 
                className="grid-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <LightbulbIcon size={24} />
                <span>{t('services.page.optimized.grid.strategy') || 'Strategy'}</span>
              </motion.div>
              <motion.div 
                className="grid-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <VideoIcon size={24} />
                <span>{t('services.page.optimized.grid.content') || 'Content'}</span>
              </motion.div>
              <motion.div 
                className="grid-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <ChartIcon size={24} />
                <span>{t('services.page.optimized.grid.analytics') || 'Analytics'}</span>
              </motion.div>
              <motion.div 
                className="grid-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <WrenchIcon size={24} />
                <span>{t('services.page.optimized.grid.optimization') || 'Optimization'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="services-features">
        <div className="services-features-container">
          <motion.div 
            className="services-feature-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            style={{ '--accent-color': '#6366f1' } as React.CSSProperties}
          >
            <div className="feature-card-header">
              <div className="feature-card-icon">
                <CodeIcon size={32} />
              </div>
              <h3 className="feature-card-title">{t('services.page.features.extensibility.title') || 'Extensibility'}</h3>
            </div>
            <p className="feature-card-description">
              {t('services.page.features.extensibility.description') || 'With a strong emphasis on extensibility, our services offer a flexible framework that allows seamless integration with your existing tools and workflows. Whether you\'re using Shopify, WordPress, or custom platforms, we ensure compatibility and smooth operations.'}
            </p>
            <div className="feature-card-list">
              {(tObject('services.page.features.extensibility.items') as string[] || ['API Integrations', 'Third-party Tools', 'Custom Workflows']).map((item, idx) => (
                <div key={idx} className="feature-list-item">
                  <span className="feature-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="services-feature-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            style={{ '--accent-color': '#a855f7' } as React.CSSProperties}
          >
            <div className="feature-card-header">
              <div className="feature-card-icon">
                <SparkleIcon size={32} />
              </div>
              <h3 className="feature-card-title">{t('services.page.features.options.title') || 'Infinite options'}</h3>
            </div>
            <p className="feature-card-description">
              {t('services.page.features.options.description') || 'With an array of infinite options, our services provide unparalleled flexibility and choice, ensuring we can tailor solutions to your unique business needs. From startups to enterprises, we adapt to your scale and requirements.'}
            </p>
            <div className="feature-card-list">
              {(tObject('services.page.features.options.items') as string[] || ['Scalable Solutions', 'Custom Packages', 'Flexible Pricing']).map((item, idx) => (
                <div key={idx} className="feature-list-item">
                  <span className="feature-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="services-feature-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            style={{ '--accent-color': '#10b981' } as React.CSSProperties}
          >
            <div className="feature-card-header">
              <div className="feature-card-icon">
                <LockIcon size={32} />
              </div>
              <h3 className="feature-card-title">{t('services.page.features.security.title') || 'Security & Reliability'}</h3>
            </div>
            <p className="feature-card-description">
              {t('services.page.features.security.description') || 'Your business data and digital assets are protected with industry-standard security measures. We implement robust protocols, regular backups, and monitoring to ensure your operations run smoothly without interruption.'}
            </p>
            <div className="feature-card-list">
              {(tObject('services.page.features.security.items') as string[] || ['Data Protection', 'Regular Backups', '24/7 Monitoring']).map((item, idx) => (
                <div key={idx} className="feature-list-item">
                  <span className="feature-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features List */}
      <section className="services-capabilities">
        <div className="services-capabilities-container">
          <motion.div 
            className="capabilities-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div 
                  key={index}
                  className="capability-item"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ '--accent-color': capability.color } as React.CSSProperties}
                >
                  <div className="capability-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="capability-title">{t(capability.titleKey)}</h3>
                  <p className="capability-description">{t(capability.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <motion.div 
            className="services-grid-header"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="services-grid-title">{t('services.page.grid.title') || 'More than just a service'}</h2>
            <p className="services-grid-subtitle">
              {t('services.page.grid.subtitle') || 'Our comprehensive approach goes beyond individual services, offering integrated solutions that enhance overall business performance and growth.'}
            </p>
          </motion.div>
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="service-grid-card"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ '--accent-color': service.color } as React.CSSProperties}
                >
                  <div className="service-card-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-body">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="services-process-container">
          <motion.div 
            className="services-process-header"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="services-process-label">{t('services.page.process.label') || 'Our Process'}</p>
            <h2 className="services-process-title">{t('services.page.process.title') || 'How we work'}</h2>
            <p className="services-process-subtitle">
              {t('services.page.process.subtitle') || 'A streamlined approach to delivering results that matter'}
            </p>
          </motion.div>
          <motion.div 
            className="services-process-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '01', titleKey: 'services.page.process.steps.discovery.title', descKey: 'services.page.process.steps.discovery.description', icon: LightbulbIcon, color: '#6366f1' },
              { number: '02', titleKey: 'services.page.process.steps.strategy.title', descKey: 'services.page.process.steps.strategy.description', icon: ChartIcon, color: '#a855f7' },
              { number: '03', titleKey: 'services.page.process.steps.execution.title', descKey: 'services.page.process.steps.execution.description', icon: LightningIcon, color: '#10b981' },
              { number: '04', titleKey: 'services.page.process.steps.optimization.title', descKey: 'services.page.process.steps.optimization.description', icon: WrenchIcon, color: '#f59e0b' },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="process-step"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ '--accent-color': step.color } as React.CSSProperties}
                >
                  <div className="process-step-number-circle">{step.number}</div>
                  <div className="process-step-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="process-step-title">{t(step.titleKey)}</h3>
                  <p className="process-step-description">{t(step.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="services-stats">
        <div className="services-stats-container">
          <motion.div 
            className="services-stats-header"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="services-stats-label">{t('services.page.stats.label') || 'Results That Speak'}</p>
            <h2 className="services-stats-title">{t('services.page.stats.title') || 'Proven track record'}</h2>
            <p className="services-stats-subtitle">
              {t('services.page.stats.subtitle') || 'Numbers that demonstrate our commitment to delivering value'}
            </p>
          </motion.div>
          <motion.div 
            className="services-stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: t('services.page.stats.growth.value') || '250%', labelKey: 'services.page.stats.growth.label', descKey: 'services.page.stats.growth.description', icon: TrendingIcon, color: '#6366f1' },
              { value: t('services.page.stats.reach.value') || '2M+', labelKey: 'services.page.stats.reach.label', descKey: 'services.page.stats.reach.description', icon: ChartIcon, color: '#a855f7' },
              { value: t('services.page.stats.roi.value') || '180%', labelKey: 'services.page.stats.roi.label', descKey: 'services.page.stats.roi.description', icon: TargetIcon, color: '#ec4899' },
              { value: t('services.page.stats.response.value') || '48hrs', labelKey: 'services.page.stats.response.label', descKey: 'services.page.stats.response.description', icon: LightningIcon, color: '#f59e0b' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ '--accent-color': stat.color } as React.CSSProperties}
                >
                  <div className="stat-icon">
                    <IconComponent size={40} />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <h3 className="stat-label">{t(stat.labelKey)}</h3>
                  <p className="stat-description">{t(stat.descKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;

