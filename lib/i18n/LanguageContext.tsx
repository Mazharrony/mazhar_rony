'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations will be loaded dynamically
const translations: Record<Language, Record<string, string>> = {
  en: {},
  ar: {},
  ru: {},
  zh: {},
  es: {},
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load translations for the current language
    const loadTranslations = async (lang: Language) => {
      try {
        const response = await fetch(`/locales/${lang}/common.json`);
        const data = await response.json();
        translations[lang] = data;
      } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
      }
    };

    loadTranslations(language);
  }, [language]);

  useEffect(() => {
    // Check if user has a saved language preference
    const savedLang = Cookies.get('preferredLanguage') as Language;
    if (savedLang) {
      setLanguageState(savedLang);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    Cookies.set('preferredLanguage', lang, { expires: 365 });
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
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
