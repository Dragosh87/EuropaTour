import React from 'react';
import './barReview.css';

export function ReviewBar () {
    const handleReviewSubmit = () => {
        console.log('Revizuire trimisă!');
      };


    return (
    <div className='container'>
        <textarea className='review' placeholder="Adauga un comentariu..."></textarea>
        <button onClick={handleReviewSubmit}>Trimite</button>
    </div>
    )
};