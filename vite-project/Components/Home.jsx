import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`September 1, ${new Date().getFullYear()}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="time-box">
        <span>{timeLeft[interval]}</span>
        <p>{interval.toUpperCase()}</p>
      </div>
    );
  });

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-text">
          <h1>TECHQUIXOR</h1>
          <h1>
            Certified <span>Full Stack Development Course</span> with Internship Opportunity.
          </h1>
          <h3>Join the 3 months course right now!</h3>
          <h3>
            Up-skill your knowledge in Full Stack Development with this program which consists of Live Online classes followed by internship opportunities in other companies.
          </h3>
        </div>
        <div className="hero-form">
          <h2>I’m Interested</h2>
          <form>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Phone" required />
            <label>
              <input type="checkbox" name="discount" />
              Do you have a discount coupon?
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="monsoon-sale">
        <p>Monsoon sale is Live on this Course 🌧️</p>
        <h3>Coupon code: MONSOONSALE</h3>
        <div className="timer">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <button>ENROLL NOW</button>
      </div>

      <div className="course-info-section">
        <div className="course-info">
          <div className="info-item">
            <h3>Duration</h3>
            <p>6 Months</p>
          </div>
          <div className="info-item">
            <h3>Format</h3>
            <p>Online</p>
          </div>
          <div className="info-item">
            <h3>Pricing</h3>
            <p>Depends on the score of Assignment Test</p>
          </div>
          <div className="info-item">
            <h3>Course</h3>
            <p>Live Online Classes</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About Techquixor’s Full Stack Development Course</h2>
        <p>
          TechQuixor is offering a certified Full Stack Development course where anyone can join and enhance their skills in the Web Technologies. The course offers a real-time learning with skilled mentors and a supportive community with learning options in English and Telugu.So join the course and step into the Full stack world, mastering the art in just 3 months.
        </p>
      </div>
    </div>
  );
};

export default Home;
