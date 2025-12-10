'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './MobileServices.css';

interface Service {
  id: string;
  titleKey: string;
  bodyKey: string;
  href: string;
}

interface MobileServicesProps {
  services: Service[];
}

const MobileServices: React.FC<MobileServicesProps> = ({ services }) => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  // Close detail view
  const closeDetail = () => {
    setSelectedIndex(null);
  };

  // Open detail view
  const openDetail = (index: number) => {
    setSelectedIndex(index);
    setDetailIndex(index);
  };

  // Handle swipe in detail view
  const handleDetailDrag = (_: any, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const currentIndex = detailIndex;

    // Use velocity for better swipe detection
    if ((info.offset.x > threshold || velocity > 500) && currentIndex > 0) {
      // Swipe right - go to previous
      setDetailIndex(currentIndex - 1);
    } else if ((info.offset.x < -threshold || velocity < -500) && currentIndex < services.length - 1) {
      // Swipe left - go to next
      setDetailIndex(currentIndex + 1);
    }
  };

  // Prevent body scroll when detail is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  // Calculate card width (85vw)
  const cardWidth = '85vw';

  return (
    <section id="services" className="mobile-services-section">
      <div className="mobile-services-container">
        <div className="mobile-services-header">
          <p className="mobile-services-pill">{t('services.label') || 'Services'}</p>
          <h2 className="mobile-services-title">{t('services.title')}</h2>
          <p className="mobile-services-subtitle">{t('services.subtitle')}</p>
        </div>

        {/* Carousel */}
        <div className="mobile-services-carousel-wrapper">
          <div
            ref={carouselRef}
            className="mobile-services-carousel"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                className="mobile-service-card"
                style={{
                  width: cardWidth,
                  minWidth: cardWidth,
                }}
                onClick={() => openDetail(index)}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="mobile-service-card-title">
                  {t(service.titleKey)}
                </h3>
                <p className="mobile-service-card-body">
                  {t(service.bodyKey)}
                </p>
                <div className="mobile-service-card-link">
                  {t('common.viewMore') || 'View More'} <span>→</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Full-Screen Detail View */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              className="mobile-services-detail-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeDetail}
            >
              <motion.div
                ref={detailRef}
                className="mobile-services-detail-container"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 300,
                }}
                onClick={(e) => e.stopPropagation()}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDetailDrag}
                dragMomentum={false}
                style={{ touchAction: 'pan-y' }}
              >
                {/* Close Button */}
                <button
                  className="mobile-services-detail-close"
                  onClick={closeDetail}
                  aria-label="Close"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {/* Swipeable Content */}
                <div className="mobile-services-detail-content">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={detailIndex}
                      className="mobile-services-detail-slide"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                        duration: 0.3 
                      }}
                    >
                      <h2 className="mobile-services-detail-title">
                        {t(services[detailIndex].titleKey)}
                      </h2>
                      <p className="mobile-services-detail-description">
                        {t(services[detailIndex].bodyKey)}
                      </p>
                      
                      {/* View More Link */}
                      <a
                        href={services[detailIndex].href}
                        className="mobile-services-detail-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeDetail();
                        }}
                      >
                        {t('common.viewMore') || 'View More'} <span>→</span>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Indicators */}
                <div className="mobile-services-detail-indicators">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      className={`mobile-services-detail-indicator ${
                        index === detailIndex ? 'active' : ''
                      }`}
                      onClick={() => setDetailIndex(index)}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Swipe Hint */}
                <div className="mobile-services-detail-swipe-hint">
                  <span>Swipe to explore</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobileServices;

