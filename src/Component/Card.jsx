import React from "react";
import { Link } from "react-router-dom";

const Card = ({ scholarship }) => {
  const {
    _id,
    scholarship_name,
    university_name,
    university_image,
    university_country,
    scholarship_category,
    degree,
    application_fees,
    service_charge,
    application_deadline,
  } = scholarship;

  return (
    <div>
      <div className="card bg-base-100 h-[650px]  border-2 w-80 xl:w-96 border-indigo-200 grow">
        <figure className="h-[200px] bg-secondary ">
          <img
            className="w-[100px] mt-4"
            src={university_image}
            alt={`${university_name} logo`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{university_name}</h2>
          <p>
            <span className="font-semibold">Country </span> {university_country}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Subject </span> : {scholarship_name}
          </p>

          <p>
            {" "}
            <span className="font-semibold">Category </span> :{" "}
            {scholarship_category}
          </p>

          <p>
            {" "}
            <span className="font-semibold">Application Deadline </span> :{" "}
            {application_deadline}
          </p>

          <p>
            {" "}
            <span className="font-semibold">Application Fees</span> :{" "}
            {application_fees}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Service Charge </span> :{" "}
            {service_charge}
          </p>

          <div className="card-actions justify-end mt-5">
            <Link to={`/scholarshipDetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
