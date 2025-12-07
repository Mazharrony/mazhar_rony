'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ServiceModal from './ServiceModal';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const panelRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const isInView = useInView(panelRef, { once: false, margin: "-100px" });
  const { t } = useLanguage();

  // Map service titles to translation keys
  const serviceKeyMap: Record<string, string> = {
    "Social Media Marketing": "socialMedia",
    "Content & Video Production": "contentVideo",
    "Google & Meta Ads": "ads",
    "Website Optimization": "website",
    "Brand Strategy & Design": "brand",
    "E-commerce Management": "ecommerce"
  };

  const getServiceDetails = (serviceTitle: string) => {
    const key = serviceKeyMap[serviceTitle];
    if (!key) return null;
    
    const details = t(`services.details.${key}`) as any;
    return details;
  };

  const serviceDetails: Record<string, { title: string; description: string; skills: { icon: string; title: string; detail: string; accent: string }[] }> = {
    "Social Media Marketing": {
      title: t('services.details.socialMedia.title'),
      description: t('services.details.socialMedia.description'),
      skills: t('services.details.socialMedia.skills') as any || [],
    },
    "Content & Video Production": {
      title: t('services.details.contentVideo.title'),
      description: t('services.details.contentVideo.description'),
      skills: t('services.details.contentVideo.skills') as any || [],
    },
    "Google & Meta Ads": {
      title: t('services.details.ads.title'),
      description: t('services.details.ads.description'),
      skills: t('services.details.ads.skills') as any || [],
    },
    "Website Optimization": {
      title: t('services.details.website.title'),
      description: t('services.details.website.description'),
      skills: t('services.details.website.skills') as any || [],
    },
    "Brand Strategy & Design": {
      title: t('services.details.brand.title'),
      description: t('services.details.brand.description'),
      skills: t('services.details.brand.skills') as any || [],
    },
    "E-commerce Management": {
      title: t('services.details.ecommerce.title'),
      description: t('services.details.ecommerce.description'),
      skills: t('services.details.ecommerce.skills') as any || [],
    },
  };

  const handleCloseModal = useCallback(() => setActiveService(null), []);

  const services = [
    {
      title: t('services.cards.0.title'),
      description: t('services.cards.0.description'),
      link: t('services.cards.0.link')
    },
    {
      title: t('services.cards.1.title'),
      description: t('services.cards.1.description'),
      link: t('services.cards.1.link')
    },
    {
      title: t('services.cards.2.title'),
      description: t('services.cards.2.description'),
      link: t('services.cards.2.link')
    },
    {
      title: t('services.cards.3.title'),
      description: t('services.cards.3.description'),
      link: t('services.cards.3.link')
    },
    {
      title: t('services.cards.4.title'),
      description: t('services.cards.4.description'),
      link: t('services.cards.4.link')
    },
    {
      title: t('services.cards.5.title'),
      description: t('services.cards.5.description'),
      link: t('services.cards.5.link')
    }
  ];

  const scrollVelocityRef = useRef({ velocity: 0, lastTime: Date.now() });

  useEffect(() => {
    if (!panelRef.current || !trackRef.current) return;

    const panel = panelRef.current;
    const track = trackRef.current;

    // Calculate horizontal scroll distance
    const totalWidth = track.scrollWidth;
    const viewportWidth = panel.offsetWidth;
    const distance = totalWidth - viewportWidth;

    // Detect scroll velocity
    let lastScrollY = window.scrollY;
    let velocityTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      const now = Date.now();
      const timeDelta = now - scrollVelocityRef.current.lastTime;

      // Calculate velocity (pixels per ms)
      scrollVelocityRef.current.velocity = timeDelta > 0 ? deltaY / timeDelta : 0;
      scrollVelocityRef.current.lastTime = now;
      lastScrollY = currentScrollY;

      // Clear existing timeout and set new one
      clearTimeout(velocityTimeout);
      velocityTimeout = setTimeout(() => {
        scrollVelocityRef.current.velocity = 0;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP ScrollTrigger: pin section and scrub horizontal movement with velocity
    const scrollTrigger = gsap.to(track, {
      x: -distance,
      ease: "power1.out",
      scrollTrigger: {
        trigger: panel,
        start: "top top",
        end: () => `+=${distance * 1.2}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Apply subtle velocity-based offset
          const velocity = scrollVelocityRef.current.velocity;
          const offset = velocity * 50; // Velocity multiplier for effect strength
          gsap.set(track, { x: -distance * self.progress + offset });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(velocityTimeout);
    };
  }, []);

  return (
    <section ref={panelRef} className="fold services services-panel">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('services.label')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        <div ref={trackRef} className="services-track">
          {services.map((service) => (
            <div
              key={service.title}
              className="card service-card"
              onClick={() => setActiveService(service.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveService(service.title);
                }
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                type="button"
                className="service-link"
                onClick={() => setActiveService(service.title)}
              >
                {service.link} →
              </button>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {activeService && serviceDetails[activeService] && (
            <ServiceModal
              key={activeService}
              data={serviceDetails[activeService]}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
