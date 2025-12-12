'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import './SayHello.css';

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'مرحبا', lang: 'Arabic' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Привет', lang: 'Russian' },
  { text: '你好', lang: 'Chinese' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Guten Tag', lang: 'German' },
  { text: 'Namaste', lang: 'Hindi' },
];

const SayHello: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { t } = useLanguage();
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const current = greetings[currentGreeting];

  return (
    <section id="say-hello" className="fold say-hello" ref={ref}>
      <div className="container">
        <motion.div 
          className="say-hello-inner"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {t('sayHello.label')}
          </motion.span>

          <motion.h2
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(8px)' }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('sayHello.title')}
          </motion.h2>

          <motion.div
            className="greeting-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="greeting-display">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGreeting}
                  className="greeting-text-wrapper"
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="greeting-text">{current.text}</span>
                  <span className="greeting-lang">{current.lang}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              className="greeting-subtitle"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {t('sayHello.subtitle')}
            </motion.p>

            <motion.div 
              className="greeting-indicators"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {greetings.map((greeting, index) => (
                <motion.button
                  key={index}
                  className={`indicator ${index === currentGreeting ? 'active' : ''}`}
                  onClick={() => setCurrentGreeting(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Switch to ${greeting.lang}`}
                >
                  <span className="indicator-text">{greeting.text}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SayHello;

