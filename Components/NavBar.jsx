import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png';
import name from '../images/name.png';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TechQuixor" />
        <img src={name} alt="TechQuixor" />
      </div>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-mobile' : ''}`}>
        <li className="navbar-item"><a href="#overview">Overview</a></li>
        <li className="navbar-item"><a href="#syllabus">Syllabus</a></li>
        <li className="navbar-item"><a href="#certification">Certification</a></li>
        <li className="navbar-item"><a href="#placement-pricing">Placement & Pricing</a></li>
        <li className="navbar-item"><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;