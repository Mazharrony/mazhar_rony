import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const panelRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(panelRef, { once: false, margin: "-100px" });

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Strategic content creation and campaign management across Instagram, Facebook, and TikTok.',
      link: 'Learn more'
    },
    {
      title: 'Content & Video Production',
      description: 'Professional photography, videography, and motion content using CapCut and DaVinci Resolve.',
      link: 'Learn more'
    },
    {
      title: 'Google & Meta Ads',
      description: 'Data-driven advertising campaigns optimized for conversion and ROI.',
      link: 'Learn more'
    },
    {
      title: 'Website Optimization',
      description: 'WordPress and Shopify site management, SEO, and UX improvements.',
      link: 'Learn more'
    },
    {
      title: 'Brand Strategy & Design',
      description: 'Visual assets, packaging design, and brand consistency using professional tools.',
      link: 'Learn more'
    },
    {
      title: 'E-commerce Management',
      description: 'Full-spectrum operations including listings, inventory, and sales optimization.',
      link: 'Learn more'
    }
  ];

  useEffect(() => {
    if (!panelRef.current || !trackRef.current) return;

    const panel = panelRef.current;
    const track = trackRef.current;

    // Calculate horizontal scroll distance
    const totalWidth = track.scrollWidth;
    const viewportWidth = panel.offsetWidth;
    const distance = totalWidth - viewportWidth;

    // GSAP ScrollTrigger: pin section and scrub horizontal movement
    const scrollTrigger = gsap.to(track, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: panel,
        start: "top top",
        end: () => `+=${distance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      },
    });

    return () => {
      scrollTrigger.kill();
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
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marketing & Creative Skills
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Full-spectrum digital marketing and creative expertise
          </motion.p>
        </motion.div>

        <div ref={trackRef} className="services-track">
          {services.map((service) => (
            <div key={service.title} className="card service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">
                {service.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
