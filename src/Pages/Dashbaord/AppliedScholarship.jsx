import React from "react";
import SectionTitle from "../../Component/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FcViewDetails } from "react-icons/fc";

const AppliedScholarship = () => {
  const handleDetails = () => {
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <div>
      <SectionTitle heading={"My Reviews"}></SectionTitle>
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
              <td></td>{" "}
              <td>
                <button>
                  <FcViewDetails
                    onClick={handleDetails}
                    className="text-2xl mx-auto"
                  ></FcViewDetails>
                </button>
              </td>
              <td>
                <FaRegEdit className="text-2xl mx-auto"></FaRegEdit>
              </td>
              <td>
                <TiDelete className="text-2xl mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Applicant Form
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-3/6 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form>
            <div>
              <p className="py-5">
                <span className="font-semibold ">
                  {" "}
                  Applied university name :
                </span>
              </p>
              <p className="py-5">
                <span className="font-semibold "> Applied Degree :</span>
              </p>
              <p className="py-5">
                <span className="font-semibold ">
                  {" "}
                  Applied Scholarship Category :
                </span>
              </p>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="btn text-sm/6 font-semibold text-gray-900"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AppliedScholarship;
