import React from 'react';
import './Review.css'

const Review = (props) => {
    // console.log(props)
    const {name, details, ratings} = props.rev;
    return (
        <div className='review-design'>
            <h2>Name: {name}</h2>
            <p>Review: {details}</p>
            <p><small>Ratings: {ratings}</small></p>
        </div>
    );
};

export default Review;