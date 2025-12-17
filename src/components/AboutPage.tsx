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
  const statsRef = useRef(null);
  const identityRef = useRef(null);
  const storyRef = useRef(null);
  const dubaiRef = useRef(null);
  const skillsRef = useRef(null);
  const philosophyRef = useRef(null);
  const beliefsRef = useRef(null);
  const workRef = useRef(null);
  const closingRef = useRef(null);

  // View detection
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: false, margin: "-100px" });
  const identityInView = useInView(identityRef, { once: false, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: false, margin: "-100px" });
  const dubaiInView = useInView(dubaiRef, { once: false, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const philosophyInView = useInView(philosophyRef, { once: false, margin: "-100px" });
  const beliefsInView = useInView(beliefsRef, { once: false, margin: "-100px" });
  const workInView = useInView(workRef, { once: false, margin: "-100px" });
  const closingInView = useInView(closingRef, { once: false, margin: "-100px" });

  // Soft animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getString = (key: string) => {
    const v = t(key) as unknown;
    return typeof v === 'string' ? v : '';
  };

  const getArray = <T,>(key: string): T[] => {
    const v = t(key) as unknown;
    return Array.isArray(v) ? (v as T[]) : [];
  };

  // Get beliefs and work style arrays
  const beliefs = getArray<string>('aboutPage.beliefs.list');
    
  const workStyle = getArray<string>('aboutPage.howIWork.list');

  type StatItem = { icon?: string; value?: string; label?: string };
  type SkillItem = { name?: string; level?: string; category?: string };
  type PhilosophyItem = { icon?: string; title?: string; description?: string };

  const stats = getArray<StatItem>('aboutPage.stats.list');
  const skills = getArray<SkillItem>('aboutPage.skills.list');
  const philosophy = getArray<PhilosophyItem>('aboutPage.philosophy.list');

  const identityParagraphKeys = [
    'aboutPage.identity.body1',
    'aboutPage.identity.body2',
    'aboutPage.identity.body3',
    'aboutPage.identity.body4',
    'aboutPage.identity.body5',
    'aboutPage.identity.body6',
    'aboutPage.identity.body7',
  ];

  const storyParagraphKeys = [
    'aboutPage.story.intro',
    'aboutPage.story.laptop',
    'aboutPage.story.studio',
    'aboutPage.story.learning',
    'aboutPage.story.smartphone',
    'aboutPage.story.freelance',
    'aboutPage.story.viral',
    'aboutPage.story.agency',
    'aboutPage.story.agencyStruggle',
    'aboutPage.story.restaurant',
    'aboutPage.story.covid',
    'aboutPage.story.dubai',
  ];

  const dubaiParagraphKeys = [
    'aboutPage.dubai.intro',
    'aboutPage.dubai.tools',
    'aboutPage.dubai.learning',
    'aboutPage.dubai.routine',
    'aboutPage.dubai.growth',
    'aboutPage.dubai.change',
    'aboutPage.dubai.today',
  ];

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
          {getString('aboutPage.hero.label') && (
            <span className="about-hero-label">{getString('aboutPage.hero.label')}</span>
          )}
          <h1>{t('aboutPage.title')}</h1>
          <p className="about-subtitle">{t('aboutPage.subtitle')}</p>
        </motion.div>

        {/* (1.5) Stats */}
        {stats.length > 0 && (
          <motion.div
            ref={statsRef}
            className="about-stats"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            {getString('aboutPage.stats.title') && (
              <h3 className="about-section-title">{getString('aboutPage.stats.title')}</h3>
            )}
            <div className="about-stats-grid">
              {stats.map((s, idx) => (
                <motion.div
                  key={`${s.label || 'stat'}-${idx}`}
                  className="about-stat-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.08 + idx * 0.05 }}
                >
                  <div className="about-stat-icon" aria-hidden="true">{s.icon || '•'}</div>
                  <div className="about-stat-value">{s.value || ''}</div>
                  <div className="about-stat-label">{s.label || ''}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* (2) Identity Summary */}
        <motion.div 
          ref={identityRef}
          className="about-identity"
          initial="hidden"
          animate={identityInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {getString('aboutPage.identity.title') && (
            <h3 className="about-section-title">{getString('aboutPage.identity.title')}</h3>
          )}
          {identityParagraphKeys
            .map((k) => getString(k))
            .filter(Boolean)
            .map((text, idx) => (
              <p key={`identity-${idx}`}>{text}</p>
            ))}
        </motion.div>

        {/* (3) Journey Story - Chapter Style */}
        <motion.div 
          ref={storyRef}
          className="about-story"
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
        >
          {getString('aboutPage.story.title') && (
            <motion.h3
              className="about-section-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              {getString('aboutPage.story.title')}
            </motion.h3>
          )}
          {storyParagraphKeys
            .map((k) => getString(k))
            .filter(Boolean)
            .map((text, idx) => (
              <motion.div
                key={`story-${idx}`}
                className="story-block"
                variants={fadeInUp}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.05 }}
              >
                <p>{text}</p>
              </motion.div>
            ))}
        </motion.div>

        {/* (3.5) Dubai Chapter */}
        {dubaiParagraphKeys.some((k) => Boolean(getString(k))) && (
          <motion.div
            ref={dubaiRef}
            className="about-dubai"
            initial="hidden"
            animate={dubaiInView ? "visible" : "hidden"}
          >
            {getString('aboutPage.dubai.title') && (
              <motion.h3
                className="about-section-title"
                variants={fadeInUp}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                {getString('aboutPage.dubai.title')}
              </motion.h3>
            )}
            {dubaiParagraphKeys
              .map((k) => getString(k))
              .filter(Boolean)
              .map((text, idx) => (
                <motion.div
                  key={`dubai-${idx}`}
                  className="story-block"
                  variants={fadeInUp}
                  transition={{ duration: 0.7, delay: 0.1 + idx * 0.05 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
          </motion.div>
        )}

        {/* (3.6) Skills */}
        {skills.length > 0 && (
          <motion.div
            ref={skillsRef}
            className="about-skills"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            {getString('aboutPage.skills.title') && (
              <motion.h3
                className="about-section-title"
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
              >
                {getString('aboutPage.skills.title')}
              </motion.h3>
            )}
            <div className="about-skills-grid">
              {skills.map((sk, idx) => (
                <motion.div
                  key={`${sk.name || 'skill'}-${idx}`}
                  className="about-skill-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.08 + idx * 0.05 }}
                >
                  <div className="about-skill-top">
                    <div className="about-skill-name">{sk.name || ''}</div>
                    <div className="about-skill-level">{sk.level || ''}</div>
                  </div>
                  <div className="about-skill-category">{sk.category || ''}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* (3.7) Philosophy / Approach */}
        {philosophy.length > 0 && (
          <motion.div
            ref={philosophyRef}
            className="about-philosophy"
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {getString('aboutPage.philosophy.title') && (
              <motion.h3
                className="about-section-title"
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
              >
                {getString('aboutPage.philosophy.title')}
              </motion.h3>
            )}
            <div className="about-philosophy-grid">
              {philosophy.map((p, idx) => (
                <motion.div
                  key={`${p.title || 'philosophy'}-${idx}`}
                  className="about-philosophy-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.08 + idx * 0.05 }}
                >
                  <div className="about-philosophy-icon" aria-hidden="true">{p.icon || '•'}</div>
                  <div className="about-philosophy-title">{p.title || ''}</div>
                  <div className="about-philosophy-desc">{p.description || ''}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

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
