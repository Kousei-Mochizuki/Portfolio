import React, { useState, useEffect } from 'react';
import './Header.css'
// import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">kousei-mochizuki</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger">
            <span>aaaa</span>
            <span>aaaaaa</span>
            <span>aa</span>
          </div>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;