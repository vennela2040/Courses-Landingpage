import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="contact-us">
      <h2>Still have Queries? Contact us</h2>
      <div className="contact-details">
        <div className="contact-method">
          <i className="fab fa-linkedin"></i>
          <span>@TechQuixor</span>
        </div>
        <p>We will reply to you in the next 24 working hours.</p>
        <p>
          You can also reach out to us at &gt;&gt; <br/>techquixor@gmail.com<br/>+91 7095073538
        </p>
      </div>
    </div>
  );
};

export default Footer