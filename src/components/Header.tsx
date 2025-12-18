'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { useTheme } from '@/lib/ThemeContext';
import './Header.css';

const Header: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY: motionScrollY } = useScroll();

  // Track scroll position for header shrink behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header shrinks slightly when scrolled (80px → 60px)
  const headerHeight = scrollY > 20 ? 60 : 80;
  const isScrolled = scrollY > 20;
  const headerOpacity = scrollY > 20 ? 0.98 : 1;
  const headerBlur = scrollY > 20 ? 'blur(10px)' : 'blur(0px)';

  // Navigation items: match spec (About, Work, Services, Contact)
  // Note: Home is implied via brand click
  const navItems = [
    { label: t('header.nav.about'), href: '/about', key: 'about' },
    { label: t('header.nav.work'), href: '/work', key: 'work' },
    { label: t('header.nav.services'), href: '/services', key: 'services' },
    { label: t('header.nav.contact'), href: '/contact', key: 'contact' },
  ];

  // Languages for toggle (EN, AR, RU, ZH, ES)
  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'ar', label: 'ع', name: 'العربية' },
    { code: 'ru', label: 'РУ', name: 'Русский' },
    { code: 'zh', label: '中', name: '中文' },
    { code: 'es', label: 'ES', name: 'Español' },
  ];

  // Check if current page is active
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{ 
        height: headerHeight,
        opacity: headerOpacity,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: headerOpacity }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">
        <div className="header-inner">
          {/* ZONE 1: LEFT – Brand Name */}
          <div className="header-zone header-zone-left">
            <motion.div 
              className="brand"
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/">
                {t('header.brand')}
              </Link>
            </motion.div>
          </div>

          {/* ZONE 2: CENTER – Navigation Links (Desktop Only) */}
          <nav className="header-zone header-zone-center nav-desktop">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <motion.div 
                  key={item.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={item.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* ZONE 3: RIGHT – Controls (Language, Theme, CTA) */}
          <div className="header-zone header-zone-right">
            {/* Dedicated Actions Group - Fixed Position */}
            <div className="header-actions">
              {/* Language Toggle */}
              <motion.div className="header-control language-control" whileHover={{ scale: 1.05 }}>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  aria-label="Select language"
                  className="language-select"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                className="header-control theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </motion.button>

              {/* CTA Button: "Say hello" */}
              <Link href="/contact">
                <motion.button 
                  className="header-cta"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('header.cta')}
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Toggle (Hamburger) - Outside actions group */}
            <motion.button
              className="header-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.9 }}
            >
              <span />
              <span />
              <span />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer) - Full Screen Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer Container */}
          <motion.div
            className="mobile-menu-drawer"
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 300,
              mass: 0.5
            }}
          >
            {/* Drawer Header */}
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">{t('header.brand')}</h2>
              <motion.button
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="mobile-nav">
              {navItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span className="mobile-nav-link-text">{item.label}</span>
                      {isActive && (
                        <motion.div
                          className="mobile-nav-link-indicator"
                          layoutId="mobileNavIndicator"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Section */}
            <motion.div
              className="mobile-menu-cta-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <motion.button
                  className="mobile-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('header.cta')}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.header>
  );
};

export default Header;
