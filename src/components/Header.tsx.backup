import React from 'react';
import './Header.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeChange, scrollPosition }) => {
  const isScrolled = scrollPosition > 20;

  const toggleTheme = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">Mazhar</div>
          
          <nav className="nav">
            <a href="#hero">Home</a>
            <a href="#portfolio">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="btn btn-primary btn-small">Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
