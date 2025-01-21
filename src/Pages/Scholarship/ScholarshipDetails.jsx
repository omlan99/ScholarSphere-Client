import React, { useEffect, useState } from "react";
import HelmetCompo from "../../Component/HelmetCompo";
import { Link, useParams } from "react-router-dom";
import useCommonAxios from "../../Hook/useCommonAxios";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarship, setScholarShip] = useState({});
  const axiosCommon = useCommonAxios();
  useEffect(() => {
    axiosCommon.get(`/scholarship/${id}`).then((res) => {
      setScholarShip(res.data);
    });
  }, [id]);
  console.log(scholarship);
  const location = scholarship.university_name
  console.log(location)
  console.log(id);

  return (
    <div>
      <HelmetCompo pageName={"Details"}></HelmetCompo>
      <div className="flex items-center gap-5">
        <img className="w-[200px]" src={scholarship.university_image} alt="" />
        <div className="p-10 w-4/5">
          <p> <span className="font-semibold capitalize"> University Name</span> : {scholarship.university_name}</p>
          {/* <p>{scholarship.university_location.map((item, index) =><p key={index}>{item}</p>)}</p> */}
          {/* <p>Location : {scholarship.university_location.city}, {scholarship.university_location.country}</p> */}
          <p>
            <span className="font-semibold capitalize">
              application deadline
            </span>{" "}
            : {scholarship.application_deadline}
          </p>
          <p>
            <span className="font-semibold capitalize">application fees</span> :{" "}
            {scholarship.application_fees}
          </p>
          <p>
            <span className="font-semibold capitalize">post date</span> :{" "}
            {scholarship.post_date}
          </p>
          <p>
            <span className="font-semibold capitalize">
              scholarship category
            </span>{" "}
            : {scholarship.scholarship_category}
          </p>
          <p>
            <span className="font-semibold capitalize">
              scholarship description
            </span>{" "}
            : {scholarship.scholarship_description}
          </p>
          <p>
            <span className="font-semibold capitalize">service charge</span> :{" "}
            {scholarship.service_charge}
          </p>
          <p>
            <span className="font-semibold capitalize">stipend</span> :{" "}
            {scholarship.stipend}
          </p>
          <p>
            <span className="font-semibold capitalize">subject name</span> :{" "}
            {scholarship.subject_name}
          </p>
         <div>
         <Link to={`/payment/${scholarship.application_fees}`}><button className="btn btn-primary ml-0 mt-5">Apply Scholarship</button></Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
