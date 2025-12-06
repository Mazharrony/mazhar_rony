import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, motionConfig } from '../utils/motion';
import './Portfolio.css';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    { id: '1', title: 'Brand Identity', category: 'branding', image: 'linear-gradient(135deg, #e0e0e0, #d0d0d0)' },
    { id: '2', title: 'Web Design', category: 'web', image: 'linear-gradient(135deg, #d0d0d0, #c0c0c0)' },
    { id: '3', title: 'Product Design', category: 'design', image: 'linear-gradient(135deg, #c0c0c0, #b0b0b0)' },
    { id: '4', title: 'Mobile App', category: 'design', image: 'linear-gradient(135deg, #b0b0b0, #a0a0a0)' },
    { id: '5', title: 'Marketing Campaign', category: 'branding', image: 'linear-gradient(135deg, #a0a0a0, #909090)' },
    { id: '6', title: 'Digital Strategy', category: 'web', image: 'linear-gradient(135deg, #909090, #808080)' }
  ];

  const categories = ['all', 'branding', 'web', 'design'];
  const filtered = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.92, filter: 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        delay: i * 0.12,
        ease: motionConfig.easing.smooth,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(4px)',
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="portfolio" className="fold portfolio" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span className="section-label" variants={fadeInUp}>Portfolio</motion.span>
          <motion.h2 variants={fadeInUp}>Selected work</motion.h2>
          <motion.p className="section-subtitle" variants={fadeInUp}>
            A showcase of recent projects and collaborations
          </motion.p>
        </motion.div>

        <motion.div 
          className="filter-pills"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: '0 6px 20px rgba(99, 102, 241, 0.2)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                className={`portfolio-card ${selectedItem === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                custom={index}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariant}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                  transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <motion.div 
                  className="portfolio-image grayscale" 
                  style={{ background: item.image }}
                  whileHover={{
                    scale: 1.08,
                    filter: 'grayscale(0%)',
                    transition: { duration: 0.45 }
                  }}
                />
                <motion.div 
                  className="portfolio-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <motion.h4
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p 
                      className="category-tag"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.category}
                    </motion.p>
                    <motion.a 
                      href="#" 
                      className="view-link"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1, x: 4 }}
                      transition={{ delay: 0.15 }}
                    >
                      View →
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
