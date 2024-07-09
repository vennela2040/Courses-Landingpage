import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discount: false
  });

  const formRef = useRef(null);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7); // Example: 7 days from now

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);

      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/enroll', formData);
      if (response.status === 201) {
        alert('Enrollment successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          discount: false
        });
      } else {
        alert('Enrollment failed!');
      }
    } catch (error) {
      console.error('Error enrolling:', error);
      alert('Error enrolling, please try again later.');
    }
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-text">
          <h1>TECHQUIXOR</h1>
          <h1>certified <span>Full Stack Development Course</span> with Internship Opportunity.</h1>
          <h3>Join the 3 months course right now!</h3>
          <h3>Up-skill your knowledge in Full Stack Development with this program which consists of Live Online classes followed by internship opportunities in other companies.</h3>
        </div>
        <div className="hero-form" ref={formRef}>
          <h2>I’m Interested</h2>
          <form onSubmit={handleSubmit} id="myForm">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <label>
              <input type="checkbox" name="discount" checked={formData.discount} onChange={handleChange} />
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
          <div className="time-box">
            <span>{days}</span>
            <p>DAYS</p>
          </div>
          <div className="time-box">
            <span>{hours}</span>
            <p>HOURS</p>
          </div>
          <div className="time-box">
            <span>{minutes}</span>
            <p>MINS</p>
          </div>
          <div className="time-box">
            <span>{seconds}</span>
            <p>SECS</p>
          </div>
        </div>
        <button onClick={scrollToForm}>ENROLL NOW</button>
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
        <h2 className='centered_h2'>About Techquixor’s Full Stack Development Course</h2>
        <p>TechQuixor is offering a certified Full Stack Development course where anyone can join and enhance their skills in the Web Technologies. The course offers a real-time learning with skilled mentors and a supportive community with learning options in English and Telugu. So join the course and step into the Full stack world, mastering the art in just 3 months.</p>
      </div>
    </div>
  );
};

export default Home;
