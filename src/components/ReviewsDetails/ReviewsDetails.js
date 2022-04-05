import React from "react";

const ReviewsDetails = (props) => {
    const {name, details, ratings} = props.rev;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Review: {details}</p>
      <p>
        <small>Ratings: {ratings}</small>
      </p>
    </div>
  );
};

export default ReviewsDetails;
