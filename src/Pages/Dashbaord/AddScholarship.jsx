import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import useAuth from "../../Hook/useAuth";
import useCommonAxios from "../../Hook/useCommonAxios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddScholarship = () => {
  const { user } = useAuth();
  // const axiosCommon = useCommonAxios();
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      posted_date: new Date().toISOString().split("T")[0], // Set today's date in YYYY-MM-DD format
    },
  });
  const onSubmit = async (data) => {
    const imageFile = { image: data.university_image[0] };

    const images = await axiosCommon.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(images.data);
    if (images.data.success) {
      const scholarshipData = {
        posted_date: data.posted_date,
        scholarship_name: data.scholarship_name,
        university_name: data.university_name,
        university_image: images.data.data.display_url,
        university_country: data.university_country,
        university_city: data.university_city,
        university_world_rank: data.university_world_rank,
        scholarship_category: data.scholarship_category,
        subject_category: data.subject_category,
        degree: data.degree,
        tuition_fee: parseFloat(data.tuition_fee),
        application_fees: parseFloat(data.application_fees),
        service_charge: parseFloat(data.service_charge),
        application_deadline: data.application_deadline,
        stipend: parseFloat(data.stipend),
        email: user.email,
        role: user?.role || "",
      };
      // console.log(scholarshipData);
      axiosSecure.post("/scholarship", scholarshipData).then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Scholarship has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      });
    }
  };
  return (
    <div>
      <SectionTitle heading={"Scholarship Form"}></SectionTitle>
      <div className="card bg-base-100 w-full  shrink-0 ">
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
                {...register("degree", { required: "This field is required." })}
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScholarship;
