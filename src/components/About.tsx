'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motionConfig } from '../utils/motion';
import './About.css';

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { t } = useLanguage();

  const skills = (t('about.skills') as any) || [];

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 15, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        delay: i * 0.06,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  return (
    <section id="about" className="fold about" ref={ref}>
      <div className="container">
        <div className="about-inner">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -50, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {t('about.label')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {t('about.title')}<br/><span className="accent">{t('about.titleAccent')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              {t('about.description1')}
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 50, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {t('about.description2')}
            </motion.p>
            
            <div className="skills-pills">
              {skills.map((skill: string, index: number) => (
                <motion.span 
                  key={index} 
                  className="skill-pill"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={skillVariant}
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.25)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
