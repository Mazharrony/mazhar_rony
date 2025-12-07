import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Header.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeChange, scrollPosition }) => {
  const isScrolled = scrollPosition > 20;
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -2]);

  const toggleTheme = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
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
            Mazhar
          </motion.div>
          
          <nav className="nav">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 + i * 0.08, 
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -3,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="header-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ 
                scale: 1.15, 
                rotate: 180,
                transition: { duration: 0.35 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </motion.button>
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
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
