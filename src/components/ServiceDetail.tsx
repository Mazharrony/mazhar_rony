'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { serviceData, type ServiceSlug } from '@/lib/services/serviceData';
import './ServiceDetail.css';

interface ServiceDetailProps {
  slug: ServiceSlug;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const { t } = useLanguage();
  const service = serviceData[slug];

  // Get translation keys for this service
  const getKey = (section: string) => `services.detail.${service.id}.${section}`;

  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">{t('nav.home')}</Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/services">{t('nav.services')}</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{t(service.titleKey)}</span>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="service-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="service-badge">{t('services.detail.badge')}</div>
            <h1 className="service-title">{t(service.titleKey)}</h1>
            <p className="service-tagline">{t(service.taglineKey)}</p>
          </div>
          <div className="hero-accent">
            <div className="accent-line"></div>
            <div className="accent-dot"></div>
          </div>
        </div>
      </section>

      {/* Overview + Why - Asymmetric Grid */}
      <section className="service-section overview-why-grid">
        <div className="overview-card modern-card">
          <span className="card-number">01</span>
          <h2 className="section-title">{t('services.detail.overview.title')}</h2>
          <p className="section-content">{t(service.overviewKey)}</p>
        </div>
        <div className="why-card modern-card accent-card">
          <h2 className="section-title">{t('services.detail.why.title')}</h2>
          <p className="section-content">{t(getKey('why'))}</p>
        </div>
      </section>

      {/* Our Approach - Staggered Cards */}
      <section className="service-section approach-section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title-large">{t('services.detail.approach.title')}</h2>
        </div>
        <div className="approach-stagger">
          {[1, 2, 3, 4].map((step) => {
            const titleKey = getKey(`approach.step${step}.title`);
            const descKey = getKey(`approach.step${step}.description`);
            const title = t(titleKey);
            const desc = t(descKey);
            if (title === titleKey) return null;
            return (
              <div key={step} className={`approach-card modern-card stagger-${step}`}>
                <div className="step-header">
                  <span className="step-number">{step.toString().padStart(2, '0')}</span>
                  <div className="step-line"></div>
                </div>
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What You Get - Minimal List */}
      <section className="service-section deliverables-section">
        <div className="section-header-inline">
          <span className="section-number">03</span>
          <h2 className="section-title-large">{t('services.detail.deliverables.title')}</h2>
        </div>
        <div className="deliverables-minimal">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const key = getKey(`deliverables.${item}`);
            const text = t(key);
            if (text === key) return null;
            return (
              <div key={item} className="deliverable-item-minimal">
                <span className="item-dash">—</span>
                <span className="item-text">{text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Investment/Pricing - Bold Cards */}
      <section className="service-section pricing-section">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title-large">{t('services.detail.pricing.title')}</h2>
        </div>
        <div className="pricing-modern">
          {['starter', 'professional', 'enterprise'].map((tier, index) => {
            const nameKey = `services.detail.pricing.${tier}.name`;
            const name = t(nameKey);
            if (name === nameKey) return null;
            
            return (
              <div key={tier} className={`pricing-modern-card ${tier === 'professional' ? 'featured' : ''}`}>
                <div className="pricing-header">
                  <span className="tier-label">{name}</span>
                  <div className="pricing-amount">
                    {tier !== 'enterprise' && <span className="currency">$</span>}
                    <span className="price">{t(`services.detail.pricing.${tier}.price`)}</span>
                    {tier !== 'enterprise' && <span className="period">/{t('services.detail.pricing.period')}</span>}
                  </div>
                </div>
                <div className="pricing-divider"></div>
                <ul className="pricing-features-minimal">
                  {[1, 2, 3, 4, 5].map((feature) => {
                    const key = `services.detail.pricing.${tier}.feature${feature}`;
                    const text = t(key);
                    if (text === key) return null;
                    return (
                      <li key={feature}>{text}</li>
                    );
                  })}
                </ul>
                <Link href="/contact" className="pricing-cta-modern">
                  {t('services.detail.pricing.cta')} →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ - Expandable Modern */}
      <section className="service-section faq-section">
        <div className="section-header-inline">
          <span className="section-number">05</span>
          <h2 className="section-title-large">{t('services.detail.faq.title')}</h2>
        </div>
        <div className="faq-modern">
          {[1, 2, 3, 4, 5].map((item) => {
            const qKey = getKey(`faq.${item}.question`);
            const aKey = getKey(`faq.${item}.answer`);
            const question = t(qKey);
            const answer = t(aKey);
            if (question === qKey) return null;
            return (
              <details key={item} className="faq-modern-item">
                <summary className="faq-modern-question">
                  <span className="faq-q-text">{question}</span>
                  <span className="faq-toggle"></span>
                </summary>
                <p className="faq-modern-answer">{answer}</p>
              </details>
            );
          })}
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="service-cta-modern">
        <div className="cta-grid">
          <div className="cta-content">
            <h2 className="cta-title">{t('services.detail.cta.title')}</h2>
            <p className="cta-description">{t('services.detail.cta.description')}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="cta-btn-primary">
              {t('services.detail.cta.primary')}
            </Link>
            <Link href="/services" className="cta-btn-ghost">
              {t('services.detail.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
