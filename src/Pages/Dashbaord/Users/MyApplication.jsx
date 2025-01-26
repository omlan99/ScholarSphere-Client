import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import SectionTitle from "../../../Component/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useCommonAxios from "../../../Hook/useCommonAxios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyApplication = () => {
  const {user} = useAuth()
  const axiosCommon = useCommonAxios()
  const [myApplication, setMyApplication] = useState([])
    useEffect(() =>{
      if(user?.email){
        axiosCommon.get(`/applications?email=${user.email}`)
        .then(res => {
          console.log(res.data)
          setMyApplication(res.data)
        })
      }
    },[user?.email])
    console.log(myApplication)

    const handleDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete your application!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your application has been deleted.",
            icon: "success",
          });
          axiosCommon.delete(`/applications/${id}`)
          .then(res => {
            console.log(res.data)
            setMyApplication(myApplication.filter((application )=> application._id !== id))
          })
        }
      });
   
    }
  return (
    <div>
      <SectionTitle heading={"My Application"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th></th>
              <th>University Name</th>
              <th>University Address</th>
              <th>Application Feedback</th>
              <th>Subject Category</th>
              <th>Applied Degree</th>
              <th>Applied Fees</th>
              <th>Service Charge</th>
              <th>Application Status</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {

                          myApplication.map((application, index) =>   <tr>
                          <th>{index+1}</th>
                          <td>{application.university_name}</td>
                          <td>{application.university_address}</td>
                          <td></td>
                          <td>{application.subject_category}</td>
                          <td>{application.degree}</td>
                          <td>{application.scholarship_fees}</td> 
                          <td>{application.service_charge}</td>
                          <td></td>
                          {/* 
                          <td>{application.application_category}</td>
                          */}
                        
                          <td>
                            <Link to={`/scholarshipDetails/${application.scholarship_id}`}><FcViewDetails className="text-2xl  mx-auto"></FcViewDetails></Link>
                          </td>
                          <td>
                            <FaRegEdit className="text-2xl  mx-auto"></FaRegEdit>
                          </td>
                          <td>
                           <button onClick={() => handleDelete(application._id)}><TiDelete className="text-2xl  mx-auto" /></button> 
                          </td>
                        </tr>)
                        }



           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
