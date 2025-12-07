'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsAnimating(false);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@meetmazhar.site',
      href: 'mailto:hello@meetmazhar.site',
      color: '#6366f1'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+971 50 721 7156',
      href: 'https://wa.me/971507217156',
      color: '#10b981'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+971 50 721 7156',
      href: 'tel:+971507217156',
      color: '#a855f7'
    }
  ];

  return (
    <section className="fold contact" ref={containerRef}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let's Connect
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Say hello.
          </motion.h1>
          
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have a project in mind or just want to chat? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="What's your name?"
                  required
                  disabled={isAnimating || submitted}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="your@email.com"
                  required
                  disabled={isAnimating || submitted}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder="What's this about?"
                  disabled={isAnimating || submitted}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell me more..."
                  rows={5}
                  required
                  disabled={isAnimating || submitted}
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={isAnimating || submitted}
                whileHover={{ scale: submitted ? 1 : 1.05, y: submitted ? 0 : -4 }}
                whileTap={{ scale: submitted ? 1 : 0.95 }}
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓ Message sent!
                  </motion.span>
                ) : isAnimating ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ✈️
                  </motion.span>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="contact-methods"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="methods-header">
              <h3>Quick Contact</h3>
              <p>Or reach me directly:</p>
            </div>

            <div className="methods-list">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.href}
                  className="contact-method-card"
                  target={method.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  style={{ '--method-color': method.color } as React.CSSProperties}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span 
                    className="method-icon"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {method.icon}
                  </motion.span>
                  <div className="method-content">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                  <motion.span 
                    className="method-arrow"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.95 }}
            >
              <p>Based in <strong>Dubai, UAE</strong></p>
              <p>Working with clients worldwide 🌍</p>
              <p>Typically respond within <strong>24 hours</strong></p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
