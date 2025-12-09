'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { serviceData, type ServiceSlug } from '@/lib/services/serviceData';
import './ServiceDetail.css';

interface ServiceDetailProps {
  slug: ServiceSlug;
}

const AedIcon = () => (
  <svg
    className="aed-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.69 56.69"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M51.02,27.44l-.85-.74c-.2-.11-.97-.39-1.15-.39h-3.85v3.91c1.98.11,4.12-.25,5.29,1.75.16.27.57,1.32.57,1.59v1.7c-1.66-1.77-4.4-.78-6.57-1.02-.66,3.63-2.74,7.14-5.61,9.45-7.93,6.37-19.66,3.76-29.08,4.32l.65-.89c.52-.92.9-1.92,1.03-2.97l.22-9.9h-2.93c-.11,0-.81-.29-.96-.37-1.66-.84-2.2-2.82-2.07-4.56.41.15.67.52,1.09.71.19.08.86.32,1.01.32h3.75v-4.01h-3.03c-.09,0-1.04-.48-1.18-.57-1.35-.95-1.77-2.79-1.65-4.36.45.28,1.25,1.03,1.8,1.03h4.01l.16-.35c-.23-4.49.85-9.49-1.86-13.42h16.29c6.18.38,12.38,2.61,15.92,7.92,1.18,1.77,1.89,3.78,2.52,5.8,2.19.2,4.17-.51,5.7,1.49.23.31.78,1.34.78,1.69v1.9ZM37.76,22.4c-.58-3.97-2.36-7.86-5.93-9.95-2.61-1.53-5.33-1.78-8.3-1.87-1.97-.06-3.95.05-5.91,0v11.82h20.14ZM38.17,26.3h-20.55v4.01h20.55v-4.01ZM37.76,34.22h-20.14v11.82c5.25-.08,11.4.58,15.67-3.08,2.6-2.23,3.91-5.4,4.47-8.74Z"
    />
  </svg>
);

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const { t } = useLanguage();
  const service = serviceData[slug];

  // Get translation keys for this service
  const getKey = (section: string) => `services.detail.${service.id}.${section}`;

  return (
    <div className="service-detail-page">
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
          <span className="card-number">02</span>
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

      {/* FAQ - Expandable Modern */}
      <section className="service-section faq-section">
        <div className="section-header-inline">
          <span className="section-number">04</span>
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
