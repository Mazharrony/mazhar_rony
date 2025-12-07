'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import './LanguageConfirmation.css';

const LanguageConfirmation: React.FC = () => {
  const { showConfirmation, detectedLanguage, confirmLanguage, dismissConfirmation } = useLanguage();

  const languageNames: Record<string, string> = {
    ar: 'العربية (Arabic)',
    ru: 'Русский (Russian)',
    zh: '中文 (Chinese)',
    es: 'Español (Spanish)',
    en: 'English'
  };

  if (!showConfirmation || !detectedLanguage) return null;

  return (
    <AnimatePresence>
      {showConfirmation && (
        <motion.div
          className="language-confirmation-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="language-confirmation-box"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="confirmation-icon">🌍</div>
            
            <h3 className="confirmation-title">
              We detected your language
            </h3>
            
            <p className="confirmation-message">
              It looks like you speak <strong>{languageNames[detectedLanguage]}</strong>.
              <br />
              Would you like to continue in this language?
            </p>

            <div className="confirmation-actions">
              <motion.button
                className="confirmation-btn confirmation-btn-primary"
                onClick={confirmLanguage}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Yes, switch to {languageNames[detectedLanguage]}
              </motion.button>
              
              <motion.button
                className="confirmation-btn confirmation-btn-secondary"
                onClick={dismissConfirmation}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                No, stay in English
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageConfirmation;
