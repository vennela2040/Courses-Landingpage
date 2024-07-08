import React from 'react';
import './Footer.css'; // Import your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/techquixor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/techquixor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/techquixor" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a> 
        </div>
        <div className="contact-info">
          <p>Still have queries? Contact us at techquixor@gmail.com or +91 7095073538</p>
          <p>We will reply to you in the next 24 working hours.</p>
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy; 2024 TechQuixor</p>
      </div>
    </footer>
  );
};

export default Footer;
