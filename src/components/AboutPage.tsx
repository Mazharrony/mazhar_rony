'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Link from 'next/link';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Refs for scroll animations
  const titleRef = useRef(null);
  const identityRef = useRef(null);
  const storyRef = useRef(null);
  const beliefsRef = useRef(null);
  const workRef = useRef(null);
  const closingRef = useRef(null);

  // View detection
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const identityInView = useInView(identityRef, { once: false, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: false, margin: "-100px" });
  const beliefsInView = useInView(beliefsRef, { once: false, margin: "-100px" });
  const workInView = useInView(workRef, { once: false, margin: "-100px" });
  const closingInView = useInView(closingRef, { once: false, margin: "-100px" });

  // Soft animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Get beliefs and work style arrays
  const beliefs = Array.isArray(t('aboutPage.beliefs.list')) 
    ? (t('aboutPage.beliefs.list') as unknown as string[]) 
    : [];
    
  const workStyle = Array.isArray(t('aboutPage.howIWork.list'))
    ? (t('aboutPage.howIWork.list') as unknown as string[])
    : [];

  return (
    <section className="about-page">
      <div className="about-page-container">
        
        {/* (1) Title Block */}
        <motion.div 
          ref={titleRef}
          className="about-title-block"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <h1>{t('aboutPage.title')}</h1>
          <p className="about-subtitle">{t('aboutPage.subtitle')}</p>
        </motion.div>

        {/* (2) Identity Summary */}
        <motion.div 
          ref={identityRef}
          className="about-identity"
          initial="hidden"
          animate={identityInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>{t('aboutPage.identity.body1')}</p>
          <p>{t('aboutPage.identity.body2')}</p>
        </motion.div>

        {/* (3) Journey Story - Chapter Style */}
        <motion.div 
          ref={storyRef}
          className="about-story"
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p>{t('aboutPage.story.intro')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>{t('aboutPage.story.laptop')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>{t('aboutPage.story.smartphone')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p>{t('aboutPage.story.freelance')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p>{t('aboutPage.story.viral')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p>{t('aboutPage.story.agency')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>{t('aboutPage.story.covid')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <p>{t('aboutPage.story.dubai')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p>{t('aboutPage.story.today')}</p>
          </motion.div>
        </motion.div>

        {/* (4) Beliefs / Values Grid */}
        <motion.div 
          ref={beliefsRef}
          className="about-beliefs"
          initial="hidden"
          animate={beliefsInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            {t('aboutPage.beliefs.title')}
          </motion.h3>
          <div className="beliefs-grid">
            {beliefs.map((belief: string, index: number) => (
              <motion.div
                key={index}
                className="belief-item"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              >
                <span>{belief}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* (5) How I Work */}
        <motion.div 
          ref={workRef}
          className="about-work"
          initial="hidden"
          animate={workInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            {t('aboutPage.howIWork.title')}
          </motion.h3>
          <ul className="work-list">
            {workStyle.map((item: string, index: number) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* (6) Soft Closing CTA */}
        <motion.div 
          ref={closingRef}
          className="about-closing"
          initial="hidden"
          animate={closingInView ? "visible" : "hidden"}
        >
          <motion.p
            className="closing-line"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            {t('aboutPage.closing.line1')}
          </motion.p>
          <motion.p
            className="closing-line"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('aboutPage.closing.line2')}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.button 
                className="closing-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('aboutPage.closing.cta')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPage;
