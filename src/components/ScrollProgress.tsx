'use client';

import React from 'react';
import { motion, useScroll, useSpring, useVelocity, useTransform } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress: React.FC = () => {
  // Always call hooks unconditionally - framer-motion handles SSR
  const { scrollYProgress, scrollY } = useScroll();
  
  // Add velocity-based effects for more dynamic feel
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  // Enhance scaleX with velocity-based effects
  const velocityScale = useTransform(smoothVelocity, [-1000, 0, 1000], [1.05, 1, 1.05]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        transformOrigin: 'left',
        scaleY: velocityScale,
      }}
      initial={{ scaleX: 0, scaleY: 1 }}
    />
  );
};

export default ScrollProgress;

