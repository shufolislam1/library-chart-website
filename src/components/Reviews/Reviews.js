import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            {
                reviews.map( rev => <ReviewsDetails
                key={rev.id}
                rev={rev}
                ></ReviewsDetails>)
            }
        </div>
    );
};

export default Reviews;