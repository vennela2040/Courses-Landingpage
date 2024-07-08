import React, { useState } from 'react';
import './InfoSection.css';
import PropTypes from 'prop-types';

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

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

const InfoSection = () => {
  const faqs = [
    { 
      question: "I'm from a non-engineering background or new to programming. Can I take this course?", 
      answer: "Yes, you can. This course is designed to cater to individuals from all backgrounds. As long as you have a strong interest in learning Full Stack Development, you will be able to follow the course. Our instructors will start from the basics and gradually cover more advanced topics, ensuring that everyone can keep up regardless of their prior experience. Additionally, we provide extra support sessions for beginners to help them catch up with the pace of the course. The course will be conducted in Telugu, making it accessible to Telugu-speaking students."
    },
    { 
      question: "What is the duration of this course?", 
      answer: "The course will be completed in 3 months. This includes live online classes, practical assignments, and project work. Each week, you will have multiple sessions that cover different aspects of Full Stack Development, allowing you to steadily build your skills over the course duration. Our comprehensive curriculum is designed to make you industry-ready by the end of the program. The course language is Telugu, ensuring clear communication and understanding for Telugu-speaking students."
    },
    { 
      question: "What are the payment options?", 
      answer: "We offer several payment options to accommodate your needs. You can pay the full amount upfront, or opt for an installment plan. For detailed information regarding the payment options and plans, you may contact our support team at +91 7095073538. We also provide information on potential scholarships and discounts for eligible candidates. Our aim is to make the course accessible to as many students as possible. The course language is Telugu, which might also help in better understanding of payment procedures for Telugu-speaking students."
    },
    { 
      question: "What is meant by Full Stack Development Course?", 
      answer: "The Full Stack Development Course systematically covers the fundamental technologies essential for aspiring Full Stack Developers. It comprises five distinct segments: Frontend, Backend, Database, other essential technologies, and Debugging/version Control. By the end of the course, you will have a comprehensive understanding of how to develop, manage, and deploy full-fledged web applications. This holistic approach ensures that you are well-versed in both client-side and server-side development. The course is conducted in Telugu, making it easier for Telugu-speaking students to grasp the concepts."
    },
    { 
      question: "Will I get a refund after joining the Course?", 
      answer: "No, you will not be able to claim a refund once you've joined the course. We encourage you to thoroughly review the course details and ask any questions you may have before enrolling. Our support team is available to provide all the information you need to make an informed decision. We also offer a demo class to give you a better understanding of what to expect from the course. The course is conducted in Telugu, ensuring clear communication and understanding of the refund policy for Telugu-speaking students."
    }
  ];

  return (
    <div className="info-section">
      <div className="dates-section">
        <h2 className="section-title">Dates</h2>
        <p>Once you have registered, you will be informed about the test and course dates through email. Please ensure that your contact details are correct to receive timely updates.</p>
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
