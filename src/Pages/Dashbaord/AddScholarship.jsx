import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";

const AddScholarship = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle heading={"Scholarship Form"}></SectionTitle>
      <div className="card bg-base-100 w-full  shrink-0 ">
        <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-3">
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Scholarship Name</span>
            </label>
            <input
              type="text"
              placeholder="Scholarship Name"
              className="input input-bordered max-w-sm"
              {...register("scholarship_name", { required: true })}
            />
          </div>
  
       
            <div className="form-control">
              <label className="label">
                <span className="label-text">University Name</span>
              </label>
              <input
                type="text"
                placeholder="University Name"
                className="input input-bordered max-w-sm"
                {...register("university_name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University Image</span>
              </label>
              <input
                type="url"
                placeholder="University Image Link"
                className="input input-bordered"
                {...register("university_image", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University Country</span>
              </label>
              <input
                type="text"
                placeholder="Country Name"
                className="input input-bordered"
                {...register("university_country", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University City</span>
              </label>
              <input
                type="text"
                placeholder="City Name"
                className="input input-bordered"
                {...register("university_city", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University World Rank</span>
              </label>
              <input
                type="number"
                placeholder="Rank"
                className="input input-bordered"
                {...register("university_world_rank", { required: true })}
              />
            </div>{" "}
        
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Scholarship Category</span>
            </label>
            <input
              type="text"
              placeholder="Scholarship Name"
              className="input input-bordered max-w-sm"
              {...register("scholarship_category", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Subject Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered max-w-sm"
              {...register("subject_category", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            <input
              type="text"
              placeholder="Scholarship Name"
              className="input input-bordered max-w-sm"
              {...register("degree", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Tuition Fees</span>
            </label>
            <input
              type="text"
              placeholder="Tuition Fees"
              className="input input-bordered max-w-sm"
              {...register("tuition_fee")}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Application Fees</span>
            </label>
            <input
              type="text"
              placeholder="Application Fees"
              className="input input-bordered max-w-sm"
              {...register("application_fees", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Service Charge</span>
            </label>
            <input
              type="text"
              placeholder="Service Charge"
              className="input input-bordered max-w-sm"
              {...register("service_charge", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="text"
              placeholder="Deadline"
              className="input input-bordered max-w-sm"
              {...register("application-deadline", { required: true })}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Scholarship Post Date</span>
            </label>
            <input
              type="text"
              placeholder="Post Date"
              className="input input-bordered max-w-sm"
              {...register("posted_date", { required: true })}
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
              {...register("email", { required: true })}
            />
          </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScholarship;
