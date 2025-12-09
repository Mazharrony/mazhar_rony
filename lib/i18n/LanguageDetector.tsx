'use client';

import { useEffect, useState } from 'react';
import { useLanguage, Language } from './LanguageProvider';
import Cookies from 'js-cookie';

// Map browser language codes to our supported languages
const languageMap: Record<string, Language> = {
  'en': 'en',
  'ar': 'ar',
  'ru': 'ru',
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-TW': 'zh',
  'es': 'es',
};

const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
  ru: 'Русский',
  zh: '中文',
  es: 'Español',
};

export default function LanguageDetector() {
  const { language, setLanguage } = useLanguage();
  const [showPrompt, setShowPrompt] = useState(false);
  const [detectedLang, setDetectedLang] = useState<Language | null>(null);

  useEffect(() => {
    // Check if user has already confirmed their language
    const hasConfirmed = Cookies.get('languageConfirmed');
    if (hasConfirmed) {
      return;
    }

    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const mapped = languageMap[navigator.language] || languageMap[browserLang];

    if (mapped && mapped !== language) {
      setDetectedLang(mapped);
      setShowPrompt(true);
    } else {
      // No detection needed, mark as confirmed
      Cookies.set('languageConfirmed', 'true', { expires: 365 });
    }
  }, []);

  const handleConfirm = (useBrowserLang: boolean) => {
    if (useBrowserLang && detectedLang) {
      setLanguage(detectedLang);
    }
    Cookies.set('languageConfirmed', 'true', { expires: 365 });
    setShowPrompt(false);
  };

  if (!showPrompt || !detectedLang) {
    return null;
  }

  return (
    <div className="language-detector-overlay">
      <div className="language-detector-modal">
        <h3>Language Detection</h3>
        <p>
          We detected your language as <strong>{languageNames[detectedLang]}</strong>. 
          Would you like to continue in this language?
        </p>
        <div className="language-detector-buttons">
          <button 
            onClick={() => handleConfirm(true)}
            className="btn btn-primary"
          >
            Yes, use {languageNames[detectedLang]}
          </button>
          <button 
            onClick={() => handleConfirm(false)}
            className="btn btn-secondary"
          >
            No, keep {languageNames[language]}
          </button>
        </div>
      </div>
      <style jsx>{`
        .language-detector-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1rem;
        }
        
        .language-detector-modal {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .language-detector-modal h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: #111;
        }
        
        .language-detector-modal p {
          margin: 0 0 1.5rem 0;
          color: #555;
          line-height: 1.6;
        }
        
        .language-detector-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn {
          flex: 1;
          min-width: 150px;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          font-size: 1rem;
        }
        
        .btn-primary {
          background: #6366f1;
          color: white;
        }
        
        .btn-primary:hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background: #f3f4f6;
          color: #374151;
        }
        
        .btn-secondary:hover {
          background: #e5e7eb;
        }
      `}</style>
    </div>
  );
}
