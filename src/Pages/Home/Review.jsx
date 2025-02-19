import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => {
      // console.log(res.data);
      setReviews(res.data);
    });
  }, []);
  const slicedReview = reviews.slice(0, 3);
  console.log(slicedReview);
  return (
    <div className="mb-[100px]">
          <h2 className="font-bold text-4xl text-center pb-10">Student's Review </h2>
      <div className="grid lg:grid-cols-3 gap-5 ">
        {slicedReview.map((review, index) => (
          <div key={index} className="">
            <div class="text-center rounded-2xl border p-5 shadow-xl h-[350px] ">
              <div className="h-[100px] w-[100px] flex justify-center items-center overflow-hidden mx-auto rounded-full">
                <img
                  className="w-full h-full object-cover"
                  src={review.image}
                  alt="photo"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="font-semibold text-2xl">{review.name}</h2>
                <p className="py-2">{review.review_comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
