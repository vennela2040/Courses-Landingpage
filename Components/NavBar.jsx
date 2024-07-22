import React, { useState } from 'react';
import './NavBar.css';
import logo from '../images/logo.png';
import name from '../images/name.png';

const NavBar = ({ onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
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
        <li className="navbar-item"><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
        <li className="navbar-item"><a href="#programOverview" onClick={() => handleNavLinkClick('programOverview')}>Program Overview</a></li>
        <li className="navbar-item"><a href="#syllabus" onClick={() => handleNavLinkClick('syllabus')}>Syllabus</a></li>
        <li className="navbar-item"><a href="#skillsSection" onClick={() => handleNavLinkClick('skillsSection')}>Skills</a></li>
        <li className="navbar-item"><a href="#instructorsSlider" onClick={() => handleNavLinkClick('instructorsSlider')}>Instructors</a></li>
        <li className="navbar-item"><a href="#review" onClick={() => handleNavLinkClick('review')}>Reviews</a></li>
        <li className="navbar-item"><a href="#fee" onClick={() => handleNavLinkClick('fee')}>Fee</a></li>
        <li className="navbar-item"><a href="#infoSection" onClick={() => handleNavLinkClick('infoSection')}>Info</a></li>
        <li className="navbar-item"><a href="#footer" onClick={() => handleNavLinkClick('footer')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
