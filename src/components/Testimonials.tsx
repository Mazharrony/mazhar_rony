import React from 'react';
import './Testimonials.css';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
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

  return (
    <section className="fold testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What happy clients say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <div className="testimonial-quote">"{testimonial.quote}"</div>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
