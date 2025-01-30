import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { FcViewDetails } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useScholarship from "../../Hook/useScholarship";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManageScholarship = () => {
  const axiosCommon = useCommonAxios();
  // const [scholarships, refetch] = useScholarship("");
  const [scholarships, setScholarships] =useState([])
  const axiosSecure = useAxiosSecure()
  useEffect(() =>{
    axiosSecure('scholarship')
    .then(res => {
        setScholarships(res.data)
    })
  }, [])
  console.log(scholarships);
  const handleDelete = (id) => {
    axiosCommon.delete(`/scholarship/${id}`).then((res) => {
      if (res.data.deletedCount) {
        // console.log(res.data);
        Swal.fire({
              title: "Are you sure?",
              text: "You want to Delete Scholarship!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Canceled!",
                  text: "Scholarship has been Deleted.",
                  icon: "success",
                });
              
                setScholarships(scholarships.filter((scholarship) => scholarship._id !== id));
              }
            });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>University Name</th>
              <th>Scholarship Name</th>
              <th>Scholarship Category</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {scholarships.map((scholarship, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{scholarship.university_name}</td>
                <td>{scholarship.scholarship_name}</td>
                <td>{scholarship.subject_category}</td>
                <td>{scholarship.degree}</td>
                <td>{scholarship.application_fees}</td>
                <td>
                 <Link to={`/scholarshipDetails/${scholarship._id}`}><FcViewDetails className="text-2xl  mx-auto"></FcViewDetails></Link>
                </td>
                <td>
                  <FaRegEdit className="text-2xl  mx-auto"></FaRegEdit>
                </td>
                <td>
                  <TiDelete
                    className="text-2xl  mx-auto cursor-pointer"
                    onClick={() => handleDelete(scholarship._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ManageScholarship;
