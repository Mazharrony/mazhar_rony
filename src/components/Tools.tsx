"use client";

import React, { useId, useMemo, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './Tools.css';

type ToolId =
  | 'photoshop'
  | 'illustrator'
  | 'figma'
  | 'canva'
  | 'capcut'
  | 'davinci'
  | 'metaAds'
  | 'googleAds'
  | 'googleAnalytics'
  | 'wordpress'
  | 'shopify'
  | 'react'
  | 'javascript'
  | 'chatgpt'
  | 'claude'
  | 'midjourney'
  | 'runway';

type ToolMeta = {
  accent: string;
  monogram: string;
};

// Brand-aligned color palette: soft, desaturated, premium
const TOOL_META: Record<ToolId, ToolMeta> = {
  photoshop: { accent: '#6b7aaa', monogram: 'Ps' },
  illustrator: { accent: '#9a8266', monogram: 'Ai' },
  figma: { accent: '#8b7fa8', monogram: 'Fg' },
  canva: { accent: '#6b9fa3', monogram: 'Cv' },
  capcut: { accent: '#5a6470', monogram: 'CC' },
  davinci: { accent: '#6b8fa3', monogram: 'DR' },
  metaAds: { accent: '#6b7fa8', monogram: 'Ma' },
  googleAds: { accent: '#7289a3', monogram: 'Ad' },
  googleAnalytics: { accent: '#a39570', monogram: 'GA' },
  wordpress: { accent: '#617a8a', monogram: 'Wp' },
  shopify: { accent: '#7a9570', monogram: 'Sp' },
  react: { accent: '#70a3a8', monogram: 'R' },
  javascript: { accent: '#a39a70', monogram: 'Js' },
  chatgpt: { accent: '#608a7a', monogram: 'Cg' },
  claude: { accent: '#8a7a70', monogram: 'Cl' },
  midjourney: { accent: '#7a70a3', monogram: 'Mj' },
  runway: { accent: '#70a37a', monogram: 'Rw' }
};

const TOOL_GROUPS: { key: 'creative' | 'marketing' | 'development' | 'ai'; tools: ToolId[]; glowColor: string }[] = [
  {
    key: 'creative',
    tools: ['photoshop', 'illustrator', 'figma', 'canva', 'capcut', 'davinci'],
    glowColor: '#8b7fa8' // Purple
  },
  {
    key: 'marketing',
    tools: ['metaAds', 'googleAds', 'googleAnalytics'],
    glowColor: '#7a8fa3' // Blue
  },
  {
    key: 'development',
    tools: ['wordpress', 'shopify', 'react', 'javascript'],
    glowColor: '#70a3a8' // Cyan
  },
  {
    key: 'ai',
    tools: ['chatgpt', 'claude', 'midjourney', 'runway'],
    glowColor: '#9a8fa8' // Lavender
  }
];

interface SoftIconProps {
  label: string;
  accent: string;
  monogram: string;
}

const SoftIcon: React.FC<SoftIconProps> = ({ label, accent, monogram }) => {
  const gradientId = useId();
  
  return (
    <svg className="tool-icon-svg" viewBox="0 0 64 64" role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${gradientId}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`${accent}40`} />
          <stop offset="100%" stopColor={`${accent}80`} />
        </linearGradient>
        <linearGradient id={`${gradientId}-overlay`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g>
        <circle cx="32" cy="32" r="28" fill={`url(#${gradientId}-bg)`} />
        <circle cx="32" cy="32" r="28" fill={`url(#${gradientId}-overlay)`} />
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontSize="17"
          fontWeight="600"
          fill="#ffffff"
          opacity="0.95"
        >
          {monogram}
        </text>
      </g>
    </svg>
  );
};

const Tools: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  
  // Scroll-based parallax for tools section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  
  const toolsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const toolsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
  const toolsScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.section 
      id="tools" 
      className="fold tools-section" 
      ref={sectionRef}
      style={{
        y: toolsY,
        opacity: toolsOpacity,
        scale: toolsScale,
      }}
    >
      <div className="container">
        <motion.div
          className="tools-header"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {t('tools.heading')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('tools.heading')}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {t('tools.subheading')}
          </motion.p>
        </motion.div>

        <div className="tools-grid">
          {TOOL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.key}
              className="tool-card"
              style={{ '--group-glow-color': group.glowColor } as React.CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.1 + groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tool-card-header">
                <span className="tool-card-indicator" aria-hidden="true" />
                <h3>{t(`tools.groups.${group.key}`)}</h3>
              </div>

              <div className="tool-icon-list">
                {group.tools.map((tool, toolIndex) => {
                  const meta = TOOL_META[tool];
                  const label = t(`tools.labels.${tool}`);
                  const floatDistance = 1 + (toolIndex % 3) * 0.4;
                  const floatDuration = 5 + (toolIndex % 4) * 0.8;

                  return (
                    <motion.div
                      key={tool}
                      className="tool-pill"
                      initial={{ opacity: 0, y: 12 }}
                      animate={
                        isInView
                          ? { y: [0, -floatDistance, 0], opacity: 1 }
                          : { opacity: 0.4, y: 0 }
                      }
                      transition={{
                        duration: floatDuration,
                        repeat: isInView ? Infinity : 0,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: 0.1 * toolIndex
                      }}
                      whileHover={{ 
                        scale: 1.04,
                        transition: { duration: 0.18, ease: 'easeOut' }
                      }}
                      role="listitem"
                      aria-label={label}
                    >
                      <div className="tool-icon-shell" aria-hidden="true">
                        <SoftIcon label={label} accent={meta.accent} monogram={meta.monogram} />
                      </div>
                      <span className="tool-label">{label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Tools;
