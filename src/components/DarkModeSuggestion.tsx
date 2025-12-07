'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import './DarkModeSuggestion.css';

const DarkModeSuggestion = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Don't show if:
    // 1. User already interacted with theme toggle manually
    // 2. User already saw this suggestion before
    // 3. Current theme is dark (only show in light mode)
    const hasInteracted = localStorage.getItem('theme-interacted');
    const hasSeenSuggestion = localStorage.getItem('dark-mode-suggestion-seen');
    
    if (hasInteracted || hasSeenSuggestion || theme === 'dark') {
      return;
    }

    // Show after 3-5 seconds (randomized for natural feel)
    const showDelay = 3000 + Math.random() * 2000;
    const showTimer = setTimeout(() => {
      setShowSuggestion(true);

      // Auto-dismiss after 4 seconds
      const dismissTimer = setTimeout(() => {
        handleDismiss();
      }, 4000);

      return () => clearTimeout(dismissTimer);
    }, showDelay);

    return () => clearTimeout(showTimer);
  }, [theme]);

  const handleSwitch = () => {
    toggleTheme();
    handleDismiss();
  };

  const handleDismiss = () => {
    setShowSuggestion(false);
    localStorage.setItem('dark-mode-suggestion-seen', 'true');
  };

  return (
    <AnimatePresence>
      {showSuggestion && (
        <motion.div
          className="dark-mode-suggestion"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <button
            onClick={handleSwitch}
            className="suggestion-content"
            aria-label="Switch to dark mode"
          >
            <span className="suggestion-icon">🌙</span>
            <span className="suggestion-text">Psst… dark mode looks nice too.</span>
          </button>
          <button
            onClick={handleDismiss}
            className="suggestion-dismiss"
            aria-label="Dismiss suggestion"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DarkModeSuggestion;
