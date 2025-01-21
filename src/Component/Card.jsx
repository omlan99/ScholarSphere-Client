import React from "react";
import { Link } from "react-router-dom";

const Card = ({ scholarship }) => {
  const {
    application_deadline,
    application_fees,
    post_date,
    scholarship_category,
    scholarship_description,
    service_charge, 
    stipend,
    subject_name,
    university_image,
    university_location,
    university_name,
  } = scholarship;


  return (
    <div>
      <div className="card bg-base-100 h-[650px]  border-2 w-80 xl:w-96 border-indigo-200 grow">
        <figure className="h-[200px]">
          <img
            className="w-[100px] mt-4"
            src={university_image}
            alt={`${university_name} logo`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{university_name}</h2>
          <p>
            {university_location.city}, {university_location.country}{" "}
          </p>
          <p> <span className="font-semibold">Subject </span> : {subject_name}</p>
          <p> <span className="font-semibold">Description </span>  : {scholarship_description}</p>
       
          <p> <span className="font-semibold">Category </span> : {scholarship_category}</p>
          <p> <span className="font-semibold">Post date </span> : {post_date}</p>
       
          <p> <span className="font-semibold">Application Deadline </span> : {application_deadline}</p>
    
         <p>  <span className="font-semibold">Application Fees</span> : {application_fees}</p>
         <p> <span className="font-semibold">Service Charge </span> : {service_charge}</p>

          <p>  <span className="font-semibold">Stipend</span> : {stipend}</p>
          <div className="card-actions justify-end mt-5">
            <Link>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
