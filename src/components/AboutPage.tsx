'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import Link from 'next/link';
import Image from 'next/image';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Refs for scroll animations
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const identityRef = useRef(null);
  const storyRef = useRef(null);
  const skillsRef = useRef(null);
  const beliefsRef = useRef(null);
  const workRef = useRef(null);
  const philosophyRef = useRef(null);
  const dubaiRef = useRef(null);
  const whatIBuildRef = useRef(null);
  const profileImageRef = useRef(null);
  const closingRef = useRef(null);

  // View detection
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: false, margin: "-100px" });
  const identityInView = useInView(identityRef, { once: false, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: false, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const beliefsInView = useInView(beliefsRef, { once: false, margin: "-100px" });
  const workInView = useInView(workRef, { once: false, margin: "-100px" });
  const philosophyInView = useInView(philosophyRef, { once: false, margin: "-100px" });
  const dubaiInView = useInView(dubaiRef, { once: false, margin: "-100px" });
  const whatIBuildInView = useInView(whatIBuildRef, { once: false, margin: "-100px" });
  const profileImageInView = useInView(profileImageRef, { once: true, margin: "-100px" });
  const closingInView = useInView(closingRef, { once: false, margin: "-100px" });

  // Soft animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  // Get arrays from translations
  const beliefs = Array.isArray(t('aboutPage.beliefs.list')) 
    ? (t('aboutPage.beliefs.list') as unknown as string[]) 
    : [];
    
  const workStyle = Array.isArray(t('aboutPage.howIWork.list'))
    ? (t('aboutPage.howIWork.list') as unknown as string[])
    : [];

  const stats = Array.isArray(t('aboutPage.stats.list'))
    ? (t('aboutPage.stats.list') as unknown as Array<{label: string, value: string, icon: string}>)
    : [];

  const skills = Array.isArray(t('aboutPage.skills.list'))
    ? (t('aboutPage.skills.list') as unknown as Array<{name: string, level: string, category: string}>)
    : [];

  const philosophy = Array.isArray(t('aboutPage.philosophy.list'))
    ? (t('aboutPage.philosophy.list') as unknown as Array<{title: string, description: string, icon: string}>)
    : [];

  return (
    <section className="about-page">
      <div className="about-page-container">
        
        {/* (1) Hero Title Block - Split Layout */}
        <motion.div 
          ref={titleRef}
          className="about-hero"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          <div className="hero-content-wrapper">
            <motion.div
              className="hero-left"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="about-hero-label"
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('aboutPage.hero.label')}
              </motion.span>
              <motion.h1 
                className="about-hero-title gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('aboutPage.title')}
              </motion.h1>
            </motion.div>
            <motion.div
              className="hero-right"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="about-hero-subtitle">{t('aboutPage.subtitle')}</p>
              <div className="hero-accent-line"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* (2) Stats Section - Floating Cards */}
        {stats.length > 0 && (
          <motion.div 
            ref={statsRef}
            className="about-stats"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            <motion.div
              className="stats-header"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              <h2 className="stats-title">{t('aboutPage.stats.title')}</h2>
            </motion.div>
            <div className="stats-grid">
              {stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="stat-card-glow"></div>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* (3) Identity Summary - Asymmetric Layout */}
        <motion.div 
          ref={identityRef}
          className="about-identity"
          initial="hidden"
          animate={identityInView ? "visible" : "hidden"}
        >
          <div className="identity-wrapper">
            <motion.div
              className="identity-left"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="identity-number">01</div>
              <h2 className="identity-title">{t('aboutPage.identity.title')}</h2>
            </motion.div>
            <motion.div
              className="identity-right"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="identity-intro">{t('aboutPage.identity.body1')}</p>
              <p className="identity-body">{t('aboutPage.identity.body2')}</p>
              <p className="identity-body">{t('aboutPage.identity.body3')}</p>
              <p className="identity-body">{t('aboutPage.identity.body4')}</p>
              <p className="identity-body">{t('aboutPage.identity.body5')}</p>
              <p className="identity-body">{t('aboutPage.identity.body6')}</p>
              <p className="identity-body">{t('aboutPage.identity.body7')}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* (4) Journey Story - Timeline Style */}
        <motion.div 
          ref={storyRef}
          className="about-story"
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
        >
          <div className="story-header">
            <motion.div
              className="story-number"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              02
            </motion.div>
            <motion.h2
              className="story-section-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t('aboutPage.story.title')}
            </motion.h2>
          </div>
          <div className="story-timeline">

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
            <p>{t('aboutPage.story.studio')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p>{t('aboutPage.story.learning')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p>{t('aboutPage.story.smartphone')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p>{t('aboutPage.story.freelance')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>{t('aboutPage.story.viral')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <p>{t('aboutPage.story.agency')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p>{t('aboutPage.story.agencyStruggle')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <p>{t('aboutPage.story.restaurant')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p>{t('aboutPage.story.covid')}</p>
          </motion.div>

          <motion.div 
            className="story-block"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <p>{t('aboutPage.story.dubai')}</p>
          </motion.div>
          </div>
        </motion.div>

        {/* (4) Dubai Section */}
        <motion.div 
          ref={dubaiRef}
          className="about-dubai"
          initial="hidden"
          animate={dubaiInView ? "visible" : "hidden"}
        >
          <div className="dubai-header">
            <motion.div
              className="dubai-number"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              03
            </motion.div>
            <motion.h2
              className="dubai-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t('aboutPage.dubai.title')}
            </motion.h2>
          </div>
          <div className="dubai-content">
            <motion.p
              className="dubai-intro"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('aboutPage.dubai.intro')}
            </motion.p>
            <motion.div
              className="dubai-tools"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p>{t('aboutPage.dubai.tools')}</p>
            </motion.div>
            <motion.p
              className="dubai-text"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('aboutPage.dubai.learning')}
            </motion.p>
            <motion.p
              className="dubai-text"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('aboutPage.dubai.routine')}
            </motion.p>
            <motion.p
              className="dubai-text"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {t('aboutPage.dubai.growth')}
            </motion.p>
            <motion.p
              className="dubai-text"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {t('aboutPage.dubai.change')}
            </motion.p>
            <motion.p
              className="dubai-text dubai-closing"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {t('aboutPage.dubai.today')}
            </motion.p>
          </div>
        </motion.div>

        {/* (5) Skills Showcase - Staggered Grid */}
        {skills.length > 0 && (
          <motion.div 
            ref={skillsRef}
            className="about-skills"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            <div className="skills-header">
              <motion.div
                className="skills-number"
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
              >
                03
              </motion.div>
              <motion.h2
                className="skills-title"
                variants={fadeInUp}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {t('aboutPage.skills.title')}
              </motion.h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill: any, index: number) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -8,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="skill-card-inner">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-category">{skill.category}</div>
                    <div className="skill-progress-bar">
                      <motion.div 
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '70%' } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* (6) Philosophy Section - Overlapping Cards */}
        {philosophy.length > 0 && (
          <motion.div 
            ref={philosophyRef}
            className="about-philosophy"
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            <div className="philosophy-header">
              <motion.div
                className="philosophy-number"
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
              >
                04
              </motion.div>
              <motion.h2
                className="philosophy-title"
                variants={fadeInUp}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {t('aboutPage.philosophy.title')}
              </motion.h2>
            </div>
            <div className="philosophy-grid">
              {philosophy.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  className="philosophy-card"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    rotateZ: index % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.3 }
                  }}
                  style={{ zIndex: philosophy.length - index }}
                >
                  <div className="philosophy-card-bg"></div>
                  <div className="philosophy-icon">{item.icon}</div>
                  <h3 className="philosophy-card-title">{item.title}</h3>
                  <p className="philosophy-card-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* (7) Beliefs / Values - Paragraph Format */}
        <motion.div 
          ref={beliefsRef}
          className="about-beliefs"
          initial="hidden"
          animate={beliefsInView ? "visible" : "hidden"}
        >
          <div className="beliefs-header">
            <motion.div
              className="beliefs-number"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              05
            </motion.div>
            <motion.h2
              className="beliefs-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t('aboutPage.beliefs.title')}
            </motion.h2>
          </div>
          <div className="beliefs-content">
            <motion.p
              className="beliefs-intro"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('aboutPage.beliefs.intro')}
            </motion.p>
            <motion.p
              className="beliefs-body"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {t('aboutPage.beliefs.body1')}
            </motion.p>
            <motion.p
              className="beliefs-body"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {t('aboutPage.beliefs.body2')}
            </motion.p>
            <motion.p
              className="beliefs-body"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('aboutPage.beliefs.body3')}
            </motion.p>
            <motion.p
              className="beliefs-body"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              {t('aboutPage.beliefs.body4')}
            </motion.p>
            <motion.p
              className="beliefs-body"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('aboutPage.beliefs.body5')}
            </motion.p>
            <motion.p
              className="beliefs-closing"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              {t('aboutPage.beliefs.closing')}
            </motion.p>
          </div>
        </motion.div>

        {/* (8) How I Work - Split Layout */}
        <motion.div 
          ref={workRef}
          className="about-work"
          initial="hidden"
          animate={workInView ? "visible" : "hidden"}
        >
          <div className="work-header">
            <motion.div
              className="work-number"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              06
            </motion.div>
            <motion.h2
              className="work-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t('aboutPage.howIWork.title')}
            </motion.h2>
          </div>
          <div className="work-content">
            <motion.p
              className="work-intro"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('aboutPage.howIWork.intro')}
            </motion.p>
            <motion.p
              className="work-intro"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {t('aboutPage.howIWork.intro2')}
            </motion.p>
            <motion.p
              className="work-beliefs-label"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {t('aboutPage.howIWork.beliefs')}
            </motion.p>
            <ul className="work-list">
              {workStyle.map((item: string, index: number) => (
                <motion.li
                  key={index}
                  className="work-item"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                  whileHover={{ 
                    x: 12,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="work-item-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="work-item-content">
                    <span className="work-item-text">{item}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="work-philosophy"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              {t('aboutPage.howIWork.philosophy')}
            </motion.p>
            <motion.p
              className="work-philosophy"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              {t('aboutPage.howIWork.philosophy2')}
            </motion.p>
            <motion.p
              className="work-philosophy"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {t('aboutPage.howIWork.philosophy3')}
            </motion.p>
            <motion.p
              className="work-principles"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              {t('aboutPage.howIWork.principles')}
            </motion.p>
            <motion.p
              className="work-principles"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {t('aboutPage.howIWork.principles2')}
            </motion.p>
            <motion.p
              className="work-principles"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.95 }}
            >
              {t('aboutPage.howIWork.principles3')}
            </motion.p>
            <motion.p
              className="work-principles"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              {t('aboutPage.howIWork.principles4')}
            </motion.p>
            <motion.p
              className="work-closing"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 1.05 }}
            >
              {t('aboutPage.howIWork.closing')}
            </motion.p>
          </div>
        </motion.div>

        {/* (9) What I Want to Build */}
        <motion.div 
          ref={whatIBuildRef}
          className="about-what-i-build"
          initial="hidden"
          animate={whatIBuildInView ? "visible" : "hidden"}
        >
          <div className="what-i-build-header">
            <motion.div
              className="what-i-build-number"
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
            >
              07
            </motion.div>
            <motion.h2
              className="what-i-build-title"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t('aboutPage.whatIBuild.title')}
            </motion.h2>
          </div>
          <motion.p
            className="what-i-build-intro"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('aboutPage.whatIBuild.intro')}
          </motion.p>
          <motion.p
            className="what-i-build-body"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('aboutPage.whatIBuild.body')}
          </motion.p>
          <motion.p
            className="what-i-build-closing"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('aboutPage.whatIBuild.closing')}
          </motion.p>
          <motion.p
            className="what-i-build-final"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t('aboutPage.whatIBuild.final')}
          </motion.p>
        </motion.div>

        {/* (10) Profile Image Section */}
        <motion.div 
          ref={profileImageRef}
          className="about-profile-image"
          initial={{ opacity: 0 }}
          animate={profileImageInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="profile-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={profileImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image 
              src="/profile-image.jpg" 
              alt="Mazhar Rony"
              width={400}
              height={400}
              className="profile-image"
              priority
            />
          </motion.div>
        </motion.div>

        {/* (11) Soft Closing CTA */}
        <motion.div 
          ref={closingRef}
          className="about-closing"
          initial="hidden"
          animate={closingInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="closing-title"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            {t('aboutPage.closing.title')}
          </motion.h2>
          <motion.p
            className="closing-line"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t('aboutPage.closing.line1')}
          </motion.p>
          <motion.p
            className="closing-line"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('aboutPage.closing.line2')}
          </motion.p>
          <motion.p
            className="closing-line"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('aboutPage.closing.line3')}
          </motion.p>
          <motion.p
            className="closing-line closing-cta-text"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t('aboutPage.closing.line4')}
          </motion.p>
          <motion.div
            className="closing-button-wrapper"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.5 }}
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
