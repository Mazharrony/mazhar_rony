import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = ['SEO', 'Google Ads', 'Meta Ads', 'Content Strategy', 'Video Production', 'Shopify', 'WordPress', 'Figma', 'Photoshop', 'Brand Strategy'];

  return (
    <section id="about" className="fold about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left">
            <span className="section-label">About Me</span>
            <h2>Creative problem solver<br/>with <span className="accent">collaborative spirit</span></h2>
            <p>Results-driven Digital Marketing & Creative Specialist with expertise in website management, SEO, Google Ads, social media marketing, photography, and videography.</p>
          </div>

          <div className="about-right">
            <p>Skilled in developing, executing, and analyzing data-driven marketing strategies that increase brand visibility and drive measurable results. Experienced in managing multiple brands such as @corechamps, @musclerulz, @prosciencenutra and @jnknutrition, handling full digital operations from content design and video production to ad campaign optimization and web maintenance.</p>
            
            <div className="skills-pills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
