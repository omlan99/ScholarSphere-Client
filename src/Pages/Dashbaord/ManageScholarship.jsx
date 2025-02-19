import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { FcViewDetails } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import useScholarship from "../../Hook/useScholarship";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";

const ManageScholarship = () => {
  const axiosCommon = useCommonAxios();
  const { user } = useAuth();
  // const [scholarships, refetch] = useScholarship("");
  const [scholarships, setScholarships] = useState([]);
  const [editScholarship, setEditScholarship] = useState({});
  const [loading, setLoading] = useState(true);
  
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      posted_date: editScholarship.posted_date,
      scholarship_name: editScholarship.scholarship_name,
      university_name: editScholarship.university_name,
      // university_image: images.data.data.display_url,
      university_country: editScholarship.university_country,
      university_city: editScholarship.university_city,
      university_world_rank: editScholarship.university_world_rank,
      scholarship_category: editScholarship.scholarship_category,
      subject_category: editScholarship.subject_category,
      degree: editScholarship.degree,
      tuition_fee: parseFloat(editScholarship.tuition_fee),
      application_fees: parseFloat(editScholarship.application_fees),
      service_charge: parseFloat(editScholarship.service_charge),
      application_deadline: editScholarship.application_deadline,
      stipend: parseFloat(editScholarship.stipend),
      email: user?.email,
      role: user?.role || "",
    },
  });
  useEffect(() => {
    axiosSecure.get("scholarship").then((res) => {
      setScholarships(res.data);
      setLoading(false)
    });
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex  justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
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
              title: "Delete!",
              text: "Scholarship has been Deleted.",
              icon: "success",
            });

            setScholarships(
              scholarships.filter((scholarship) => scholarship._id !== id)
            );
          }
        });
      }
    });
  };
  const onSubmit = (data) => {
    document.getElementById('my_modal_3').close()
  };
  const handleEdit = (id) => {
    document.getElementById('my_modal_3').showModal()
    axiosSecure.get(`scholarship/${id}`).then((res) => {
      setEditScholarship(res.data);
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
                  <Link to={`/scholarshipDetails/${scholarship._id}`}>
                    <FcViewDetails className="text-2xl  mx-auto"></FcViewDetails>
                  </Link>
                </td>
                <td>
                  <FaRegEdit
                    onClick={() => handleEdit(scholarship._id)}
                    className="text-2xl  mx-auto cursor-pointer"
                  ></FaRegEdit>
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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
     
     
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        <div>
        <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-3">
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Scholarship Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Scholarship Name"
                    className="input input-bordered max-w-sm"
                    {...register("scholarship_name", { required: true })}
                  />
                  {errors.scholarship_name && (
                    <p className="text-red-600">This Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">University Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="University Name"
                    className="input input-bordered max-w-sm"
                    {...register("university_name", { required: true })}
                  />
                  {errors.university_name && (
                    <p className="text-red-600">This Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">University Image *</span>
                  </label>
                  {/* <input type="file" className=" max-w-xs" /> */}
                  <input
                    type="file"
                    placeholder="University Image"
                    className="file-input w-full"
                    {...register("university_image", { required: true })}
                  />
                  {errors.university_image && (
                    <p className="text-red-600">This Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">University Country *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Country Name"
                    className="input input-bordered"
                    {...register("university_country", { required: true })}
                  />
                  {errors.university_country && (
                    <p className="text-red-600">This Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">University City *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="City Name"
                    className="input input-bordered"
                    {...register("university_city", { required: true })}
                  />
                  {errors.university_city && (
                    <p className="text-red-600">This Field is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">University World Rank </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Rank"
                    className="input input-bordered"
                    {...register("university_world_rank")}
                  />
                </div>{" "}
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Scholarship Category *</span>
                  </label>
                  <select
                    defaultValue={""}
                    className="select select-bordered max-w-sm "
                    {...register("scholarship_category", {
                      required: "This field is required.",
                    })}
                  >
                    <option disabled value="">
                      Scholarship Category
                    </option>
                    <option value="full-fund">Full-Fund</option>
                    <option value="partial">Partial</option>
                    <option value="self-fund">Self-Fund</option>
                  </select>
                  {errors.scholarship_category && (
                    <p className="text-red-600">
                      {errors.scholarship_category.message}
                    </p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Subject Category *</span>
                  </label>
                  <select
                    defaultValue={""}
                    className="select select-bordered max-w-sm "
                    {...register("subject_category", {
                      required: "This field is required.",
                    })}
                  >
                    <option disabled value="">
                      Subject Category
                    </option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                  {errors.subject_category && (
                    <p className="text-red-600">
                      {errors.subject_category.message}
                    </p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Degree</span>
                  </label>

                  <select
                    defaultValue={"Degree Name"}
                    className="select select-bordered max-w-sm "
                    {...register("degree", {
                      required: "This field is required.",
                    })}
                  >
                    <option disabled value="Degree Name">
                      Degree Name
                    </option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                  </select>
                  {errors.degree && (
                    <p className="text-red-600">{errors.degree.message}</p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Tuition Fees</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Tuition Fees"
                    className="input input-bordered max-w-sm"
                    {...register("tuition_fee")}
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Application Fees *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Application Fees"
                    className="input input-bordered max-w-sm"
                    {...register("application_fees", { required: true })}
                  />
                  {errors.application_fees && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Stipend</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Deadline"
                    className="input input-bordered max-w-sm"
                    {...register("stipend")}
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Service Charge *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Service Charge"
                    className="input input-bordered max-w-sm"
                    {...register("service_charge", { required: true })}
                  />
                  {errors.service_charge && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Application Deadline *</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Deadline"
                    className="input input-bordered max-w-sm"
                    {...register("application_deadline", { required: true })}
                  />
                  {errors.application_deadline && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Scholarship Post Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Post Date"
                    className="input input-bordered max-w-sm"
                    {...register("posted_date", { required: true })}
                    readOnly
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered max-w-sm"
                    // {...register("email", { required: true })}
                    defaultValue={user?.email}
                    disabled
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </form>
        </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageScholarship;
