import React, { useState } from 'react';
import './InfoSection.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {question}
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const InfoSection = () => {
  const faqs = [
    { question: "I'm from a non-engineering background or new to programming. Can I take this course?", answer: "Yes, you can, it's based on your interest." },
    { question: "What is the duration of this course?", answer: "The course will be completed in 3 Months" },
    { question: "What are the payment options?", answer: "For details regarding the payment, you may contact +91 7095073538." },
    { question: "What is meant by Full Stack Development Course?",answer:"The Full-stack Development Coutse systematically covers the fundamental technologies essential for aspiring Full Stack Developers, it comprises five distinct segments: Frontend, Backend, Database other essential technologies, and Debugging/version Control"},
    { question:"Will I get a refund after joining the Course",answer:"No, you will not be able to claim the refund once you've joined the course" }
  ];

  return (
    <div className="info-section">
      <div className="dates-section">
        <h2 className="section-title">Dates</h2>
        <p>Once you have registered, the dates about the test and the course will be informed to you soon through mail.</p>
      </div>

      <div className="more-info-section">
        <h2 className="section-title">More Info</h2>
        <div className="info-circles">
          <div className="info-circle">Interactive Sessions</div>
          <div className="info-circle">Quick Doubts Clearance</div>
          <div className="info-circle">Work on Live Projects</div>
        </div>
      </div>

      <div className="faq-section">
        <h2 className="section-title-2">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;