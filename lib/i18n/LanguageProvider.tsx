'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tObject: (key: string) => any;
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

type TranslationValue = string | { [key: string]: TranslationValue };
type TranslationObject = Record<string, TranslationValue>;

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [detectedLang, setDetectedLang] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<Language, TranslationObject>>({
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
        const loadedTranslations: Record<Language, TranslationObject> = {
          en: {},
          ar: {},
          ru: {},
          zh: {},
          es: {}
        };
        
        // Helper function to fetch with retry
        const fetchWithRetry = async (url: string, retries = 2): Promise<Response | null> => {
          for (let i = 0; i <= retries; i++) {
            try {
              const response = await fetch(url, {
                cache: 'no-cache',
                headers: {
                  'Accept': 'application/json',
                }
              });
              if (response.ok) {
                return response;
              }
              if (i < retries) {
                await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
              }
            } catch (error) {
              if (i < retries) {
                await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
              } else {
                throw error;
              }
            }
          }
          return null;
        };
        
        for (const lang of langs) {
          try {
            const response = await fetchWithRetry(`/locales/${lang}.json`);
            if (response && response.ok) {
              const data = await response.json();
              loadedTranslations[lang] = data;
            } else {
              if (process.env.NODE_ENV === 'development') {
                console.warn(`Failed to load translations for ${lang}:`, response?.status || 'Network error');
              }
            }
          } catch (fetchError) {
            if (process.env.NODE_ENV === 'development') {
              console.warn(`Error fetching translations for ${lang}:`, fetchError);
            }
            // Continue with other languages even if one fails
          }
        }
        
        setTranslations(loadedTranslations);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load translations:', error);
        }
      }
    };

    loadTranslations().then(() => {
      // Detect and set language
      const detected = detectLanguageImpl();
      const saved = localStorage.getItem('preferredLanguage');

      setDetectedLang(detected);
      const finalLang = saved as Language || detected;
      setLanguageState(finalLang);

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
    try {
      // Support nested keys like 'services.detail.social.title'
      const keys = key.split('.');
      let value: string | TranslationObject | undefined = translations[language];
      
      // If translations haven't loaded yet, try English fallback immediately
      if (!value || Object.keys(value).length === 0) {
        value = translations['en'];
      }
      
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
        let fallback: string | TranslationObject | undefined = translations['en'];
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
      
      // If value is a string, return it. If it's an object or undefined, return empty string instead of key
      const result = typeof value === 'string' ? value : '';
      return result;
    } catch (error) {
      // If anything goes wrong, return empty string to prevent crashes
      if (process.env.NODE_ENV === 'development') {
        console.warn('Translation error for key:', key, error);
      }
      return '';
    }
  };

  // Helper function to get objects/arrays from translations
  const tObject = (key: string): any => {
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
    
    return value;
  };

  // Always render children immediately, even if translations aren't loaded yet
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      tObject,
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
