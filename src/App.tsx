import React, { useState, useEffect } from 'react';
import './App.css';
import { LanguageProvider } from '../lib/i18n/LanguageProvider';
import '../lib/i18n/LanguageConfirmation.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Journey from './components/Journey';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <LanguageProvider>
      <div className={`App ${theme}`} style={{ colorScheme: theme }}>
        <Header theme={theme} onThemeChange={setTheme} scrollPosition={scrollPosition} />
        <main>
          <Hero />
          <Services />
          <Process />
          <Portfolio />
          <Journey />
          <About />
          <Testimonials />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
