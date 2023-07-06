import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import axios from "axios";

const TestimonialStyleOne = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedReview, setExpandedReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/getReviews`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews");
      }
    };

    fetchReviews();
  }, []);

  const toggleReadMore = (index) => {
    if (expandedReview === index) {
      setExpandedReview(null);
    } else {
      setExpandedReview(index);
    }
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <li key={i}>
          <i className="bx bxs-star"></i>
        </li>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="client-area c-bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Testimonials</span>
            <h2>What Our Client’s Say</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="client-slide"
          >
            {reviews &&
              reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="single-client">
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                    />

                    <p>
                      {expandedReview === index || review.text.length <= 250 ? (
                        review.text
                      ) : (
                        <>
                          {review.text.substring(0, 300)}...
                          <button onClick={() => toggleReadMore(index)}>
                            Read more
                          </button>
                        </>
                      )}
                    </p>

                    <ul>{renderStars(review.rating)}</ul>

                    <h3>{review.author_name}</h3>
                    <span>{review.relative_time_description}</span>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleOne;
