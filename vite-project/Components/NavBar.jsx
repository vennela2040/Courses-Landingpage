import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path_to_logo" alt="TechQuixor" />
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
