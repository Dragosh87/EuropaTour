import React, { useState } from 'react';
import './barReview.css';

export function ReviewBar() {
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== '') {
      console.log('Revizuire trimisă:', reviewText);
      const reviewWithUserName = `${userName}: ${reviewText}`;
      setReviews((prevReviews) => [...prevReviews, reviewWithUserName]);
      setReviewText('');
    }
  };

  return (
    <div className="container">
      <input
        className="username"
        type="text"
        placeholder="Nume utilizator"
        value={userName}
        onChange={handleUserNameChange}
      />
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