import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceModal from './ServiceModal';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const panelRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const isInView = useInView(panelRef, { once: false, margin: "-100px" });

  const serviceDetails: Record<string, { title: string; description: string; skills: { icon: string; title: string; detail: string; accent: string }[] }> = {
    "Social Media Marketing": {
      title: "Social Media Marketing",
      description: "High-impact social media strategy, execution, and optimization designed to drive visibility and conversions.",
      skills: [
        { icon: "📅", title: "Content Strategy", detail: "Build tailored content calendars aligned with brand goals.", accent: "#6366f1" },
        { icon: "🎨", title: "Creative Production", detail: "Dynamic visuals, Reels/TikTok editing, and branded assets.", accent: "#a855f7" },
        { icon: "⚙️", title: "Platform Optimization", detail: "Algorithm-aware posting and engagement tactics.", accent: "#06b6d4" },
        { icon: "📊", title: "Analytics & Insights", detail: "Measure growth, refine strategy, and track KPIs.", accent: "#f59e0b" },
        { icon: "🚀", title: "Paid Boosting", detail: "Amplify top-performing content for wider reach.", accent: "#10b981" },
        { icon: "🤝", title: "Community Engagement", detail: "Manage comments, messages, and interactions.", accent: "#f97316" },
      ],
    },
    "Content & Video Production": {
      title: "Content & Video Production",
      description: "Professional multimedia production for social platforms, ads, and branded storytelling.",
      skills: [
        { icon: "✂️", title: "Short-form Editing", detail: "Reels, TikTok, and Shorts optimized for attention.", accent: "#6366f1" },
        { icon: "✨", title: "Motion Graphics", detail: "Clean transitions and branded animations.", accent: "#a855f7" },
        { icon: "🎞️", title: "Color Grading", detail: "Cinematic tones and polished output.", accent: "#06b6d4" },
        { icon: "📸", title: "Product Shoots", detail: "Clean, modern shots for e-commerce or branding.", accent: "#f59e0b" },
        { icon: "🔊", title: "Sound Design", detail: "Crisp audio mixing and enhancement.", accent: "#10b981" },
        { icon: "📝", title: "Storyboarding", detail: "Visual direction and flow planning.", accent: "#f97316" },
      ],
    },
    "Google & Meta Ads": {
      title: "Google & Meta Ads",
      description: "Conversion-first ad campaigns with precise targeting and ongoing optimization.",
      skills: [
        { icon: "🧪", title: "A/B Testing", detail: "Experimentation to identify winning creatives.", accent: "#6366f1" },
        { icon: "🎯", title: "Audience Targeting", detail: "Segmentation, retargeting, and lookalikes.", accent: "#a855f7" },
        { icon: "💰", title: "Budget Optimization", detail: "Improve ROAS with smart spend allocation.", accent: "#06b6d4" },
        { icon: "🛤️", title: "Funnel Strategy", detail: "Awareness, retargeting, and conversion paths.", accent: "#f59e0b" },
        { icon: "📌", title: "Pixel/Event Setup", detail: "Accurate tracking for improved reporting.", accent: "#10b981" },
        { icon: "📈", title: "Performance Analysis", detail: "Weekly dashboards and insights.", accent: "#f97316" },
      ],
    },
    "Website Optimization": {
      title: "Website Optimization",
      description: "Enhancing speed, SEO, and user experience across WordPress and Shopify.",
      skills: [
        { icon: "⚡", title: "Speed Optimization", detail: "Reduce load times for better UX.", accent: "#6366f1" },
        { icon: "🔍", title: "SEO Structure", detail: "Metadata, schema, and on-page fixes.", accent: "#a855f7" },
        { icon: "🧭", title: "UI/UX Improvements", detail: "Cleaner navigation and flow.", accent: "#06b6d4" },
        { icon: "🧱", title: "Landing Page Design", detail: "Conversion-ready layouts.", accent: "#f59e0b" },
        { icon: "🧩", title: "Plugin/Theme Management", detail: "Lightweight, stable setups.", accent: "#10b981" },
        { icon: "📉", title: "Analytics Review", detail: "Behavior analysis and improvements.", accent: "#f97316" },
      ],
    },
    "Brand Strategy & Design": {
      title: "Brand Strategy & Design",
      description: "Building strong brand identities that communicate clearly across platforms.",
      skills: [
        { icon: "🌀", title: "Logo Systems", detail: "Modular, scalable identity sets.", accent: "#6366f1" },
        { icon: "🎨", title: "Color/Type Selection", detail: "Matching tone, voice, and personality.", accent: "#a855f7" },
        { icon: "📦", title: "Packaging Design", detail: "Product-ready visuals.", accent: "#06b6d4" },
        { icon: "📘", title: "Brand Guideline Development", detail: "Rules to keep everything aligned.", accent: "#f59e0b" },
        { icon: "🧭", title: "Creative Direction", detail: "Consistent visual language.", accent: "#10b981" },
        { icon: "🖼️", title: "Asset Production", detail: "Icons, graphics, templates.", accent: "#f97316" },
      ],
    },
    "E-commerce Management": {
      title: "E-commerce Management",
      description: "Optimizing product listings, storefront performance, and conversion flow.",
      skills: [
        { icon: "🗂️", title: "Catalog Management", detail: "Organized product structures.", accent: "#6366f1" },
        { icon: "🛒", title: "Conversion Optimization", detail: "Improve add-to-cart and purchase rate.", accent: "#a855f7" },
        { icon: "🔑", title: "SEO Product Copy", detail: "Search-friendly descriptions.", accent: "#06b6d4" },
        { icon: "📦", title: "Inventory Planning", detail: "Smooth stock tracking.", accent: "#f59e0b" },
        { icon: "🎯", title: "Promotional Strategy", detail: "Seasonal offers & bundles.", accent: "#10b981" },
        { icon: "📑", title: "Reporting", detail: "Performance insights and recommendations.", accent: "#f97316" },
      ],
    },
  };

  const handleCloseModal = useCallback(() => setActiveService(null), []);

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
