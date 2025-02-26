import React, { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FcViewDetails } from "react-icons/fc";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { VscFeedback } from "react-icons/vsc";
import Swal from "sweetalert2";

const AppliedScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const [applications, setApplications] = useState([]);
  const [displayApplication, setDisplayApplication] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [feedbackId, setFeedBackId] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure.get("/applications").then((res) => {
      // console.log(res.data);
      setApplications(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex  justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  const handleDetails = (id) => {
    document.getElementById("my_modal_3").showModal();
    axiosSecure.get(`applications/${id}`).then((res) => {
      // console.log(res.data);
      setDisplayApplication(res.data);
    });
  };
  const handleFeedback = (id) => {
    document.getElementById("my_modal_1").showModal();
    setFeedBackId(id);
  };
  const submitReview = () => {
    const updateData = {
      feedback: feedback,
    };
    axiosSecure
      .patch(`/applications/${feedbackId}`, updateData)
      .then((res) => console.log(res.data));
  };

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Cancel application!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Canceled!",
          text: "Application has been Canceled.",
          icon: "success",
        });
        const updateData = {
          status: "canceled",
        };
        axiosSecure
          .patch(`/application/${id}`, updateData)
          .then((res) => console.log(res.data));
      }
    });
  };
  return (
    <div>
      <SectionTitle heading={"All Applications"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Photo </th>
              <th>Applicant Name</th>
              <th>Application Status</th>
              <th>Detalis</th>
              <th>Feedback</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={application.applicant_photo} alt="" />
                  </div>
                </div>

                <td>{application.name}</td>
                <td>{application.application_fees}</td>
                <td>
                  <FcViewDetails
                    onClick={() => handleDetails(application._id)}
                    className="text-2xl  mx-auto cursor-pointer"
                  ></FcViewDetails>
                </td>
                <td>
                  <VscFeedback
                    onClick={() => handleFeedback(application._id)}
                    className="text-2xl  mx-auto cursor-pointer"
                  />
                </td>
                <td>
                  <TiDelete
                    className="text-2xl  mx-auto cursor-pointer"
                    onClick={() => handleCancel(application._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Applicant Form
      </button> */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-3/6 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <p className="py-5">
              <span className="font-semibold ">
                {" "}
                Applied university name : {displayApplication.university_name}
              </span>
            </p>
            <p className="py-5">
              <span className="font-semibold ">
                {" "}
                Applied Degree : {displayApplication.degree}
              </span>
            </p>
            <p className="py-5">
              <span className="font-semibold ">
                {" "}
                Applied Scholarship Category :{" "}
                {displayApplication.subject_category}
              </span>
            </p>
          </div>
        </div>
      </dialog>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4">Give Review!</h3>
          <div className="w-full flex justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={submitReview} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AppliedScholarship;
