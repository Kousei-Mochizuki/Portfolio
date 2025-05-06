import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">GAMER<span className="text-gradient">DEV</span></span>
            </div>
            <p className="footer-tagline">Creating immersive gaming experiences</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Navigation</h3>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-credit">
            2025 kousei-mochizuki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;