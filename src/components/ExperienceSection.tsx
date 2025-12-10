'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useInView as useFramerInView } from 'framer-motion';
import styles from './ExperienceTimeline.module.css';

interface TimelineItemProps {
  id: string;
  index: number;
  isRTL: boolean;
  t: (key: string) => string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ id, index, isRTL, t }) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const inView = useFramerInView(itemRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      if (itemRef.current) {
        itemRef.current.setAttribute('data-visible', 'true');
      }
    }
  }, [inView, isVisible]);

  const side = index % 2 === 0 ? 'left' : 'right';
  const highlights = [
    t(`journey.items.${id}.highlights.0`),
    t(`journey.items.${id}.highlights.1`),
    t(`journey.items.${id}.highlights.2`),
  ].filter(Boolean);

  return (
    <li
      ref={itemRef}
      className={styles.timelineItem}
      data-side={side}
      data-rtl={isRTL}
      data-visible={isVisible}
    >
      <article className={styles.card}>
        <div className={styles.metaRow}>
          <span className={styles.badge}>{t(`journey.items.${id}.badge`)}</span>
          <span className={styles.period}>{t(`journey.items.${id}.period`)}</span>
        </div>
        <h3 className={styles.role}>{t(`journey.items.${id}.role`)}</h3>
        <div className={styles.companyRow}>
          <span className={styles.company}>{t(`journey.items.${id}.company`)}</span>
          <span className={styles.location}>{t(`journey.items.${id}.location`)}</span>
        </div>
        <p className={styles.summary}>{t(`journey.items.${id}.summary`)}</p>
        {highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((highlight, idx) => (
              <li key={idx} className={styles.highlightItem}>
                <span className={styles.bullet} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  );
};

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const timelineItems = ['now', 'network', 'early'];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={styles.section}
      data-rtl={isRTL}
      aria-label={t('journey.timelineLabel')}
    >
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>{t('journey.sectionLabel')}</span>
          <h2 className={styles.title}>{t('journey.sectionTitle')}</h2>
          <p className={styles.subtitle}>{t('journey.sectionSubtitle')}</p>
        </div>

        <div className={styles.timelineWrapper}>
          <ol className={styles.timeline} aria-label={t('journey.timelineLabel')}>
            {timelineItems.map((id, index) => (
              <TimelineItem
                key={id}
                id={id}
                index={index}
                isRTL={isRTL}
                t={t}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

