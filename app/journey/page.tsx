'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

type Step = {
  id: string;
  title: string;     // role
  subtitle: string;  // company · location
  time: string;      // period (pill label)
};

export default function JourneyPage() {
  const { t } = useLanguage();

  const steps: Step[] = [
    {
      id: 'jnk',
      title: 'Creative Director & Digital Marketing Specialist',
      subtitle: 'JNK Nutrition · Dubai, UAE',
      time: 'MAY 2025 – Present',
    },
    {
      id: 'avion',
      title: 'Marketing & IT Coordinator',
      subtitle: 'Avion Realty Properties LLC · Dubai, UAE',
      time: '2023 – 2025',
    },
    {
      id: 'gheroub',
      title: 'Admin & Digital Marketing Executive',
      subtitle: 'Gheroub Al Shams Auto Maintenance · Sharjah, UAE',
      time: '2022',
    },
    {
      id: 'early',
      title: 'Early Creative & Freelance Work',
      subtitle: 'Freelance · Remote',
      time: 'Before 2022',
    },
  ];

  return (
    <>
      <section className="relative bg-black pt-28 pb-32">
      {/* Background gradient / glow (reference-style vibe) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-700/70 via-orange-900/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(255,140,60,0.55),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_40%,rgba(0,0,0,0.0),rgba(0,0,0,0.85)_65%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 xl:px-16">
        {/* Header (More space after title like you asked) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {t('journey.sectionTitle') || 'My Experience'}
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70">
            {t('journey.sectionSubtitle') ||
              'A timeline of my professional growth and key milestones'}
          </p>
        </motion.div>

        {/* Desktop (reference-style layout) */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Experience blocks (more gap + stagger up/down) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12 xl:gap-x-20 pb-20">
              {steps.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
                  className="relative min-w-0 pr-4 md:pr-6 xl:pr-8"
                >
                  <h3 className="text-[26px] xl:text-[32px] font-extrabold text-white leading-[1.08] tracking-tight break-words">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-base text-white/70 leading-relaxed">
                    {s.subtitle}
                  </p>

                  {/* Connector down to timeline (longer for more breathing room) */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] w-px h-16 bg-orange-400/55" />
                </motion.div>
              ))}
            </div>

            {/* Timeline (ticks + pills) */}
            <div className="relative">
              {/* Base line + ticks (less noisy) */}
              <div className="relative h-12">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-orange-400/20" />
                <div
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 opacity-40"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to right, rgba(255,140,60,0.6) 0 2px, transparent 2px 10px)',
                  }}
                />
              </div>

              {/* Pills aligned per column */}
              <div className="absolute inset-x-0 top-0 h-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((s, i) => (
                  <div key={s.id} className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
                      className="relative -mt-1 rounded-xl bg-black/55 px-5 py-2.5 backdrop-blur-md border border-white/10 shadow-[0_10px_26px_rgba(0,0,0,0.45)]"
                    >
                      <span className="text-sm text-white/85 whitespace-nowrap">
                        {s.time}
                      </span>

                      {/* Orange marker (reference detail) */}
                      <span 
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-3 rounded bg-orange-500/90" 
                        style={{ 
                          marginTop: 0, 
                          marginBottom: 0, 
                          paddingTop: 0, 
                          paddingBottom: 0 
                        }} 
                      />

                      {/* NEW: Line going down from pill (connects like reference) */}
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-px h-10 bg-orange-500/70" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* More space before divider (you asked for another space) */}
            <div className="mt-20 h-px w-full bg-white/10" />
          </div>
        </div>

        {/* Mobile (clean stacked, keeps vibe) */}
        <div className="md:hidden space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
              className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {s.title}
                </h3>
                <span className="shrink-0 text-xs text-orange-400/90 whitespace-nowrap">
                  {s.time}
                </span>
              </div>

              <p className="mt-3 text-sm text-white/65">{s.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
