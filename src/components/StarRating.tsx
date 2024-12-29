import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  // Generate star icons dynamically based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      // Fully filled star
      return <FaStar key={index} className="text-yellow-500" />;
    } else if (rating >= starValue - 0.5) {
      // Half-filled star
      return <FaStarHalfAlt key={index} className="text-yellow-500" />;
    } else {
      // Empty star
      return <FaRegStar key={index} className="text-gray-300" />;
    }
  });

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
