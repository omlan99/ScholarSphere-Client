import React, { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import useCommonAxios from "../../Hook/useCommonAxios";
import ReviewCard from "../../Component/ReviewCard";

const AllReview = () => {
  const axiosCommon = useCommonAxios();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosCommon.get("/reviews").then((res) => {
      console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  const deleteReview = (reviewId) => {
    axiosCommon
      .delete(`/reviews/${reviewId}`)
      .then((response) => {
        setReviews(reviews.filter((review) => review._id !== reviewId)); // Update local state
        console.log("Review deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
      });
  };

  return (
    <div>
      <div className="py-5">
        <SectionTitle heading={"All Reviews"}></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            deleteReview={deleteReview}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReview;
