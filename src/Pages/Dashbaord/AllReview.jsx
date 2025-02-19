import React, { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import useCommonAxios from "../../Hook/useCommonAxios";
import ReviewCard from "../../Component/ReviewCard";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const AllReview = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => {
      // console.log(res.data);
      setReviews(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex  justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const deleteReview = (reviewId) => {
    axiosCommon
      .delete(`/reviews/${reviewId}`)
      .then((response) => {
        setReviews(reviews.filter((review) => review._id !== reviewId)); // Update local state
        // console.log("Review deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
      });
  };

  return (
    <div className="mt-[ ] ">
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
