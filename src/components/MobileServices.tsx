'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [detailIndex, setDetailIndex] = useState(0);
  const [cardStyles, setCardStyles] = useState<Array<{ scale: number; opacity: number; x: number; y: number; zIndex: number }>>(
    services.map(() => ({ scale: 1, opacity: 1, x: 0, y: 0, zIndex: 0 }))
  );
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: -100, right: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [prevIndex, setPrevIndex] = useState(0);

  // Open detail view
  const openDetail = (index: number) => {
    setSelectedIndex(index);
    setDetailIndex(index);
  };

  // Close detail view
  const closeDetail = () => {
    setSelectedIndex(null);
  };

  // 4️⃣ Swipe Right/Left Pattern: Handle swipe in detail view (Content Only)
  // Swipe Left (negative offset) → Next card (like turning pages)
  // Swipe Right (positive offset) → Previous card
  const handleDetailDragStart = () => {
    setIsDragging(true);
    setPrevIndex(detailIndex);
  };

  const handleDetailDrag = (_: any, info: PanInfo) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 375;
    const threshold = screenWidth * 0.25; // 25% of screen width
    const velocityThreshold = 400; // Velocity threshold for quick swipes
    const velocity = info.velocity.x;
    const currentIndex = detailIndex;

    setIsDragging(false);

    // Swipe Left (negative) → Next card (if available) - like turning page forward
    if ((info.offset.x < -threshold || velocity < -velocityThreshold) && currentIndex < services.length - 1) {
      setSwipeDirection('left'); // Next page slides from right
      setDetailIndex(currentIndex + 1);
    } 
    // Swipe Right (positive) → Previous card (if available) - like turning page back
    else if ((info.offset.x > threshold || velocity > velocityThreshold) && currentIndex > 0) {
      setSwipeDirection('right'); // Previous page slides from left
      setDetailIndex(currentIndex - 1);
    } else {
      setSwipeDirection(null);
    }
  };

  // Handle button navigation with direction
  const handleNext = () => {
    if (detailIndex < services.length - 1) {
      setSwipeDirection('left');
      setPrevIndex(detailIndex);
      setDetailIndex(detailIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (detailIndex > 0) {
      setSwipeDirection('right');
      setPrevIndex(detailIndex);
      setDetailIndex(detailIndex - 1);
    }
  };

  // Set drag constraints based on screen width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setDragConstraints({ left: -width * 0.3, right: width * 0.3 });
    }
  }, []);

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
      setPrevIndex(detailIndex);
      setDetailIndex(selectedIndex);
      setSwipeDirection(null); // Reset direction on initial open
    }
  }, [selectedIndex]);

  // Reset swipe direction after animation completes
  useEffect(() => {
    if (swipeDirection) {
      const timer = setTimeout(() => {
        setSwipeDirection(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [swipeDirection, detailIndex]);

  // Smooth scroll-based cascading stack with optimized calculations
  const updateCardStyles = useCallback(() => {
    if (!containerRef.current) return;

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Responsive offsets based on screen size
    const isSmallScreen = viewportWidth < 375;
    // Reduced offsets to prevent content overlap
    const baseOffsetX = isSmallScreen ? -6 : -10; // Reduced offset
    const baseOffsetY = isSmallScreen ? -10 : -14; // Reduced offset
    const overlapAmount = isSmallScreen ? 25 : 30; // Reduced overlap
    
    // Get all card positions (optimized)
    const cardPositions = cardRefs.current
      .map((cardRef, index) => {
        if (!cardRef) return null;
        const rect = cardRef.getBoundingClientRect();
        return {
          top: rect.top,
          center: rect.top + rect.height / 2,
          index
        };
      })
      .filter(Boolean) as Array<{ top: number; center: number; index: number }>;

    const newStyles = cardRefs.current.map((cardRef, index) => {
      if (!cardRef) return { scale: 1, opacity: 1, x: 0, y: 0, zIndex: index };

      const cardRect = cardRef.getBoundingClientRect();
      const cardTop = cardRect.top;
      const cardCenter = cardRect.top + cardRect.height / 2;
      
      // Smooth calculation zones
      const topZone = viewportHeight * 0.25; // Top 25% of viewport
      const middleZone = viewportHeight * 0.65; // Middle zone
      
      // Count cards above (for stacking)
      const cardsAbove = cardPositions.filter(pos => 
        pos.top < cardTop && pos.index !== index
      ).length;
      
      let opacity = 1;
      let scale = 1;
      let x = 0;
      let y = 0;
      let zIndex = services.length - index;
      
      // Smooth fade calculation with easing
      if (cardTop < -overlapAmount) {
        // Scrolled past - almost invisible
        opacity = 0.08;
        scale = 0.7;
        x = -3 * baseOffsetX;
        y = -3 * baseOffsetY - 15;
      } else if (cardTop < topZone) {
        // Top zone - progressive fade (smooth curve)
        const normalizedPos = Math.max(0, (topZone - cardTop) / (topZone + overlapAmount));
        // Easing function for smooth transition
        const eased = normalizedPos * normalizedPos; // Quadratic easing
        opacity = 0.15 + (eased * 0.4); // 0.15 to 0.55
        scale = 0.85 + (eased * 0.1); // 0.85 to 0.95
        
        const offsetIndex = Math.min(cardsAbove, 3);
        x = -offsetIndex * baseOffsetX;
        y = -offsetIndex * baseOffsetY;
      } else if (cardTop < middleZone) {
        // Middle zone - transitioning to full visibility (smooth)
        const normalizedPos = (cardTop - topZone) / (middleZone - topZone);
        // Smooth cubic easing
        const eased = normalizedPos * normalizedPos * (3 - 2 * normalizedPos); // Smoothstep
        opacity = 0.55 + (eased * 0.45); // 0.55 to 1.0
        scale = 0.95 + (eased * 0.05); // 0.95 to 1.0
        
        const offsetIndex = Math.max(0, Math.floor(3 * (1 - eased)));
        x = -offsetIndex * baseOffsetX;
        y = -offsetIndex * baseOffsetY;
      } else {
        // Bottom zone - fully visible
        opacity = 1;
        scale = 1;
        x = 0;
        y = 0;
      }
      
      // Z-index for proper stacking
      zIndex = services.length - index + (opacity > 0.5 ? 10 : 0);

      return { scale, opacity, x, y, zIndex };
    });

    setCardStyles(newStyles);
  }, [services.length]);

  // Smooth scroll listener with throttling for performance
  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const update = () => {
      updateCardStyles();
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initial calculation
    const timer = setTimeout(() => {
      updateCardStyles();
    }, 150);

    // Smooth scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Touch events for mobile smooth scrolling
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, [updateCardStyles]);

  return (
    <section id="services" className="mobile-services-section">
      <div className="mobile-services-container">
        <div className="mobile-services-header">
          <p className="mobile-services-pill">{t('services.label') || 'Services'}</p>
          <h2 className="mobile-services-title">{t('services.title')}</h2>
          <p className="mobile-services-subtitle">{t('services.subtitle')}</p>
        </div>

        {/* 1️⃣ Card Show Pattern: Scroll-Based Cascading Stack */}
        <div 
          ref={containerRef}
          className="mobile-services-cards-container"
        >
          {services.map((service, index) => {
            const style = cardStyles[index] || { scale: 1, opacity: 1, x: 0, y: 0, zIndex: index };
            return (
              <motion.article
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="mobile-service-card"
                initial={{ opacity: 0, y: 30, scale: 0.92, x: 0, rotateX: -5 }}
                animate={{ 
                  opacity: style.opacity,
                  scale: style.scale,
                  x: style.x,
                  y: style.y,
                  rotateX: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1], // Custom cubic bezier
                  type: 'spring',
                  stiffness: 180,
                  damping: 22,
                }}
                onClick={() => openDetail(index)}
                whileHover={{ scale: style.scale * 1.02 }}
                whileTap={{ scale: style.scale * 0.97 }}
                style={{
                  zIndex: style.zIndex,
                  position: 'relative',
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

        {/* 3️⃣ On Click Pattern: Full-Screen Detail View */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              className="mobile-services-detail-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              onClick={closeDetail}
            >
              <motion.div
                ref={detailContainerRef}
                className="mobile-services-detail-container"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{
                  type: 'spring',
                  damping: 35,
                  stiffness: 400,
                  mass: 0.8,
                }}
                onClick={(e) => e.stopPropagation()}
                style={{ touchAction: 'pan-y', overflow: 'hidden' }}
              >
                {/* Header with Navigation */}
                <div className="mobile-services-detail-header-bar">
                  <button
                    className="mobile-services-detail-nav-button"
                    onClick={handlePrevious}
                    disabled={detailIndex === 0}
                    aria-label="Previous service"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
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

                  <button
                    className="mobile-services-detail-nav-button"
                    onClick={handleNext}
                    disabled={detailIndex === services.length - 1}
                    aria-label="Next service"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                {/* 4️⃣ Swipe Right/Left Pattern: Swipeable Content */}
                <div className="mobile-services-detail-content">
                  <AnimatePresence mode="wait" initial={false} custom={swipeDirection}>
                    <motion.div
                      key={detailIndex}
                      className="mobile-services-detail-slide"
                      custom={swipeDirection}
                      variants={{
                        enter: (direction: 'left' | 'right' | null) => {
                          const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 375;
                          // If swiping left (next), slide from right
                          if (direction === 'left') {
                            return { opacity: 0, x: screenWidth };
                          }
                          // If swiping right (previous), slide from left
                          if (direction === 'right') {
                            return { opacity: 0, x: -screenWidth };
                          }
                          // Default: slide from right on initial load
                          return { opacity: 0, x: screenWidth };
                        },
                        center: { opacity: 1, x: 0 },
                        exit: (direction: 'left' | 'right' | null) => {
                          const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 375;
                          // If going to next (left swipe), exit to left
                          if (direction === 'left') {
                            return { opacity: 0, x: -screenWidth };
                          }
                          // If going to previous (right swipe), exit to right
                          if (direction === 'right') {
                            return { opacity: 0, x: screenWidth };
                          }
                          // Default: exit to left
                          return { opacity: 0, x: -screenWidth };
                        }
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 32,
                        mass: 0.6,
                      }}
                      drag="x"
                      dragConstraints={dragConstraints}
                      dragElastic={0.1}
                      onDragStart={handleDetailDragStart}
                      onDragEnd={handleDetailDrag}
                      dragMomentum={true}
                      style={{ touchAction: 'pan-x pan-y' }}
                    >
                      <div className="mobile-services-detail-header">
                        <span className="mobile-services-detail-badge">
                          {t('services.detail.badge') || 'Service Details'}
                        </span>
                        <h2 className="mobile-services-detail-title">
                          {t(services[detailIndex].titleKey)}
                        </h2>
                        {/* Tagline */}
                        <p className="mobile-services-detail-tagline">
                          {t(`services.detail.${services[detailIndex].id}.tagline`)}
                        </p>
                      </div>

                      <div className="mobile-services-detail-body">
                        {/* Overview Section */}
                        <div className="mobile-services-detail-section">
                          <h3 className="mobile-services-detail-section-title">
                            {t('services.detail.overview.title') || 'Overview'}
                          </h3>
                          <p className="mobile-services-detail-section-text">
                            {t(`services.detail.${services[detailIndex].id}.overview`)}
                          </p>
                        </div>

                        {/* Why Section */}
                        <div className="mobile-services-detail-section">
                          <h3 className="mobile-services-detail-section-title">
                            {t('services.detail.why.title') || 'Why This Matters'}
                          </h3>
                          <p className="mobile-services-detail-section-text">
                            {t(`services.detail.${services[detailIndex].id}.why`)}
                          </p>
                        </div>

                        {/* Approach Section */}
                        <div className="mobile-services-detail-section">
                          <h3 className="mobile-services-detail-section-title">
                            {t('services.detail.approach.title') || 'Our Approach'}
                          </h3>
                          <div className="mobile-services-detail-approach-steps">
                            {[1, 2, 3, 4].map((stepNum) => {
                              const stepKey = `step${stepNum}`;
                              const stepTitle = t(`services.detail.${services[detailIndex].id}.approach.${stepKey}.title`);
                              const stepDesc = t(`services.detail.${services[detailIndex].id}.approach.${stepKey}.description`);
                              
                              // Only hide if both are empty
                              if (!stepTitle && !stepDesc) return null;
                              
                              return (
                                <div key={stepNum} className="mobile-services-detail-approach-step">
                                  {stepTitle && (
                                    <h4 className="mobile-services-detail-approach-step-title">
                                      {stepTitle}
                                    </h4>
                                  )}
                                  {stepDesc && (
                                    <p className="mobile-services-detail-approach-step-text">
                                      {stepDesc}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Deliverables Section */}
                        <div className="mobile-services-detail-section">
                          <h3 className="mobile-services-detail-section-title">
                            {t('services.detail.deliverables.title') || 'What You Get'}
                          </h3>
                          <ul className="mobile-services-detail-list checkmark-list">
                            {[1, 2, 3, 4, 5, 6].map((itemNum) => {
                              const deliverable = t(`services.detail.${services[detailIndex].id}.deliverables.${itemNum}`);
                              // Only hide if empty
                              if (!deliverable) return null;
                              return (
                                <li key={itemNum}>
                                  {deliverable}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* FAQ Section */}
                        <div className="mobile-services-detail-section">
                          <h3 className="mobile-services-detail-section-title">
                            {t('services.detail.faq.title') || 'Questions?'}
                          </h3>
                          <div className="mobile-services-detail-faq">
                            {[1, 2, 3, 4, 5].map((faqNum) => {
                              const question = t(`services.detail.${services[detailIndex].id}.faq.${faqNum}.question`);
                              const answer = t(`services.detail.${services[detailIndex].id}.faq.${faqNum}.answer`);
                              
                              // Only hide if both are empty
                              if (!question && !answer) return null;
                              
                              return (
                                <div key={faqNum} className="mobile-services-detail-faq-item">
                                  {question && (
                                    <h4 className="mobile-services-detail-faq-question">
                                      {question}
                                    </h4>
                                  )}
                                  {answer && (
                                    <p className="mobile-services-detail-faq-answer">
                                      {answer}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mobile-services-detail-cta-section">
                          <h3 className="mobile-services-detail-cta-title">
                            {t('services.detail.cta.title') || 'Let\'s Stop Wasting Time'}
                          </h3>
                          <p className="mobile-services-detail-cta-description">
                            {t('services.detail.cta.description') || 'Your competitors are already doing this. Every day you wait, you\'re leaving money on the table. Let\'s talk.'}
                          </p>
                          <a
                            href="/contact"
                            className="mobile-services-detail-link"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeDetail();
                            }}
                          >
                            {t('services.detail.cta.primary') || 'I\'m Ready, Let\'s Talk'} <span>→</span>
                          </a>
                        </div>
                      </div>
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
