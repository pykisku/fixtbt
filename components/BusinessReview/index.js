import { useState, useEffect } from "react";
import axios from "axios";

const BusinessReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/getReviews?placeId=${placeId}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews");
      }
    };

    fetchReviews();
  }, [placeId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews &&
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.author_name}</h3>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
    </div>
  );
};

export default BusinessReviews;