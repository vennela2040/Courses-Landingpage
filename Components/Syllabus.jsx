import React, { useState, useEffect, useRef } from 'react';
import './Syllabus.css';
import htmlLogo from '../assets/html5.png';
import cssLogo from '../assets/css3.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import nodeLogo from '../assets/node.png';
import expressLogo from '../assets/express.png';
import mongoLogo from '../assets/mongodb.png';
import sqlLogo from '../assets/sql.png';
import chatgptLogo from '../assets/chatgpt.png';

const Syllabus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const syllabusItems = [
    { img: htmlLogo, alt: 'HTML5', name: 'HTML5', description: 'Learn the basics of HTML5, the standard markup language for creating web pages.' },
    { img: cssLogo, alt: 'CSS3', name: 'CSS3', description: 'Master CSS3 to style and layout your web pages with precision.' },
    { img: tailwindLogo, alt: 'Tailwind CSS', name: 'Tailwind CSS', description: 'Use Tailwind CSS to rapidly build modern websites without ever leaving your HTML.' },
    { img: jsLogo, alt: 'JavaScript', name: 'JavaScript', description: 'Get proficient in JavaScript, the programming language of the Web.' },
    { img: reactLogo, alt: 'React', name: 'React', description: 'Learn React to build fast, interactive user interfaces for web applications.' },
    { img: nodeLogo, alt: 'NodeJS', name: 'NodeJS', description: 'Understand NodeJS to create scalable server-side applications.' },
    { img: expressLogo, alt: 'Express.js', name: 'Express.js', description: 'Learn Express.js for building robust web applications and services.' },
    { img: mongoLogo, alt: 'MongoDB', name: 'MongoDB', description: 'Master MongoDB, a NoSQL database for modern web applications.' },
    { img: sqlLogo, alt: 'SQL Database', name: 'SQL Database', description: 'Learn SQL to manage and manipulate relational databases.' },
    { img: chatgptLogo, alt: 'ChatGPT', name: 'ChatGPT', description: 'Explore ChatGPT, an advanced AI for conversational interactions.' }
  ];

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  const startSlider = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % syllabusItems.length);
    }, 3000); // Change slide every 3 seconds
  };

  const stopSlider = () => {
    clearInterval(slideInterval.current);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    stopSlider();
    startSlider();
  };

  return (
    <div className="syllabus-container">
      <h2 className="syllabus-title">Syllabus</h2>
      <div className="syllabus-content">
        <div className="syllabus-item">
          <img src={syllabusItems[currentSlide].img} alt={syllabusItems[currentSlide].alt} />
          <div className="syllabus-text">
            <h3>{syllabusItems[currentSlide].name}</h3>
            <p>{syllabusItems[currentSlide].description}</p>
          </div>
        </div>
      </div>
      <div className="pagination-dots">
        {syllabusItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
