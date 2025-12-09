'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  showConfirmation: boolean;
  detectedLanguage: Language | null;
  confirmLanguage: (lang: Language) => void;
  dismissConfirmation: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguageImpl = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language || 'en';
  const lang = browserLang.split('-')[0].toLowerCase();
  const supportedLangs: Language[] = ['en', 'ar', 'ru', 'zh', 'es'];
  return (supportedLangs.includes(lang as Language) ? lang : 'en') as Language;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [detectedLang, setDetectedLang] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<Language, any>>({
    en: {},
    ar: {},
    ru: {},
    zh: {},
    es: {}
  });

  useEffect(() => {
    // Load translations from JSON files
    const loadTranslations = async () => {
      try {
        const langs: Language[] = ['en', 'ar', 'ru', 'zh', 'es'];
        const loadedTranslations: Record<Language, any> = {
          en: {},
          ar: {},
          ru: {},
          zh: {},
          es: {}
        };
        
        for (const lang of langs) {
          const response = await fetch(`/locales/${lang}.json`);
          if (response.ok) {
            loadedTranslations[lang] = await response.json();
          }
        }
        
        setTranslations(loadedTranslations);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations().then(() => {
      // Detect and set language
      const detected = detectLanguageImpl();
      const saved = localStorage.getItem('preferredLanguage');

      setDetectedLang(detected);
      setLanguageState(saved as Language || detected);

      // Show confirmation if no preference saved and detected language is not English
      if (!saved && detected !== 'en') {
        setShowConfirmation(true);
      }
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setShowConfirmation(false);

    // Set cookie
    document.cookie = `preferredLanguage=${lang}; max-age=${365 * 24 * 60 * 60}; path=/`;
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {
      setLanguage(detectedLang);
    } else {
      setLanguage('en');
    }
    setShowConfirmation(false);
  };

  const confirmLanguage = (lang: Language) => {
    setLanguage(lang);
    setShowConfirmation(false);
  };

  const dismissConfirmation = () => {
    setShowConfirmation(false);
  };

  const t = (key: string): string => {
    // Support nested keys like 'services.detail.social.title'
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    // Fallback to English if not found
    if (value === undefined) {
      let fallback: any = translations['en'];
      for (const k of keys) {
        if (fallback && typeof fallback === 'object') {
          fallback = fallback[k];
        } else {
          fallback = undefined;
          break;
        }
      }
      value = fallback;
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      showConfirmation,
      detectedLanguage: detectedLang,
      confirmLanguage,
      dismissConfirmation
    }}>
      {children}

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="language-confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="language-confirmation-content">
              <p>We detected your language as <strong>{detectedLang.toUpperCase()}</strong>. Continue?</p>
              <div className="confirmation-buttons">
                <button
                  onClick={() => handleConfirmation(true)}
                  className="btn-confirm"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleConfirmation(false)}
                  className="btn-cancel"
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
