'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Journey.css';

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const milestones = [
    {
      year: '2012',
      title: 'The Beginning',
      description: 'Started my journey as a young student with a gifted laptop. Little did I know it would change everything.',
      color: '#6366f1'
    },
    {
      year: '2014',
      title: 'Learning Photoshop',
      description: 'In a modest village studio, I learned Photoshop. Late nights, small screens, but endless passion.',
      color: '#a855f7'
    },
    {
      year: '2016',
      title: 'Smartphone Era',
      description: 'Transitioned to mobile editing. Instagram was exploding. Creative opportunities everywhere.',
      color: '#06b6d4'
    },
    {
      year: '2017',
      title: 'First Breakthrough',
      description: 'Freelance work started flowing in. Built my first real client base. The grind was paying off.',
      color: '#f59e0b'
    },
    {
      year: '2018',
      title: 'Viral Moment',
      description: 'Created a Facebook frame that reached 2M+ users. This was the validation I needed.',
      color: '#10b981'
    },
    {
      year: '2019-2020',
      title: 'Agency & Business',
      description: 'Opened a small marketing agency in Bangladesh. Started a product printing business. The dream was real.',
      color: '#f97316'
    },
    {
      year: '2020-2021',
      title: 'COVID Collapse',
      description: 'The pandemic hit hard. Everything shut down. Family pressure was immense. But we had to keep moving.',
      color: '#ef4444'
    },
    {
      year: '2022',
      title: 'The Big Leap',
      description: 'After selling the family cow, I came to Dubai. A difficult decision, but necessary for growth.',
      color: '#ec4899'
    },
    {
      year: '2022 (Feb-Mar)',
      title: 'First Job in Dubai',
      description: 'Got my first job after 1 month 17 days in a new country. Felt like a victory.',
      color: '#6366f1'
    },
    {
      year: '2025',
      title: 'Today',
      description: 'Creative direction at JNK Nutrition. Building brands. Creating impact. Living the dream.',
      color: '#a855f7'
    }
  ];

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
            My Journey
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            From a Student with a Laptop<br />to Creative Direction in Dubai
          </motion.h2>
          
          <motion.p
            className="journey-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A honest, raw story of passion, struggle, and growth. No exaggeration—just the real journey.
          </motion.p>
        </motion.div>

        <motion.div
          className="milestones-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {milestones.map((milestone, index) => (
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
