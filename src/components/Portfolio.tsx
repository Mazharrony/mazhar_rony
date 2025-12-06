import React, { useState } from 'react';
import './Portfolio.css';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
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

  return (
    <section id="portfolio" className="fold portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2>Selected work</h2>
          <p className="section-subtitle">A showcase of recent projects and collaborations</p>
        </div>

        <div className="filter-pills">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-3">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`portfolio-card ${selectedItem === item.id ? 'selected' : ''}`}
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            >
              <div className="portfolio-image grayscale" style={{ background: item.image }}></div>
              <div className="portfolio-overlay">
                <div>
                  <h4>{item.title}</h4>
                  <p className="category-tag">{item.category}</p>
                  <a href="#" className="view-link">View →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
