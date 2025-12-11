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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:47',message:'Translation loading started',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
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
        
        for (const lang of langs) {
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:61',message:'Fetching translation file',data:{lang,url:`/locales/${lang}.json`},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
          // #endregion
          const response = await fetch(`/locales/${lang}.json`);
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:63',message:'Translation fetch response',data:{lang,ok:response.ok,status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
          // #endregion
          if (response.ok) {
            loadedTranslations[lang] = await response.json();
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:65',message:'Translation loaded successfully',data:{lang,keysCount:Object.keys(loadedTranslations[lang]).length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
          } else {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:67',message:'Translation fetch failed',data:{lang,status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
            // #endregion
          }
        }
        
        setTranslations(loadedTranslations);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:70',message:'All translations loaded',data:{loadedLangs:Object.keys(loadedTranslations)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
      } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:72',message:'Translation loading error',data:{error:error instanceof Error?error.message:String(error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load translations:', error);
        }
      }
    };

    loadTranslations().then(() => {
      // Detect and set language
      const detected = detectLanguageImpl();
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:78',message:'Language detection',data:{detected},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      const saved = localStorage.getItem('preferredLanguage');
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:79',message:'LocalStorage read',data:{saved,detected},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion

      setDetectedLang(detected);
      const finalLang = saved as Language || detected;
      setLanguageState(finalLang);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:83',message:'Language state set',data:{finalLang,showConfirmation:!saved&&detected!=='en'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion

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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:119',message:'Translation lookup',data:{key,language},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    // Support nested keys like 'services.detail.social.title'
    const keys = key.split('.');
    let value: string | TranslationObject | undefined = translations[language];
    
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
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:134',message:'Translation key missing, using fallback',data:{key,language},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
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
    // #region agent log
    if (result === '' && typeof value !== 'string') {
      fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:147',message:'Translation key not found, returning empty string',data:{key,language},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    }
    // #endregion
    return result;
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
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:194',message:'useLanguage hook called',data:{hasContext:!!context},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  if (!context) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LanguageProvider.tsx:196',message:'useLanguage error: context missing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
