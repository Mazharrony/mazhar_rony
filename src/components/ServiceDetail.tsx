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
        <span className="breadcrumb-separator">›</span>
        <Link href="/services">{t('nav.services')}</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">{t(service.titleKey)}</span>
      </nav>

      {/* Hero Section */}
      <section className="service-hero">
        <span className="service-icon">{service.icon}</span>
        <h1 className="service-title">{t(service.titleKey)}</h1>
        <p className="service-tagline">{t(service.taglineKey)}</p>
      </section>

      {/* Overview Card */}
      <section className="service-section">
        <div className="service-card">
          <h2 className="section-title">{t('services.detail.overview.title')}</h2>
          <p className="section-content">{t(service.overviewKey)}</p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="service-section">
        <div className="service-card">
          <h2 className="section-title">{t('services.detail.why.title')}</h2>
          <p className="section-content">{t(getKey('why'))}</p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="service-section">
        <h2 className="section-title centered">{t('services.detail.approach.title')}</h2>
        <div className="approach-grid">
          {[1, 2, 3, 4].map((step) => {
            const titleKey = getKey(`approach.step${step}.title`);
            const descKey = getKey(`approach.step${step}.description`);
            const title = t(titleKey);
            const desc = t(descKey);
            // Skip if no translation
            if (title === titleKey) return null;
            return (
              <div key={step} className="approach-card service-card">
                <div className="step-number">{step}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What You Get */}
      <section className="service-section">
        <div className="service-card">
          <h2 className="section-title">{t('services.detail.deliverables.title')}</h2>
          <ul className="deliverables-list">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              const key = getKey(`deliverables.${item}`);
              const text = t(key);
              // Only show if translation exists
              if (text === key) return null;
              return (
                <li key={item} className="deliverable-item">
                  <span className="check-icon">✓</span>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Investment/Pricing */}
      <section className="service-section">
        <h2 className="section-title centered">{t('services.detail.pricing.title')}</h2>
        <div className="pricing-grid">
          {['starter', 'professional', 'enterprise'].map((tier) => {
            const nameKey = `services.detail.pricing.${tier}.name`;
            const name = t(nameKey);
            if (name === nameKey) return null;
            
            return (
              <div key={tier} className={`pricing-card service-card ${tier === 'professional' ? 'featured' : ''}`}>
                <h3 className="pricing-tier">{name}</h3>
                <div className="pricing-amount">
                  <span className="currency">$</span>
                  <span className="price">{t(`services.detail.pricing.${tier}.price`)}</span>
                  <span className="period">/{t('services.detail.pricing.period')}</span>
                </div>
                <ul className="pricing-features">
                  {[1, 2, 3, 4, 5].map((feature) => {
                    const key = `services.detail.pricing.${tier}.feature${feature}`;
                    const text = t(key);
                    if (text === key) return null;
                    return (
                      <li key={feature}>
                        <span className="check-icon">✓</span>
                        {text}
                      </li>
                    );
                  })}
                </ul>
                <Link href="/contact" className="pricing-cta">
                  {t('services.detail.pricing.cta')}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="service-section">
        <div className="service-card">
          <h2 className="section-title">{t('services.detail.faq.title')}</h2>
          <div className="faq-list">
            {[1, 2, 3, 4, 5].map((item) => {
              const qKey = getKey(`faq.${item}.question`);
              const aKey = getKey(`faq.${item}.answer`);
              const question = t(qKey);
              const answer = t(aKey);
              if (question === qKey) return null;
              return (
                <details key={item} className="faq-item">
                  <summary className="faq-question">{question}</summary>
                  <p className="faq-answer">{answer}</p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="service-cta">
        <div className="cta-card service-card">
          <h2 className="cta-title">{t('services.detail.cta.title')}</h2>
          <p className="cta-description">{t('services.detail.cta.description')}</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              {t('services.detail.cta.primary')}
            </Link>
            <Link href="/services" className="btn-secondary">
              {t('services.detail.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
