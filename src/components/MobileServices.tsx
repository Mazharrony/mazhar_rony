'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  // Track scroll position for card stack animation
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    
    requestAnimationFrame(() => {
      if (!carouselRef.current) return;
      
      const container = carouselRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const cardWidth = containerWidth * 0.85; // 85vw equivalent
      const gap = 16; // 1rem gap
      
      // Calculate which card is in focus (0 = first card)
      const currentIndex = Math.round(scrollLeft / (cardWidth + gap));
      const maxIndex = services.length - 1;
      const clampedIndex = Math.max(0, Math.min(currentIndex, maxIndex));
      
      // Calculate progress within current card (0 to 1)
      const cardStart = clampedIndex * (cardWidth + gap);
      const cardProgress = (scrollLeft - cardStart) / (cardWidth + gap);
      const normalizedProgress = Math.max(0, Math.min(1, cardProgress));
      
      setScrollProgress(normalizedProgress);
    });
  }, [services.length]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Calculate card transforms based on scroll position
  const getCardStyle = (index: number) => {
    if (!carouselRef.current) {
      return { scale: 1.0, opacity: 1.0, y: 0 };
    }
    
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const cardWidth = containerWidth * 0.85;
    const gap = 16;
    const totalCardWidth = cardWidth + gap;
    
    // Calculate card position relative to viewport center
    const cardStart = index * totalCardWidth;
    const cardCenter = cardStart + cardWidth / 2;
    const viewportCenter = scrollLeft + containerWidth / 2;
    const distance = (cardCenter - viewportCenter) / totalCardWidth;
    
    // Calculate scale, opacity, and translateY based on distance from center
    let scale = 1.0;
    let opacity = 1.0;
    let translateY = 0;
    
    const absDistance = Math.abs(distance);
    
    if (absDistance < 0.1) {
      // Front card (centered)
      scale = 1.0;
      opacity = 1.0;
      translateY = 0;
    } else if (absDistance < 0.6) {
      // Next card (peeking) - distance 0.1 to 0.6
      const progress = (absDistance - 0.1) / 0.5; // 0 to 1
      scale = 1.0 - progress * 0.08; // 1.0 to 0.92
      opacity = 1.0 - progress * 0.45; // 1.0 to 0.55
      translateY = progress * 4; // 0 to 4px
    } else if (absDistance < 1.1) {
      // Third card (further back) - distance 0.6 to 1.1
      const progress = (absDistance - 0.6) / 0.5; // 0 to 1
      scale = 0.92 - progress * 0.07; // 0.92 to 0.85
      opacity = 0.55 - progress * 0.25; // 0.55 to 0.30
      translateY = 4 + progress * 4; // 4px to 8px
    } else {
      // Cards beyond third position
      scale = 0.85;
      opacity = 0.30;
      translateY = 8;
    }
    
    return {
      scale: Math.max(0.85, Math.min(1.0, scale)),
      opacity: Math.max(0.3, Math.min(1.0, opacity)),
      y: translateY,
    };
  };

  // Open detail view
  const openDetail = (index: number) => {
    setSelectedIndex(index);
    setDetailIndex(index);
  };

  // Close detail view
  const closeDetail = () => {
    setSelectedIndex(null);
  };

  // Handle swipe in detail view
  const handleDetailDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const currentIndex = detailIndex;

    if ((info.offset.x > threshold || velocity > 500) && currentIndex > 0) {
      setDetailIndex(currentIndex - 1);
    } else if ((info.offset.x < -threshold || velocity < -500) && currentIndex < services.length - 1) {
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

  // Update detail index when swiping
  useEffect(() => {
    if (selectedIndex !== null) {
      setDetailIndex(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <section id="services" className="mobile-services-section">
      <div className="mobile-services-container">
        <div className="mobile-services-header">
          <p className="mobile-services-pill">{t('services.label') || 'Services'}</p>
          <h2 className="mobile-services-title">{t('services.title')}</h2>
          <p className="mobile-services-subtitle">{t('services.subtitle')}</p>
        </div>

        {/* Card Stack Carousel */}
        <div className="mobile-services-carousel-wrapper">
          <div
            ref={carouselRef}
            className="mobile-services-carousel"
          >
            {services.map((service, index) => {
              const style = getCardStyle(index);
              return (
                <motion.article
                  key={service.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="mobile-service-card"
                  style={{
                    width: '85vw',
                    minWidth: '85vw',
                    scale: style.scale,
                    opacity: style.opacity,
                    y: style.y,
                  }}
                  onClick={() => openDetail(index)}
                  whileTap={{ scale: (style.scale || 1.0) * 0.98 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
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
              );
            })}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobileServices;
