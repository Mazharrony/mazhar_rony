'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';
import './Header.css';

const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -2]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > 20;

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.work'), href: '/work' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.journey'), href: '/journey' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'ع', name: 'العربية' },
    { code: 'ru', label: 'РУ', name: 'Русский' },
    { code: 'zh', label: '中', name: '中文' },
    { code: 'es', label: 'ES', name: 'Español' },
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{ y: headerY }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="header-inner">
          <motion.div 
            className="logo"
            whileHover={{ 
              scale: 1.06,
              y: -2,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">Mazhar</Link>
          </motion.div>
          
          <nav className="nav">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || 
                              (pathname === '/' && item.href.startsWith('/#'));
              
              return (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 + i * 0.08, 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    href={item.href}
                    className={isActive ? 'active' : ''}
                    style={{ display: 'inline-block' }}
                  >
                    <motion.span
                      whileHover={{ 
                        y: -3,
                        scale: 1.03,
                        transition: { duration: 0.3 }
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="header-actions">
            {/* Personality Line */}
            <motion.div 
              className="personality-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>Based in Dubai, creating visuals that feel alive.</span>
            </motion.div>

            {/* Language Selector */}
            <motion.div 
              className="language-selector"
              whileHover={{ scale: 1.05 }}
            >
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                aria-label="Select language"
                className="language-select"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label} {lang.name}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              whileHover={{ 
                scale: 1.15, 
                rotate: 180,
                transition: { duration: 0.35 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </motion.button>

            {/* Contact Button */}
            <Link href="/contact">
              <motion.button 
                className="btn btn-primary btn-small"
                whileHover={{ 
                  scale: 1.06, 
                  y: -3,
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('nav.contact')}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
