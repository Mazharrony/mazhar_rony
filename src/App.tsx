import React, { useState, useEffect } from 'react';
import './App.css';
import { LanguageProvider } from '../lib/i18n/LanguageProvider';
import '../lib/i18n/LanguageConfirmation.css';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Journey from './components/Journey';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

type ServiceSlug = 
  | 'social-media-marketing' 
  | 'content-video-production' 
  | 'google-meta-ads' 
  | 'website-optimization' 
  | 'brand-strategy-design' 
  | 'ecommerce-management'
  | 'web-app-development';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeService, setActiveService] = useState<ServiceSlug | null>(null);

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

  // Handle hash-based routing for service details
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service/')) {
        const slug = hash.replace('#service/', '') as ServiceSlug;
        setActiveService(slug);
      } else {
        setActiveService(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseService = () => {
    window.location.hash = '';
    setActiveService(null);
  };

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
        
        <AnimatePresence>
          {activeService && (
            <ServiceDetail
              key={activeService}
              slug={activeService}
              onClose={handleCloseService}
            />
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;
