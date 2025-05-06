import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Talk</h3>
            <p className="contact-text">
              Interested in working together or have a question about my projects?
              Drop me a message, and I'll get back to you as soon as possible!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <div className="contact-method-text">
                  <h4>Email</h4>
                  <p>contact@gamedevportfolio.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-method-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🌐</div>
                <div className="contact-method-text">
                  <h4>Socials</h4>
                  <div className="social-links">
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;