'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  direction: 'ltr' | 'rtl';
  detectedLanguage: Language | null;
  showConfirmation: boolean;
  confirmLanguage: () => void;
  dismissConfirmation: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Browser language detection
function detectBrowserLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  
  const browserLang = navigator.language.toLowerCase();
  
  // Map browser language codes to our supported languages
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';
  
  return null; // Return null if no match
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState<Language | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Load translations for a specific language
  useEffect(() => {
    const loadTranslations = async (lang: Language) => {
      try {
        const response = await fetch(`/locales/${lang}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTranslations(data);
        console.log(`Loaded translations for ${lang}:`, Object.keys(data).length, 'keys');
      } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
        setTranslations({}); // Set empty object on error
      }
    };

    loadTranslations(language);
  }, [language]);

  // Initial setup: check saved preference or detect browser language
  useEffect(() => {
    const savedLang = Cookies.get('preferredLanguage') as Language;
    const hasSeenConfirmation = localStorage.getItem('language-confirmation-seen');
    
    if (savedLang) {
      // User has a saved preference, use it directly
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    } else if (!hasSeenConfirmation) {
      // First visit, no saved preference - detect browser language
      const detected = detectBrowserLanguage();
      if (detected && detected !== 'en') {
        // Show confirmation popup for non-English detected languages
        setDetectedLanguage(detected);
        setShowConfirmation(true);
      }
    }
    
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('preferredLanguage', lang, { expires: 365 });
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML attributes for RTL/LTR and language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add body class for potential CSS hooks
    document.body.classList.remove('lang-en', 'lang-ar', 'lang-ru', 'lang-zh', 'lang-es');
    document.body.classList.add(`lang-${lang}`);
  };

  const confirmLanguage = () => {
    if (detectedLanguage) {
      setLanguage(detectedLanguage);
    }
    localStorage.setItem('language-confirmation-seen', 'true');
    setShowConfirmation(false);
  };

  const dismissConfirmation = () => {
    localStorage.setItem('language-confirmation-seen', 'true');
    setShowConfirmation(false);
    // Stay in English (default)
  };

  const t = (key: string): string => {
    // Helper to get nested translation value
    const getNestedTranslation = (obj: any, path: string): string => {
      const keys = path.split('.');
      let result = obj;
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return path; // Return key if not found
        }
      }
      return typeof result === 'string' ? result : path;
    };

    return getNestedTranslation(translations, key);
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  // Don't render until translations are loaded
  if (!isLoaded || Object.keys(translations).length === 0) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      direction,
      detectedLanguage,
      showConfirmation,
      confirmLanguage,
      dismissConfirmation
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
