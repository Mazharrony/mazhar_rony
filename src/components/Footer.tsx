import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Mazhar Roni</h4>
            <p>Digital Marketing & Creative Specialist</p>
          </div>

          <div className="footer-section">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Product Design</a></li>
              <li><a href="#">Brand Identity</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Strategy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@meetmazhar.site">hello@meetmazhar.site</a></li>
              <li><a href="tel:+971507217156">+971 50 721 7156</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Mazhar Roni. Currently in Dubai, UAE | www.meetmazhar.site</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
