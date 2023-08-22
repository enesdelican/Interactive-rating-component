import React, { useState } from 'react';
import Card from '../components/Card.js';
import './Rating.css';
import starImg from '../images/icon-star.svg'

export default function Rating({rating, setRating, setShowThankYouPage}) {
    const [activeRatings, setActiveRatings] = useState({
        oneStars: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false
    });

    function handleRatingClick(rating) {
        setActiveRatings(prevActiveRatings => {
            return {...prevActiveRatings,[rating]: true}
        })
    }

    function handleSubmit(rating) {
        if (!rating) {
            return;
        }

        setShowThankYouPage(true);
    }


    return (
        <Card>
            <div className='img-container'>
                <img src={starImg} alt=''></img>
            </div>
            <h1 className='title'>How did we do?</h1>
            <p className='text'>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>
            <div className='rating'>
                <div className={activeRatings.oneStars ? "rating-container active" : "rating-container"} onClick={() => {handleRatingClick('oneStars'); setRating(1)}}>1</div>
                <div className={activeRatings.twoStars ? "rating-container active" : "rating-container"} onClick={() => {handleRatingClick('twoStars'); setRating(2)}}>2</div>
                <div className={activeRatings.threeStars ? "rating-container active" : "rating-container"} onClick={() => {handleRatingClick('threeStars'); setRating(3)}}>3</div>
                <div className={activeRatings.fourStars ? "rating-container active" : "rating-container"} onClick={() => {handleRatingClick('fourStars'); setRating(4)}}>4</div>
                <div className={activeRatings.fiveStars ? "rating-container active" : "rating-container"} onClick={() => {handleRatingClick('fiveStars'); setRating(5)}}>5</div>
            </div>
            <button className='submit' onClick={handleSubmit}>Submit</button>
        </Card>
    );
}