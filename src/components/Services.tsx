import React from 'react';
import './Services.css';

const Services: React.FC = () => {
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

  return (
    <section className="fold services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2>Marketing & Creative Skills</h2>
          <p className="section-subtitle">Full-spectrum digital marketing and creative expertise</p>
        </div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">{service.link} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
