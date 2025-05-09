import React, { useEffect, useState } from "react";
import HelmetCompo from "../../Component/HelmetCompo";
import { Link, useParams } from "react-router-dom";
import useCommonAxios from "../../Hook/useCommonAxios";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarship, setScholarShip] = useState({});
  // const axiosCommon = useCommonAxios();
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get(`/scholarship/${id}`).then((res) => {
      setScholarShip(res.data);
    });
  }, []);
  // console.log(scholarship);
  // console.log(id);


  return (
    <div>
      <HelmetCompo pageName={"Details"}></HelmetCompo>
      <div className="grid lg:grid-cols-3 items-center gap-5 my-[100px]">
        <div className=" p-5 flex justify-center">
        <img className="w-full object-contain" src={scholarship.university_image} alt="" />
        </div>
        <div className="p-10 w-4/5 col-span-2">
          <p>
            <span className="font-semibold capitalize">Scholarship name</span> :{" "}
            {scholarship.scholarship_name}
          </p>
          <p>
            {" "}
            <span className="font-semibold capitalize">
              {" "}
              University Name
            </span> : {scholarship.university_name}
          </p>
          <p>
            {" "}
            <span className="font-semibold capitalize">
              {" "}
              University City
            </span> : {scholarship.university_city}
          </p>
          <p>
            {" "}
            <span className="font-semibold capitalize">
              {" "}
              University Country
            </span>{" "}
            : {scholarship.university_country}
          </p>
          <p>
            {" "}
            <span className="font-semibold capitalize">
              {" "}
              University World Rank
            </span>{" "}
            : {scholarship.university_world_rank}
          </p>
          <p>
            <span className="font-semibold capitalize">
              application deadline
            </span>
            : {scholarship.application_deadline}
          </p>
          <p>
            <span className="font-semibold capitalize">application fees</span> :{" "}
            {scholarship.application_fees}
          </p>
          <p>
            <span className="font-semibold capitalize">Subject category</span> :{" "}
            {scholarship.subject_category}
          </p>
          <p>
            <span className="font-semibold capitalize">
              Scholarship category
            </span>{" "}
            : {scholarship.scholarship_category}
          </p>
          <p>
            <span className="font-semibold capitalize">service charge</span> :{" "}
            {scholarship.service_charge}
          </p>
          <p>
            <span className="font-semibold capitalize">Degree</span> :{" "}
            {scholarship.degree}
          </p>

          <div>
            <Link to={`/dashboard/payment/${scholarship._id}`}>
              <button className="btn btn-primary ml-0 mt-5">
                Apply Scholarship
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
