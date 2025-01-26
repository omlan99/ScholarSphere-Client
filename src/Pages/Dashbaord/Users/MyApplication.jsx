import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import SectionTitle from "../../../Component/SectionTitle";
import useAuth from "../../../Hook/useAuth";
import useCommonAxios from "../../../Hook/useCommonAxios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { MdReviews } from "react-icons/md";

const MyApplication = () => {
  const { user } = useAuth();
  const axiosCommon = useCommonAxios();
  const [myApplication, setMyApplication] = useState([]);
  const [scholarship,setScholarship] = useState()
  useEffect(() => {
    if (user?.email) {
      axiosCommon.get(`/applications?email=${user.email}`).then((res) => {
        console.log(res.data);
        setMyApplication(res.data);
      });
    }
  }, [user?.email]);
  console.log(myApplication);

  const handleDelete = (id) => {
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
        axiosCommon.delete(`/applications/${id}`).then((res) => {
          console.log(res.data);
          setMyApplication(
            myApplication.filter((application) => application._id !== id)
          );
        });
      }
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const additionalData = {
      scholarship_name: scholarship.scholarship_name,
      university_name: scholarship.university_name,
      subject_category : scholarship.subject_category,
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
      scholarship_id: scholarship._id,
      ...data,
    };
    axiosCommon.post("/reviews", additionalData).then((res) => {
      console.log(res.data);
      document.getElementById("my_modal_3").close();
    });
  };
  const handleEdit = () => {
    console.log('Edit CLicked')
  };

  const handleReview = (id) => {
    document.getElementById("my_modal_3").showModal()
    axiosCommon.get(`/scholarship/${id}`)
    .then(res => {
      console.log(res.data)
      setScholarship(res.data)
    })
  };
  return (
    <div>
      <SectionTitle heading={"My Application"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>
                University <br /> Name
              </th>
              <th>
                University <br />
                Address
              </th>
              <th> Feedback</th>
              <th>Category</th>
              <th>Degree</th>
              <th>Fees</th>
              <th>
                Service <br />
                Charge
              </th>
              <th>
                Add <br /> Review
              </th>
              <th>Status</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myApplication.map((application, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{application.university_name}</td>
                <td>{application.university_address}</td>
                <td></td>
                <td>{application.subject_category}</td>
                <td>{application.degree}</td>
                <td>{application.scholarship_fees}</td>
                <td>{application.service_charge}</td>
                <td></td>
                <td>
                  <button onClick={() => handleReview(application.scholarship_id)}>
                    <MdReviews className="text-2xl  mx-auto" />
                  </button>
                </td>

                <td>
                  <Link
                    to={`/scholarshipDetails/${application.scholarship_id}`}
                  >
                    <FcViewDetails className="text-2xl  mx-auto"></FcViewDetails>
                  </Link>
                </td>
                <td>
                  <button  onClick={() => handleEdit()}>

                  <FaRegEdit className="text-2xl  mx-auto"></FaRegEdit>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(application._id)}>
                    <TiDelete className="text-2xl  mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center py-3">Add Review</h3>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2">
              Rating Point
              <input
                {...register("rating_point")}
                type="text"
                className="grow"
                placeholder=" Rating Point"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Review Comment
              <input
                {...register("review_comment")}
                type="text"
                className="grow"
                placeholder="Review Comment"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Review Date
              <input
                {...register("review_date")}
                type="text"
                className="grow"
                placeholder="Review Date"
              />
            </label>
            <button className="btn btn-wide btn-primary my-5" type="submit">
              Add Review
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyApplication;
