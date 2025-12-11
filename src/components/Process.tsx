'use client';

import React from 'react';
import { motion, useInView, useScroll, useVelocity, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { fadeInLeft, motionConfig } from '../utils/motion';
import './Process.css';

const Process: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { t } = useLanguage();

  const experiences = [
    { 
      number: '01', 
      title: t('journey.items.now.role'),
      company: t('journey.items.now.company'),
      location: t('journey.items.now.location'),
      period: t('journey.items.now.period'),
      description: t('journey.items.now.summary')
    },
    { 
      number: '02', 
      title: t('journey.items.network.role'),
      company: t('journey.items.network.company'),
      location: t('journey.items.network.location'),
      period: t('journey.items.network.period'),
      description: t('journey.items.network.summary')
    },
    { 
      number: '03', 
      title: t('journey.items.early.role'),
      company: t('journey.items.early.company'),
      location: t('journey.items.early.location'),
      period: t('journey.items.early.period'),
      description: t('journey.items.early.summary')
    }
  ];

  const timelineNodeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.12 + 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 35, stiffness: 150 });
  const velocityX = useTransform(smoothVelocity, [-1000, 0, 1000], [40, 0, -40]);

  const ExperienceItem: React.FC<{ exp: typeof experiences[number]; index: number }> = ({ exp, index }) => {
    const cardRef = React.useRef<HTMLDivElement | null>(null);
    const cardInView = useInView(cardRef, { amount: 0.45, margin: "-10% 0px -10% 0px" });

    const baseX = useMotionValue(80);

    React.useEffect(() => {
      if (cardInView) {
        // Wobble effect on scroll entry
        const wobbleSequence = [80, -5, 3, -1, 0];
        const timer1 = setTimeout(() => {
          wobbleSequence.forEach((value, i) => {
            setTimeout(() => baseX.set(value), i * 60);
          });
        }, 120 + index * 60);
        return () => clearTimeout(timer1);
      }
      baseX.set(80);
      return undefined;
    }, [cardInView, index, baseX]);

    const baseSpring = useSpring(baseX, { damping: 26, stiffness: 190, mass: 0.7 });
    const x = useTransform([baseSpring, velocityX], (vals) => {
      const [b, v] = vals as number[];
      const combined = b + v * 0.12;
      if (combined > 80) return 80;
      if (combined < -60) return -60;
      return combined;
    });

    const opacity = useTransform(x, [-60, 0, 80], [0.4, 1, 0]);
    const scale = useTransform(x, [-60, 0, 80], [0.98, 1, 0.96]);

    return (
      <div className="experience-item">
        <motion.div 
          className="timeline-node"
          custom={index}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={timelineNodeVariant}
        >
          <motion.div className="node-inner">
            <motion.span 
              className="node-number"
              animate={cardInView ? { textShadow: "0 0 16px rgba(99, 102, 241, 0.4)" } : { textShadow: "0 0 0px rgba(99, 102, 241, 0)" }}
              transition={{ duration: 0.4 }}
            >
              {exp.number}
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="experience-card"
          ref={cardRef}
          initial={false}
          style={{ x, opacity, scale }}
          whileHover={{
            y: -2,
            transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }
          }}
        >
          <div className="card-header">
            <motion.h4 
              className="job-title"
              initial={{ opacity: 0, y: 10 }}
              animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {exp.title}
            </motion.h4>
            <motion.div 
              className="company-info"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              <span className="company-name">{exp.company}</span>
              <span className="location">{exp.location}</span>
            </motion.div>
            <motion.div 
              className="period"
              initial={{ opacity: 0 }}
              animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.15 + 0.45 }}
            >
              {exp.period}
            </motion.div>
          </div>
          <motion.p 
            className="job-description"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            {exp.description}
          </motion.p>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="fold process" ref={ref}>
      <div className="container">
        <div className="process-inner">
          <motion.div 
            className="process-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <motion.h2
              variants={fadeInLeft}
              transition={{ delay: 0.1 }}
            >
              {t('process.title')}
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
            >
              {t('process.subtitle')}
            </motion.p>
            <motion.button 
              className="btn btn-primary"
              variants={fadeInLeft}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.06,
                y: -3,
                boxShadow: '0 12px 36px rgba(99, 102, 241, 0.35)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              {t('contact.title')}
            </motion.button>
          </motion.div>

          <div className="process-right">
            <div className="timeline-wrapper">
              <motion.div 
                className="timeline-line"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <div className="experience-list">
                {experiences.map((exp: any, index: number) => (
                  <ExperienceItem key={index} exp={exp} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
