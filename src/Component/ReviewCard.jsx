import React from "react";

const ReviewCard = ({ review, deleteReview }) => {
  const {
    email,
    image,
    name,
    rating_point,
    review_comment,
    review_date,
    subject_category,
    scholarship_id,
    scholarship_name,
    university_name,
  } = review;

  const formattedDate = new Date(review_date).toLocaleDateString(); // Example of date formatting

  return (
    <div>
      <div className="card bg-base-100 h-[650px] border-2 w-70  border-indigo-200 grow">
        <figure className="h-[200px]">
          <img className="w-[100px] mt-4" src={image} alt="Reviewer Image" />
        </figure>
        <div className="card-body">
          <p>
            <span className="font-semibold">University Name </span>:{" "}
            {university_name}
          </p>
          <p>
            <span className="font-semibold">Subject Category </span>:{" "}
            {subject_category}
          </p>
          <p>
            <span className="font-semibold">Reviewer name </span>: {name}
          </p>
          <p>
            <span className="font-semibold">Review date </span>: {formattedDate}
          </p>
          <p>
            <span className="font-semibold">Rating point</span>: {rating_point}
          </p>
          <p>
            <span className="font-semibold">Reviewer Comments </span>:{" "}
            {review_comment}
          </p>
          <div className="card-actions justify-end mt-5">
            <button
              className="btn btn-primary"
              onClick={() => deleteReview(review._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
