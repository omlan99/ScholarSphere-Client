import React from "react";

const Card = ({ scholarship }) => {
  const {
    application_deadline, application_fees, post_date, scholarship_category, scholarship_description, service_charge, stipend, subject_name, university_image, university_location, university_name,} = scholarship;

  console.log(scholarship);
  return (
    <div>
      <div className="card bg-base-100   border-2 sm:w-80 md:w-96  border-indigo-200 grow">
        <figure>
          <img
          className="w-[100px] mt-4"
            src={university_image}
            alt={`${university_name} logo`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{university_name}</h2>
  
            
          <p>{university_location.city}, {university_location.country} </p>
    
   
          <p></p>
           <p>Subject : {subject_name}</p> 
           <p>Description : {scholarship_description}</p>
    
          <p>Category : {scholarship_category}</p>
          <p>{scholarship_category}</p> 
          <p>Post date : {post_date}</p>
          <p>Application Deadline : {application_deadline}</p>
            <p>Application Fees : {application_fees}</p>
            <p>Service Charge : {service_charge}</p>
            <p>Stipend : {stipend}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
