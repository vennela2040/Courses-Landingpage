import React from 'react';
import './NavBar.css';
import logo from '../images/logo.png';
import name from '../images/name.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="TechQuixor" />
        <img src={name} alt="TechQuixor" />
      </div>
      <ul className="navbar-links">
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
