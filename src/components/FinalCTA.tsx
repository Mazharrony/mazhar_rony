import React from 'react';
import './FinalCTA.css';

const FinalCTA: React.FC = () => {
  return (
    <section className="fold final-cta">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-images">
            <div className="cta-image-card grayscale" style={{ background: 'linear-gradient(135deg, #e0e0e0, #d0d0d0)' }}></div>
            <div className="cta-image-card grayscale" style={{ background: 'linear-gradient(135deg, #d0d0d0, #c0c0c0)' }}></div>
            <div className="cta-image-card grayscale" style={{ background: 'linear-gradient(135deg, #c0c0c0, #b0b0b0)' }}></div>
            <div className="cta-image-card grayscale" style={{ background: 'linear-gradient(135deg, #b0b0b0, #a0a0a0)' }}></div>
          </div>

          <div className="cta-content">
            <h2>Because your project<br/>deserves the best,<br/>always</h2>
            <p>Let's work together to create something extraordinary. Get in touch and let's discuss your project.</p>
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
