import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>
            <i className="fas fa-map-marker-alt"></i>
            21 Revolution Street<br />
            Paris, France
          </p>
          <p>
            <i className="fas fa-phone"></i>
            +1 555 123456
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
        <div className="about">
          <h4>About the company</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
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
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy; 2024 TechQuixor</p>
      </div>
    </footer>
  );
};

export default Footer;
