'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './Journey.css';

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const { t } = useLanguage();

  const milestones = (t('journey.milestones') as any) || [];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const MilestoneCard: React.FC<{ milestone: typeof milestones[number]; index: number }> = ({ milestone, index }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const cardInView = useInView(cardRef, { once: false, margin: "-50px" });

    return (
      <motion.div
        ref={cardRef}
        className="milestone-card"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={index}
        style={{
          '--card-color': milestone.color
        } as React.CSSProperties}
      >
        <motion.div
          className="card-accent"
          initial={{ scaleX: 0 }}
          animate={cardInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ backgroundColor: milestone.color }}
        />
        
        <div className="card-content">
          <motion.span
            className="milestone-year"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: milestone.color }}
          >
            {milestone.year}
          </motion.span>
          
          <motion.h3
            className="milestone-title"
            initial={{ opacity: 0, y: 8 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.25 }}
          >
            {milestone.title}
          </motion.h3>
          
          <motion.p
            className="milestone-description"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
          >
            {milestone.description}
          </motion.p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="fold journey" ref={containerRef}>
      <div className="container">
        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t('journey.label')}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {t('journey.title')}
          </motion.h2>
          
          <motion.p
            className="journey-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('journey.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="milestones-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {milestones.map((milestone: typeof milestones[number], index: number) => (
            <MilestoneCard
              key={index}
              milestone={milestone}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="journey-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>This journey shaped who I am today. Every challenge, every victory made me better.</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            Let's create something together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
