'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useInView as useFramerInView, motion } from 'framer-motion';
import styles from './ExperienceTimeline.module.css';

interface TimelineItemProps {
  id: string;
  index: number;
  total: number;
  isRTL: boolean;
  t: (key: string) => string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, index, total, isRTL, t }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inView = useFramerInView(itemRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    const resizeObserver = new ResizeObserver(checkMobile);
    if (itemRef.current) {
      resizeObserver.observe(itemRef.current);
    }
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      resizeObserver.disconnect();
    };
  }, []);

  const role = t(`journey.items.${id}.role`);
  const company = t(`journey.items.${id}.company`);
  const location = t(`journey.items.${id}.location`);
  const period = t(`journey.items.${id}.period`);

  // Calculate position percentage for horizontal layout (only on desktop)
  let positionPercent = 0;
  if (!isMobile) {
    if (total === 1) {
      positionPercent = 50;
    } else if (index === 0) {
      positionPercent = 0;
    } else if (index === total - 1) {
      positionPercent = 100;
    } else {
      positionPercent = (index / (total - 1)) * 100;
    }
  }

  return (
    <motion.div
      ref={itemRef}
      className={styles.horizontalItem}
      style={!isMobile ? { left: `${positionPercent}%` } : undefined}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      role="article"
      aria-label={`${role} at ${company}, ${location} from ${period}`}
    >
      {/* Vertical connector line - hidden on mobile */}
      {!isMobile && (
        <motion.div 
          className={styles.connectorLine}
          initial={{ scaleY: 0 }}
          animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        />
      )}
      
      {/* Experience card */}
      <motion.div 
        className={styles.horizontalCard}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
        style={{ willChange: 'transform' }}
      >
        <h3 className={styles.horizontalRole}>{role}</h3>
        <div className={styles.horizontalCompany}>
          {company} <span className={styles.separator}>·</span> {location}
        </div>
      </motion.div>

      {/* Date marker on timeline */}
      <motion.div 
        className={styles.dateMarker}
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
      >
        {period}
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile, setIsMobile] = useState(false);
  const sectionInView = useFramerInView(sectionRef, { once: true, margin: '-50px' });

  const timelineItems = ['now', 'network', 'early'];

  // Detect mobile viewport with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={styles.horizontalSection}
      data-rtl={isRTL}
      data-mobile={isMobile}
      aria-label={t('journey.timelineLabel')}
    >
      <div className="container">
        <motion.div 
          className={styles.horizontalHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className={styles.horizontalTitle}
            initial={{ opacity: 0, y: 10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('journey.sectionTitle')}
          </motion.h2>
          <motion.p 
            className={styles.horizontalSubtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('journey.sectionSubtitle')}
          </motion.p>
        </motion.div>

        <div className={styles.horizontalTimelineWrapper}>
          {/* Horizontal timeline bar - hidden on mobile */}
          {!isMobile && (
            <div className={styles.horizontalTimelineBar}>
              {/* Tick marks */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={styles.tickMark} style={{ left: `${(i / 19) * 100}%` }} />
              ))}
            </div>
          )}

          {/* Experience items */}
          <div className={styles.horizontalItemsContainer}>
            {timelineItems.map((id, index) => (
              <TimelineItem
                key={id}
                id={id}
                index={index}
                total={timelineItems.length}
                isRTL={isRTL}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;



