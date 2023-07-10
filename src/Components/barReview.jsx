import React, { useState } from 'react';
import './barReview.css';

export function ReviewBar() {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== '') {
      console.log('Revizuire trimisă:', reviewText);
      // Adaugă recenzia în lista de recenzii
      setReviews((prevReviews) => [...prevReviews, reviewText]);
      setReviewText('');
    }
  };

  return (
    <div className="container">
      <textarea
        className="review"
        placeholder="Adaugă un comentariu..."
        value={reviewText}
        onChange={handleReviewChange}
      ></textarea>
      <button className="submit-button" onClick={handleReviewSubmit}>
        Trimiteti
      </button>
      <div className="review-list">
        <h2>Recenzii</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
