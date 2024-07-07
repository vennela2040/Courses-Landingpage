import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './InstructorsSlider.css'; // Add your custom styles here

const InstructorsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const instructors = [
    { name: 'Instructor 1', role: 'Role 1' },
    { name: 'Instructor 2', role: 'Role 2' },
    { name: 'Instructor 3', role: 'Role 3' },
    { name: 'Instructor 4', role: 'Role 4' },
    { name: 'Instructor 5', role: 'Role 5' },
    // Add more instructors as needed
  ];

  return (
    <div className="instructor-cards">
      <h2>Instructors</h2>
      <Slider {...settings}>
        {instructors.map((instructor, index) => (
          <div key={index} className="card">
            <div className="avatar"></div>
            <h3>{instructor.name}</h3>
            <p>{instructor.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstructorsSlider;
