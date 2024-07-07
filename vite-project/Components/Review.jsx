import React from 'react';
import './Review.css';
import html5Logo from '../assets/html5.png'; // Assuming you have the HTML5 logo image in your assets folder

const Review = () => {
  const reviews = [
    { id: 1, image:html5Logo,name: 'John Doe', review: 'This is an amazing service!' },
    { id: 2, image:html5Logo,name: 'Jane Smith', review: 'I had a great experience!' },
    { id: 3, image:html5Logo,name: 'Alice Johnson', review: 'Highly recommended!' },
  ];

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Reviews</h2>
      <p className="reviews-subtitle">Read the reviews from a few of our users.</p>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-image">
              <img src={review.image} alt="HTML5 Logo" className="html5-logo" />
            </div>
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
