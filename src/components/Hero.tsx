import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="fold hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <span className="section-label">Digital Marketing & Creative Specialist</span>
            <h1>Mazhar Roni</h1>
            <p>Results-driven Digital Marketing & Creative Specialist with expertise in social media strategy, content creation, video production, and campaign optimization across fitness, supplement, and e-commerce brands.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View my work</button>
              <button className="btn btn-secondary">Get in touch</button>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-container">
              <div className="hero-image grayscale"></div>
              <div className="floating-badge badge-1">
                <span>Design</span>
              </div>
              <div className="floating-badge badge-2">
                <span>Brand</span>
              </div>
              <div className="floating-badge badge-3">
                <span>Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
