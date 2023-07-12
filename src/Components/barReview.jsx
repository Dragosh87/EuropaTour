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
        <svg width="167" height="162" viewBox="0 0 167 162" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "multiply" }} filter="url(#filter0_d_0_1)">
            <path d="M161 2L82 79" stroke="#BF9270" strokeOpacity="0.5" shapeRendering="crispEdges" />
          </g>
          <g style={{ mixBlendMode: "multiply" }} filter="url(#filter1_d_0_1)">
            <path d="M163 0L82.3015 154L81.8594 79.3962L4 78.5555L163 0Z" fill="#F6EBE5" />
            <path d="M8.19019 77.6007L160.688 2.25768L83.2777 149.983L82.8594 79.3903L82.8536 78.4069L81.8702 78.3962L8.19019 77.6007Z" stroke="#BF9270" strokeWidth="2" />
          </g>
          <defs>
            <filter id="filter0_d_0_1" x="77.651" y="1.64197" width="87.698" height="85.7161" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
            </filter>
            <filter id="filter1_d_0_1" x="0" y="0" width="167" height="162" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
            </filter>
          </defs>
        </svg>
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
