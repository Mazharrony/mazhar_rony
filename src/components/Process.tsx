import React from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInLeft, motionConfig } from '../utils/motion';
import './Process.css';

const Process: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const steps = [
    { number: '01', title: 'Discovery', description: 'Understanding your goals and audience' },
    { number: '02', title: 'Strategy', description: 'Planning the approach and creative direction' },
    { number: '03', title: 'Execution', description: 'Bringing the vision to life with precision' }
  ];

  const stepVariant = {
    hidden: { opacity: 0, x: 60, scale: 0.9, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        delay: i * 0.18,
        ease: motionConfig.easing.smooth,
      },
    }),
  };

  return (
    <section className="fold process" ref={ref}>
      <div className="container">
        <div className="process-inner">
          <motion.div 
            className="process-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <motion.h2
              variants={fadeInLeft}
              transition={{ delay: 0.1 }}
            >
              Professional<br/>Expertise &<br/>Experience
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
            >
              Comprehensive background in digital marketing, creative design, and brand management across high-growth brands and industries.
            </motion.p>
            <motion.button 
              className="btn btn-primary"
              variants={fadeInLeft}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.06,
                y: -3,
                boxShadow: '0 12px 36px rgba(99, 102, 241, 0.35)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              Contact me
            </motion.button>
          </motion.div>

          <div className="process-right">
            <div className="steps-container">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="step-card"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={stepVariant}
                  whileHover={{
                    x: -10,
                    scale: 1.02,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    transition: { duration: 0.35 }
                  }}
                >
                  <motion.div 
                    className="step-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: index * 0.15 + 0.2,
                      duration: 0.5,
                      ease: motionConfig.easing.smooth 
                    }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
