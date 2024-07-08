// Syllabus.jsx

import React from 'react';
import './Syllabus.css';
import htmlLogo from '../assets/html5.png';
import cssLogo from '../assets/css3.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import syllabusPdf from '../assets/syllabus.pdf';

const Syllabus = () => {
    return (
        <div className="syllabus-container">
            <h2 className="syllabus-title">Syllabus</h2>
            <div className="syllabus-content">
                <div className="syllabus-items">
                    <div className="syllabus-item">
                        <img src={htmlLogo} alt="HTML5" />
                    </div>
                    <div className="syllabus-item">
                        <img src={cssLogo} alt="CSS3" />
                    </div>
                    <div className="syllabus-item">
                        <img src={tailwindLogo} alt="Tailwind CSS" />
                    </div>
                    <div className="syllabus-item">
                        <img src={jsLogo} alt="JavaScript" />
                    </div>
                    <div className="syllabus-item">
                        <img src={reactLogo} alt="React" />
                    </div>
                </div>
                <div className="view-more">
                    <a href={syllabusPdf} target="_blank" rel="noopener noreferrer">View More&gt;&gt;</a>
                </div>
            </div>
            <div className="pagination-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};

export default Syllabus;
