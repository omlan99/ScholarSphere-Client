import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { FcViewDetails } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useScholarship from "../../Hook/useScholarship";

const ManageScholarship = () => {
  const axiosCommon = useCommonAxios();
  const [scholarships, refetch] = useScholarship("");
  console.log(scholarships);
  const handleDelete = (id) => {
    axiosCommon.delete(`/scholarship/${id}`).then((res) => {
      if (res.data.deletedCount) {
        console.log(res.data);
        refetch();
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
              <th>Subject</th>
              <th>Subject Category</th>
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
                <td>{scholarship.subject_name}</td>
                <td>{scholarship.scholarship_category}</td>
                <td></td>
                <td>{scholarship.application_fees}</td>
                <td>
                  <FcViewDetails className="text-2xl  mx-auto"></FcViewDetails>
                </td>
                <td>
                  <FaRegEdit className="text-2xl  mx-auto"></FaRegEdit>
                </td>
                <td>
                  <TiDelete
                    className="text-2xl  mx-auto"
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
