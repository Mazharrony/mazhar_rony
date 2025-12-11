'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { serviceData, type ServiceSlug } from '@/lib/services/serviceData';
import './ServiceDetail.css';

interface ServiceDetailProps {
  slug: ServiceSlug;
}

const AedIcon = () => (
  <svg
    className="aed-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.69 56.69"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M51.02,27.44l-.85-.74c-.2-.11-.97-.39-1.15-.39h-3.85v3.91c1.98.11,4.12-.25,5.29,1.75.16.27.57,1.32.57,1.59v1.7c-1.66-1.77-4.4-.78-6.57-1.02-.66,3.63-2.74,7.14-5.61,9.45-7.93,6.37-19.66,3.76-29.08,4.32l.65-.89c.52-.92.9-1.92,1.03-2.97l.22-9.9h-2.93c-.11,0-.81-.29-.96-.37-1.66-.84-2.2-2.82-2.07-4.56.41.15.67.52,1.09.71.19.08.86.32,1.01.32h3.75v-4.01h-3.03c-.09,0-1.04-.48-1.18-.57-1.35-.95-1.77-2.79-1.65-4.36.45.28,1.25,1.03,1.8,1.03h4.01l.16-.35c-.23-4.49.85-9.49-1.86-13.42h16.29c6.18.38,12.38,2.61,15.92,7.92,1.18,1.77,1.89,3.78,2.52,5.8,2.19.2,4.17-.51,5.7,1.49.23.31.78,1.34.78,1.69v1.9ZM37.76,22.4c-.58-3.97-2.36-7.86-5.93-9.95-2.61-1.53-5.33-1.78-8.3-1.87-1.97-.06-3.95.05-5.91,0v11.82h20.14ZM38.17,26.3h-20.55v4.01h20.55v-4.01ZM37.76,34.22h-20.14v11.82c5.25-.08,11.4.58,15.67-3.08,2.6-2.23,3.91-5.4,4.47-8.74Z"
    />
  </svg>
);

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const { t, tObject } = useLanguage();
  const service = serviceData[slug];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [countersAnimated, setCountersAnimated] = useState(false);

  // Scroll-linked animations
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for overview section (slower scroll)
  const overviewY = useTransform(scrollY, [0, 800], [0, -100]);
  const overviewBlur = useTransform(scrollY, [0, 400], [15, 0]);

  // Parallax for why section (faster scroll)
  const whyY = useTransform(scrollY, [200, 1000], [0, -150]);
  const whyBlur = useTransform(scrollY, [200, 600], [15, 0]);

  // Parallax for approach cards
  const approachY = useTransform(scrollY, [800, 1400], [0, -120]);
  const approachBlur = useTransform(scrollY, [800, 1200], [12, 0]);

  // Parallax for deliverables
  const deliverablesY = useTransform(scrollY, [1200, 1800], [0, -100]);
  const deliverablesBlur = useTransform(scrollY, [1200, 1600], [12, 0]);

  // Parallax for skills
  const skillsY = useTransform(scrollY, [1400, 2000], [0, -110]);
  const skillsBlur = useTransform(scrollY, [1400, 1800], [12, 0]);

  // Parallax for FAQ
  const faqY = useTransform(scrollY, [1800, 2400], [0, -130]);
  const faqBlur = useTransform(scrollY, [1800, 2200], [12, 0]);

  // Parallax for stats section
  const statsY = useTransform(scrollY, [600, 1000], [0, -80]);
  const statsBlur = useTransform(scrollY, [600, 800], [10, 0]);

  // Parallax for testimonials
  const testimonialsY = useTransform(scrollY, [1000, 1400], [0, -90]);
  const testimonialsBlur = useTransform(scrollY, [1000, 1200], [10, 0]);

  // Parallax for case studies
  const caseStudiesY = useTransform(scrollY, [1600, 2000], [0, -100]);
  const caseStudiesBlur = useTransform(scrollY, [1600, 1800], [10, 0]);

  // Get translation keys for this service
  const getKey = (section: string) => `services.detail.${service.id}.${section}`;
  
  // Map service IDs to details keys
  const detailsKeyMap: Record<string, string> = {
    'social': 'services.details.socialMedia',
    'content': 'services.details.contentVideo',
    'ads': 'services.details.ads',
    'webopt': 'services.details.website',
    'brand': 'services.details.brand',
    'ecommerce': 'services.details.ecommerce',
    'webapp': 'services.details.webApp',
  };
  
  const detailsKey = detailsKeyMap[service.id] || '';
  
  // Helper to safely get translation data using tObject
  const getDetailsData = (key: string) => {
    if (!detailsKey) return null;
    try {
      const data = tObject(`${detailsKey}.${key}`);
      
      // Check if it's a valid array
      if (Array.isArray(data)) {
        return data.length > 0 ? data : null;
      }
      
      // Check if it's a valid object
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        return Object.keys(data).length > 0 ? data : null;
      }
      
      return null;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Translation key not found: ${detailsKey}.${key}`, e);
      }
      return null;
    }
  };
  
  const skills = getDetailsData('skills');
  const stats = getDetailsData('stats');
  const testimonials = getDetailsData('testimonials');
  const caseStudies = getDetailsData('caseStudies');
  const techStack = getDetailsData('techStack');
  const relatedServices = getDetailsData('relatedServices');

  // Debug: Log what we're getting
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Service Detail Debug:', {
        serviceId: service.id,
        detailsKey,
        stats: stats ? `Found ${Array.isArray(stats) ? stats.length : 'object'} items` : 'NOT FOUND',
        testimonials: testimonials ? `Found ${Array.isArray(testimonials) ? testimonials.length : 'object'} items` : 'NOT FOUND',
        caseStudies: caseStudies ? `Found ${Array.isArray(caseStudies) ? caseStudies.length : 'object'} items` : 'NOT FOUND',
        techStack: techStack ? `Found ${Array.isArray(techStack) ? techStack.length : 'object'} items` : 'NOT FOUND',
        relatedServices: relatedServices ? `Found ${Array.isArray(relatedServices) ? relatedServices.length : 'object'} items` : 'NOT FOUND',
        rawStats: tObject(`${detailsKey}.stats`),
      });
    }
  }, [service.id, detailsKey, stats, testimonials, caseStudies, techStack, relatedServices]);

  // Animated counter component
  const AnimatedCounter: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({ value, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView && !countersAnimated) {
        setCountersAnimated(true);
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    hover: {
      y: -6,
      transition: { duration: 0.4 },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div ref={containerRef} className="service-detail-page" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero Section - Split Layout */}
      <motion.section className="service-hero" variants={itemVariants}>
        <div className="hero-grid">
          <motion.div className="hero-content" variants={slideInVariants}>
            <motion.div className="service-badge" variants={numberVariants}>
              {t('services.detail.badge')}
            </motion.div>
            <h1 className="service-title gradient-text">{t(service.titleKey)}</h1>
            <p className="service-tagline">{t(service.taglineKey)}</p>
          </motion.div>
          <motion.div className="hero-accent" variants={numberVariants}>
            <div className="accent-line"></div>
            <div className="accent-dot"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview + Why - Asymmetric Grid */}
      <motion.section 
        className="service-section overview-why-grid" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{ y: overviewY }}
      >
        <motion.div 
          className="overview-card modern-card" 
          variants={cardVariants} 
          whileHover="hover"
          style={{
            filter: overviewBlur.get() ? `blur(${overviewBlur})px` : 'blur(0px)',
          }}
        >
          <motion.span className="card-number" variants={numberVariants}>
            01
          </motion.span>
          <h2 className="section-title">{t('services.detail.overview.title')}</h2>
          <p className="section-content">{t(service.overviewKey)}</p>
        </motion.div>
        <motion.div 
          className="why-card modern-card accent-card" 
          variants={cardVariants} 
          whileHover="hover"
          style={{
            y: whyY,
            filter: whyBlur.get() ? `blur(${whyBlur})px` : 'blur(0px)',
          }}
        >
          <motion.span className="card-number" variants={numberVariants}>
            02
          </motion.span>
          <h2 className="section-title">{t('services.detail.why.title')}</h2>
          <p className="section-content">{t(getKey('why'))}</p>
        </motion.div>
      </motion.section>

      {/* Our Approach - Staggered Cards */}
      <motion.section 
        className="service-section approach-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{ 
          y: approachY,
          filter: approachBlur
        }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">02</span>
          <h2 className="section-title-large">{t('services.detail.approach.title')}</h2>
        </motion.div>
        <motion.div className="approach-stagger" variants={staggerContainerVariants}>
          {[1, 2, 3, 4].map((step) => {
            const titleKey = getKey(`approach.step${step}.title`);
            const descKey = getKey(`approach.step${step}.description`);
            const title = t(titleKey);
            const desc = t(descKey);
            // Only hide if both are empty (translation not found)
            if (!title && !desc) return null;
            return (
              <motion.div key={step} className={`approach-card modern-card stagger-${step}`} variants={cardVariants} whileHover="hover">
                <div className="step-header">
                  <motion.span className="step-number" variants={numberVariants}>
                    {step.toString().padStart(2, '0')}
                  </motion.span>
                  <div className="step-line"></div>
                </div>
                {title && <h3 className="step-title">{title}</h3>}
                {desc && <p className="step-description">{desc}</p>}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* What You Get - Minimal List */}
      <motion.section 
        className="service-section deliverables-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{
          y: deliverablesY,
          filter: deliverablesBlur
        }}
      >
        <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">03</span>
          <h2 className="section-title-large">{t('services.detail.deliverables.title')}</h2>
        </motion.div>
        <motion.div className="deliverables-minimal" variants={staggerContainerVariants}>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const key = getKey(`deliverables.${item}`);
            const text = t(key);
            // Only hide if empty (translation not found)
            if (!text) return null;
            return (
              <motion.div key={item} className="deliverable-item-minimal" variants={itemVariants}>
                <span className="item-dash">—</span>
                <span className="item-text">{text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Skills & Capabilities - Grid */}
      {skills && Array.isArray(skills) && skills.length > 0 && (
        <motion.section 
          className="service-section skills-section" 
          variants={staggerContainerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          style={{
            y: skillsY,
            filter: skillsBlur
          }}
        >
          <motion.div className="section-header-inline" variants={itemVariants}>
            <span className="section-number">04</span>
            <h2 className="section-title-large">Key Capabilities</h2>
          </motion.div>
          <motion.div className="skills-grid-modern" variants={staggerContainerVariants}>
            {skills.map((skill: any, index: number) => (
              <motion.div
                key={index}
                className="skill-card-modern"
                variants={cardVariants}
                whileHover="hover"
                style={{
                  '--accent-color': skill.accent || '#6366f1',
                } as React.CSSProperties}
              >
                <div className="skill-icon-modern" style={{ color: skill.accent || '#6366f1' }}>
                  {skill.icon}
                </div>
                <h3 className="skill-title-modern">{skill.title}</h3>
                <p className="skill-detail-modern">{skill.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Stats & Metrics - Animated Counters */}
      <motion.section 
        className="service-section stats-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{
          y: statsY,
          filter: statsBlur
        }}
      >
          <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">04</span>
          <h2 className="section-title-large">Results That Matter</h2>
        </motion.div>
        {stats && Array.isArray(stats) && stats.length > 0 ? (
          <motion.div className="stats-grid-modern" variants={staggerContainerVariants}>
            {stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                className="stat-card-modern"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="stat-icon-modern" style={{ color: stat.accent || '#6366f1' }}>
                  {stat.icon}
                </div>
                <div className="stat-value-modern">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix || ''} 
                    prefix={stat.prefix || ''} 
                  />
                </div>
                <h3 className="stat-label-modern">{stat.label}</h3>
                <p className="stat-description-modern">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="stats-grid-modern" variants={staggerContainerVariants}>
            <motion.div className="stat-card-modern" variants={cardVariants}>
              <div className="stat-icon-modern">📈</div>
              <div className="stat-value-modern"><AnimatedCounter value={250} suffix="%" /></div>
              <h3 className="stat-label-modern">Average Growth</h3>
              <p className="stat-description-modern">Increase in engagement rates</p>
            </motion.div>
            <motion.div className="stat-card-modern" variants={cardVariants}>
              <div className="stat-icon-modern">👥</div>
              <div className="stat-value-modern"><AnimatedCounter value={2} suffix="M+" /></div>
              <h3 className="stat-label-modern">Total Reach</h3>
              <p className="stat-description-modern">People reached across campaigns</p>
            </motion.div>
            <motion.div className="stat-card-modern" variants={cardVariants}>
              <div className="stat-icon-modern">💰</div>
              <div className="stat-value-modern"><AnimatedCounter value={180} suffix="%" /></div>
              <h3 className="stat-label-modern">ROI Improvement</h3>
              <p className="stat-description-modern">Average return on ad spend</p>
            </motion.div>
            <motion.div className="stat-card-modern" variants={cardVariants}>
              <div className="stat-icon-modern">⚡</div>
              <div className="stat-value-modern"><AnimatedCounter value={48} suffix="hrs" /></div>
              <h3 className="stat-label-modern">Response Time</h3>
              <p className="stat-description-modern">Average engagement response</p>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Testimonials - Client Quotes */}
      <motion.section 
        className="service-section testimonials-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{
          y: testimonialsY,
          filter: testimonialsBlur
        }}
      >
          <motion.div className="section-header-inline" variants={itemVariants}>
            <span className="section-number">05</span>
            <h2 className="section-title-large">What Clients Say</h2>
          </motion.div>
        {testimonials && Array.isArray(testimonials) && testimonials.length > 0 ? (
          <motion.div className="testimonials-grid-modern" variants={staggerContainerVariants}>
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                className="testimonial-card-modern"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="testimonial-quote-icon">"</div>
                <p className="testimonial-text-modern">{testimonial.quote}</p>
                <div className="testimonial-author-modern">
                  <div className="author-avatar-modern" style={{ background: testimonial.accent || '#6366f1' }}>
                    {testimonial.initials || testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info-modern">
                    <h4 className="author-name-modern">{testimonial.name}</h4>
                    <p className="author-role-modern">{testimonial.role}</p>
                    <p className="author-company-modern">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="testimonials-grid-modern" variants={staggerContainerVariants}>
            <motion.div className="testimonial-card-modern" variants={cardVariants}>
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text-modern">Our Instagram engagement tripled in just 3 months. The content strategy was spot-on and the community management made all the difference.</p>
              <div className="testimonial-author-modern">
                <div className="author-avatar-modern" style={{ background: '#6366f1' }}>SA</div>
                <div className="author-info-modern">
                  <h4 className="author-name-modern">Sarah Ahmed</h4>
                  <p className="author-role-modern">Marketing Director</p>
                  <p className="author-company-modern">Fitness Brand Dubai</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card-modern" variants={cardVariants}>
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text-modern">Finally, someone who gets it. No fluff, just results. Our follower growth and conversion rates have never been better.</p>
              <div className="testimonial-author-modern">
                <div className="author-avatar-modern" style={{ background: '#a855f7' }}>MR</div>
                <div className="author-info-modern">
                  <h4 className="author-name-modern">Mohammed Al-Rashid</h4>
                  <p className="author-role-modern">Founder</p>
                  <p className="author-company-modern">E-commerce Startup</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card-modern" variants={cardVariants}>
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text-modern">The team transformed our social presence completely. Professional, creative, and they actually understand our brand voice.</p>
              <div className="testimonial-author-modern">
                <div className="author-avatar-modern" style={{ background: '#10b981' }}>ET</div>
                <div className="author-info-modern">
                  <h4 className="author-name-modern">Emma Thompson</h4>
                  <p className="author-role-modern">Brand Manager</p>
                  <p className="author-company-modern">Lifestyle Brand</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Technology Stack */}
      <motion.section 
        className="service-section tech-stack-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">06</span>
          <h2 className="section-title-large">Tools & Technology</h2>
        </motion.div>
        {techStack && Array.isArray(techStack) && techStack.length > 0 ? (
          <motion.div className="tech-stack-grid-modern" variants={staggerContainerVariants}>
            {techStack.map((tech: any, index: number) => (
              <motion.div
                key={index}
                className="tech-item-modern"
                variants={cardVariants}
                whileHover="hover"
              >
                {tech.icon && (
                  <div className="tech-icon-modern">
                    {tech.icon}
                  </div>
                )}
                {tech.logo && (
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="tech-logo-modern"
                  />
                )}
                <h3 className="tech-name-modern">{tech.name}</h3>
                <p className="tech-description-modern">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="tech-stack-grid-modern" variants={staggerContainerVariants}>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">📷</div>
              <h3 className="tech-name-modern">Instagram</h3>
              <p className="tech-description-modern">Primary platform management</p>
            </motion.div>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">🎵</div>
              <h3 className="tech-name-modern">TikTok</h3>
              <p className="tech-description-modern">Short-form video content</p>
            </motion.div>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">👥</div>
              <h3 className="tech-name-modern">Facebook</h3>
              <p className="tech-description-modern">Community & ad management</p>
            </motion.div>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">🎨</div>
              <h3 className="tech-name-modern">Canva Pro</h3>
              <p className="tech-description-modern">Design & asset creation</p>
            </motion.div>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">✂️</div>
              <h3 className="tech-name-modern">CapCut</h3>
              <p className="tech-description-modern">Video editing & production</p>
            </motion.div>
            <motion.div className="tech-item-modern" variants={cardVariants}>
              <div className="tech-icon-modern">📊</div>
              <h3 className="tech-name-modern">Meta Business</h3>
              <p className="tech-description-modern">Analytics & insights</p>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Case Studies Preview */}
      <motion.section 
        className="service-section case-studies-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{
          y: caseStudiesY,
          filter: caseStudiesBlur
        }}
      >
        <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">07</span>
          <h2 className="section-title-large">Featured Work</h2>
        </motion.div>
        {caseStudies && Array.isArray(caseStudies) && caseStudies.length > 0 ? (
          <motion.div className="case-studies-grid-modern" variants={staggerContainerVariants}>
            {caseStudies.map((study: any, index: number) => (
              <motion.div
                key={index}
                className="case-study-card-modern"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="case-study-image-modern" style={{ background: study.image || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  {study.imageUrl && (
                    <img src={study.imageUrl} alt={study.title} />
                  )}
                </div>
                <div className="case-study-content-modern">
                  <span className="case-study-category-modern">{study.category}</span>
                  <h3 className="case-study-title-modern">{study.title}</h3>
                  <p className="case-study-description-modern">{study.description}</p>
                  {study.results && (
                    <div className="case-study-results-modern">
                      {study.results.map((result: any, idx: number) => (
                        <div key={idx} className="result-item-modern">
                          <span className="result-value-modern">{result.value}</span>
                          <span className="result-label-modern">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="case-studies-grid-modern" variants={staggerContainerVariants}>
            <motion.div className="case-study-card-modern" variants={cardVariants}>
              <div className="case-study-image-modern" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
              <div className="case-study-content-modern">
                <span className="case-study-category-modern">Social Media</span>
                <h3 className="case-study-title-modern">Fitness Brand Transformation</h3>
                <p className="case-study-description-modern">Complete Instagram overhaul for a supplement brand, resulting in 300% engagement increase and 2M+ viral frame reach.</p>
                <div className="case-study-results-modern">
                  <div className="result-item-modern">
                    <span className="result-value-modern">300%</span>
                    <span className="result-label-modern">Engagement Increase</span>
                  </div>
                  <div className="result-item-modern">
                    <span className="result-value-modern">2M+</span>
                    <span className="result-label-modern">Viral Reach</span>
                  </div>
                  <div className="result-item-modern">
                    <span className="result-value-modern">45%</span>
                    <span className="result-label-modern">Conversion Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="case-study-card-modern" variants={cardVariants}>
              <div className="case-study-image-modern" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
              <div className="case-study-content-modern">
                <span className="case-study-category-modern">Content Strategy</span>
                <h3 className="case-study-title-modern">E-commerce Social Strategy</h3>
                <p className="case-study-description-modern">Multi-platform content strategy that increased profile visits by 250% and drove 40% more website traffic.</p>
                <div className="case-study-results-modern">
                  <div className="result-item-modern">
                    <span className="result-value-modern">250%</span>
                    <span className="result-label-modern">Profile Visits</span>
                  </div>
                  <div className="result-item-modern">
                    <span className="result-value-modern">40%</span>
                    <span className="result-label-modern">Website Traffic</span>
                  </div>
                  <div className="result-item-modern">
                    <span className="result-value-modern">180%</span>
                    <span className="result-label-modern">ROAS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* FAQ - Expandable Modern */}
      <motion.section 
        className="service-section faq-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        style={{
          y: faqY,
          filter: faqBlur
        }}
      >
        <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">08</span>
          <h2 className="section-title-large">{t('services.detail.faq.title')}</h2>
        </motion.div>
        <motion.div className="faq-modern" variants={staggerContainerVariants}>
          {[1, 2, 3, 4, 5].map((item) => {
            const qKey = getKey(`faq.${item}.question`);
            const aKey = getKey(`faq.${item}.answer`);
            const question = t(qKey);
            const answer = t(aKey);
            // Only hide if both are empty (translation not found)
            if (!question && !answer) return null;
            return (
              <motion.details
                key={item}
                className="faq-modern-item"
                variants={cardVariants}
                open={expandedFaq === item}
                onChange={() => setExpandedFaq(expandedFaq === item ? null : item)}
              >
                <summary className="faq-modern-question">
                  {question && <span className="faq-q-text">{question}</span>}
                  <span className="faq-toggle"></span>
                </summary>
                {answer && (
                  <motion.p className="faq-modern-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                    {answer}
                  </motion.p>
                )}
              </motion.details>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Related Services */}
      <motion.section 
        className="service-section related-services-section" 
        variants={staggerContainerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <motion.div className="section-header-inline" variants={itemVariants}>
          <span className="section-number">09</span>
          <h2 className="section-title-large">You Might Also Like</h2>
        </motion.div>
        {relatedServices && Array.isArray(relatedServices) && relatedServices.length > 0 ? (
          <motion.div className="related-services-grid-modern" variants={staggerContainerVariants}>
            {relatedServices.map((related: any, index: number) => (
              <motion.div
                key={index}
                className="related-service-card-modern"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="related-service-icon-modern" style={{ color: related.accent || '#6366f1' }}>
                  {related.icon}
                </div>
                <h3 className="related-service-title-modern">{related.title}</h3>
                <p className="related-service-description-modern">{related.description}</p>
                {related.href && (
                  <Link href={related.href} className="related-service-link-modern">
                    Learn More →
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div className="related-services-grid-modern" variants={staggerContainerVariants}>
            <motion.div className="related-service-card-modern" variants={cardVariants}>
              <div className="related-service-icon-modern" style={{ color: '#a855f7' }}>🎬</div>
              <h3 className="related-service-title-modern">Content & Video Production</h3>
              <p className="related-service-description-modern">Create scroll-stopping videos and visuals that complement your social strategy.</p>
              <Link href="/services/content-video-production" className="related-service-link-modern">Learn More →</Link>
            </motion.div>
            <motion.div className="related-service-card-modern" variants={cardVariants}>
              <div className="related-service-icon-modern" style={{ color: '#6366f1' }}>📢</div>
              <h3 className="related-service-title-modern">Google & Meta Ads</h3>
              <p className="related-service-description-modern">Amplify your best content with targeted paid campaigns that convert.</p>
              <Link href="/services/google-meta-ads" className="related-service-link-modern">Learn More →</Link>
            </motion.div>
            <motion.div className="related-service-card-modern" variants={cardVariants}>
              <div className="related-service-icon-modern" style={{ color: '#10b981' }}>🎨</div>
              <h3 className="related-service-title-modern">Brand Strategy & Design</h3>
              <p className="related-service-description-modern">Build a cohesive brand identity that works across all social platforms.</p>
              <Link href="/services/brand-strategy-design" className="related-service-link-modern">Learn More →</Link>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* Final CTA - Full Width */}
      <motion.section className="service-cta-modern" variants={staggerContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="cta-grid">
          <motion.div className="cta-content" variants={itemVariants}>
            <h2 className="cta-title">{t('services.detail.cta.title')}</h2>
            <p className="cta-description">{t('services.detail.cta.description')}</p>
          </motion.div>
          <motion.div className="cta-actions" variants={staggerContainerVariants}>
            <motion.div variants={itemVariants}>
              <Link href="/contact" className="cta-btn-primary">
                {t('services.detail.cta.primary')}
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/services" className="cta-btn-ghost">
                {t('services.detail.cta.secondary')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ServiceDetail;
