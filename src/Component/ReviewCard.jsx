import React from "react";

const ReviewCard = () => {
//     •	Reviewed University Name,
// •	Subject Category,
// •	Reviewer image, 
// •	Reviewer name,
// •	Review date,
// •	Rating point,
// •	Reviewer Comments
// •	Delete Button

  return (
    <div>
      <div className="card bg-base-100 h-[650px]  border-2 w-80 xl:w-96 border-indigo-200 grow">
        <figure className="h-[200px]">
          <img
            className="w-[100px] mt-4"
            // src={university_image}
            // alt={`${university_name} logo`}
          />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{university_name}</h2> */}
    
          <p>
            {" "}
            <span className="font-semibold">Reviewer image </span> : Reviewer image
          </p>

          <p>
            {" "}
            <span className="font-semibold">Reviewer name </span> :{" "}
            Reviewer image
          </p>

          <p>
            {" "}
            <span className="font-semibold">Review date </span> :{" "}
            Reviewer image
          </p>

          <p>
            {" "}
            <span className="font-semibold">Rating point</span> :{" "}
            Reviewer image
          </p>
          <p>
            {" "}
            <span className="font-semibold">Reviewer Comments </span> :{" "}
            Reviewer image
          </p>

          <div className="card-actions justify-end mt-5">
            {/* <Link to={`/scholarshipDetails/${_id}`}> */}
              <button className="btn btn-primary">Delete</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
