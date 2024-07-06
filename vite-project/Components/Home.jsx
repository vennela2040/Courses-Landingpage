import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-text">
          <h1>TECHQUIXOR</h1>
          <h1>certified <span>Full Stack Development Course </span>with Internship Oppurtunity.</h1>
          <h3>Join the 3 months course right now !</h3>
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

      <div className="course-info-section">
        <div className="course-info">
          <div className="info-item">
            <h3>Duration</h3>
            <p>3 Months (Weekdays) / 5 Months (Weekends)</p>
          </div>
          <div className="info-item">
            <h3>Format</h3>
            <p>Online</p>
          </div>
          <div className="info-item">
            <h3>Course</h3>
            <p>Live Online Classes + Lifetime access to Recorded Videos</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About Techquixor’s Full Stack Development Course</h2>
        <p>Our IIT-M Pravartak Certified Full Stack Development Course with AI Tools offers a pinnacle of real-time learning and expert mentorship. Harness our AI-powered platforms for round-the-clock project guidance and customized interview preparation. From exciting hackathons to insightful webinars and a supportive community, this course offers it all, with learning options in Tamil, Kannada, Hindi, and English. Step into the Full-stack development industry with confidence and a network of industry leaders to back you.</p>
      </div>
    </div>
  );
};

export default Home;
