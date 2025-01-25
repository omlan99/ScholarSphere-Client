import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import SectionTitle from "../../../Component/SectionTitle";

const MyApplication = () => {
  return (
    <div>
      <SectionTitle heading={"My Application"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/*              

•	University Address,
•	Application Feedback (feedback given by the moderator/admin)
•	,
•	Applied Degree,
•	Application Fees,
•	Service Charge,
•	Application Status (pending(By Default), processing, completed and if this application is canceled by the moderator it will show “Rejected” status),
•	Three Action buttons need to show the Details Button, Edit Button, Cancel  */}
              <th></th>
              <th>University Name</th>
              <th>University Address</th>
              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Service Charge</th>
              <th>Application Status</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* {
                          scholarships.map((scholarship, index) =>   <tr key={index}>
                            <th>{index+1}</th>
                            <td>{scholarship.university_name}</td>
                            <td>{scholarship.subject_name
                            }</td>
                            <td>{scholarship.scholarship_category}</td>
                            <td></td>
                            <td>{scholarship.application_fees}</td>
                            <td><FcViewDetails className='text-2xl'></FcViewDetails></td>
                            <td><FaRegEdit className='text-2xl'></FaRegEdit></td>
                            <td><TiDelete className='text-2xl' onClick={() => handleDelete(scholarship._id)} /></td>
                          </tr>)
                        } */}

            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <FcViewDetails className="text-2xl"></FcViewDetails>
              </td>
              <td>
                <FaRegEdit className="text-2xl"></FaRegEdit>
              </td>
              <td>
                <TiDelete className="text-2xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
