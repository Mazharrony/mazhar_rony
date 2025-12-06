import React from 'react';
import './Process.css';

const Process: React.FC = () => {
  const steps = [
    { number: '01', title: 'Discovery', description: 'Understanding your goals and audience' },
    { number: '02', title: 'Strategy', description: 'Planning the approach and creative direction' },
    { number: '03', title: 'Execution', description: 'Bringing the vision to life with precision' }
  ];

  return (
    <section className="fold process">
      <div className="container">
        <div className="process-inner">
          <div className="process-left">
            <h2>Professional<br/>Expertise &<br/>Experience</h2>
            <p>Comprehensive background in digital marketing, creative design, and brand management across high-growth brands and industries.</p>
            <button className="btn btn-primary">Contact me</button>
          </div>

          <div className="process-right">
            <div className="steps-container">
              {steps.map((step, index) => (
                <div key={index} className="step-card">
                  <div className="step-badge">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
