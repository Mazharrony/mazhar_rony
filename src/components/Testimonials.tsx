'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, motionConfig } from '../utils/motion';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const testimonials: Testimonial[] = [
    {
      quote: 'Exceptional work and attention to detail. They truly understand our brand vision.',
      author: 'Jessica Smith',
      role: 'CEO, TechStartup'
    },
    {
      quote: 'The design process was smooth and collaborative. Results exceeded expectations.',
      author: 'Michael Chen',
      role: 'Founder, Creative Agency'
    },
    {
      quote: 'Professional, creative, and a pleasure to work with. Highly recommended!',
      author: 'Emma Davis',
      role: 'Marketing Director'
    }
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.92, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        delay: i * 0.18,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  return (
    <section className="fold testimonials" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>What happy clients say</motion.h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div 
              key={index} 
              className="testimonial-card card"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: '0 20px 60px rgba(0,0,0,0.14)',
                transition: { duration: 0.35 }
              }}
            >
              <motion.div 
                className="testimonial-quote"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                "{testimonial.quote}"
              </motion.div>
              <motion.div 
                className="testimonial-author"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                <strong>{testimonial.author}</strong>
                <p>{testimonial.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
