import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Language = 'en' | 'ar' | 'ru' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    'hero.title': 'Mazhar Roni',
    'hero.subtitle': 'Digital Marketing & Creative Specialist',
    'hero.description': 'Results-driven Digital Marketing & Creative Specialist with expertise in social media strategy, content creation, video production, and campaign optimization across fitness, supplement, and e-commerce brands.',
    'hero.cta.work': 'View my work',
    'hero.cta.contact': 'Get in touch',
    'services.title': 'Marketing & Creative Skills',
    'services.subtitle': 'Full-spectrum digital marketing and creative expertise',
    'footer.basedon': 'Based in Dubai, working worldwide.',
    'footer.cta': 'maybe.',
  },
  ar: {
    'hero.title': 'مازهار روني',
    'hero.subtitle': 'متخصص التسويق الرقمي والإبداع',
    'hero.description': 'متخصص تسويق رقمي وإبداعي موجه نحو النتائج مع خبرة في استراتيجية وسائل التواصل والمحتوى والإنتاج الفيديو وتحسين الحملات.',
    'hero.cta.work': 'عرض أعمالي',
    'hero.cta.contact': 'الاتصال بي',
    'services.title': 'مهارات التسويق والإبداع',
    'services.subtitle': 'خبرة تسويقية رقمية وإبداعية شاملة',
    'footer.basedon': 'مقرها في دبي، تعمل في جميع أنحاء العالم.',
    'footer.cta': 'ربما.',
  },
  ru: {
    'hero.title': 'Мазхар Рони',
    'hero.subtitle': 'Специалист по цифровому маркетингу и творчеству',
    'hero.description': 'Специалист по цифровому маркетингу и творчеству, ориентированный на результаты, с опытом в стратегии социальных сетей, создании контента, производстве видео и оптимизации кампаний.',
    'hero.cta.work': 'Посмотреть работы',
    'hero.cta.contact': 'Связаться со мной',
    'services.title': 'Навыки маркетинга и творчества',
    'services.subtitle': 'Комплексная цифровая маркетинговая и творческая экспертиза',
    'footer.basedon': 'Базируется в Дубае, работает по всему миру.',
    'footer.cta': 'Может быть.',
  },
  zh: {
    'hero.title': '玛哈尔·罗尼',
    'hero.subtitle': '数字营销与创意专家',
    'hero.description': '以结果为导向的数字营销和创意专家，在社交媒体策略、内容创作、视频制作和活动优化方面拥有丰富经验。',
    'hero.cta.work': '查看我的作品',
    'hero.cta.contact': '联系我',
    'services.title': '营销和创意技能',
    'services.subtitle': '全面的数字营销和创意专业知识',
    'footer.basedon': '基于迪拜，服务全球。',
    'footer.cta': '也许。',
  },
  es: {
    'hero.title': 'Mazhar Roni',
    'hero.subtitle': 'Especialista en Marketing Digital y Creatividad',
    'hero.description': 'Especialista en marketing digital y creatividad orientado a resultados con experiencia en estrategia de redes sociales, creación de contenido, producción de vídeo y optimización de campañas.',
    'hero.cta.work': 'Ver mi trabajo',
    'hero.cta.contact': 'Ponerse en contacto',
    'services.title': 'Habilidades de Marketing y Creatividad',
    'services.subtitle': 'Experiencia integral de marketing digital y creatividad',
    'footer.basedon': 'Con sede en Dubái, trabajando en todo el mundo.',
    'footer.cta': 'quizás.',
  },
};

// Language detection based on browser
const detectLanguage = (): Language => {
  // First check if language is saved in localStorage
  const saved = localStorage.getItem('preferredLanguage');
  if (saved && Object.keys(translations).includes(saved)) {
    return saved as Language;
  }

  // Then check browser language
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  const availableLangs: Language[] = ['en', 'ar', 'ru', 'zh', 'es'];

  if (availableLangs.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  return 'en';
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [detectedLang, setDetectedLang] = useState<Language>('en');

  useEffect(() => {
    const detected = detectLanguage();
    const saved = localStorage.getItem('preferredLanguage');

    setDetectedLang(detected);
    setLanguageState(saved as Language || detected);

    // Show confirmation if no preference saved and detected language is not English
    if (!saved && detected !== 'en') {
      setShowConfirmation(true);
    }
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
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
