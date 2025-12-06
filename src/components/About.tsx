import React from 'react';
import { motion, useInView } from 'framer-motion';
import { motionConfig } from '../utils/motion';
import './About.css';

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const skills = ['SEO', 'Google Ads', 'Meta Ads', 'Content Strategy', 'Video Production', 'Shopify', 'WordPress', 'Figma', 'Photoshop', 'Brand Strategy'];

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 15, filter: 'blur(4px)' },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        delay: i * 0.06,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  return (
    <section id="about" className="fold about" ref={ref}>
      <div className="container">
        <div className="about-inner">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: -50, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Creative problem solver<br/>with <span className="accent">collaborative spirit</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Results-driven Digital Marketing & Creative Specialist with expertise in website management, SEO, Google Ads, social media marketing, photography, and videography.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
            animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 50, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Skilled in developing, executing, and analyzing data-driven marketing strategies that increase brand visibility and drive measurable results. Experienced in managing multiple brands such as @corechamps, @musclerulz, @prosciencenutra and @jnknutrition, handling full digital operations from content design and video production to ad campaign optimization and web maintenance.
            </motion.p>
            
            <div className="skills-pills">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-pill"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={skillVariant}
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.25)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
