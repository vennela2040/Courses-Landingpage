import React from 'react';
import './SkillsSection.css';
import frontendPDF from '../assets/frontend.pdf';
import backendPDF from '../assets/backend.pdf';

const SkillsSection = () => {
  const handleViewMore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2>Front End</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
        </ul>
        <button 
          className="view-more" 
          onClick={() => handleViewMore(frontendPDF)}
        >
          View more &gt;&gt;
        </button>
      </div>
      <div className="skills-section">
        <h2>Back End</h2>
        <ul>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Apache</li>
          <li>APIs</li>
        </ul>
        <button 
          className="view-more" 
          onClick={() => handleViewMore(backendPDF)}
        >
          View more &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
