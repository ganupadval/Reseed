import React from 'react';

const StarRating = ({ avg_rating }) => {
  const rating = Math.round(avg_rating * 2) / 2; // round to nearest 0.5
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<i key={i} className="fa fa-star-half-o text-warning"></i>);
    } else {
      stars.push(<i key={i} className="fa fa-star-o text-warning"></i>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
