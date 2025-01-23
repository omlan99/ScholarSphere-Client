import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import useAuth from "../../Hook/useAuth";
import useCommonAxios from "../../Hook/useCommonAxios";
import Swal from "sweetalert2";

const AddScholarship = () => {
  const {user} = useAuth()
  const axiosCommon = useCommonAxios()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const scholarshipData = {...data, email : user.email, role: user?.role || ''}
    console.log(scholarshipData)

    axiosCommon.post('/scholarship', scholarshipData)
    .then(res => {
      console.log(res.data)
  
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Scholarship has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      
    })

   
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
            <select defaultValue={"Scholarship Category"} className="select select-bordered max-w-sm "  {...register("scholarship_category", { required: true })} >
              <option  disabled value="Scholarship Category">Scholarship Category  </option>
              <option value="full-fund">Full-Fund</option>
              <option value="partial">Partial</option>
              <option value="self-fund">Self-Fund</option>
            </select>
          
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Subject Category</span>
            </label>
            <select defaultValue={"Subject Category"} className="select select-bordered max-w-sm "   {...register("subject_category", { required: true })} >
                  <option disabled  value="Subject Category">Subject Category</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Doctor">Doctor</option>
            </select>
            
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            
            <select defaultValue={'Degree Name'} className="select select-bordered max-w-sm "  {...register("degree", { required: true })} >
              <option disabled   value='Degree Name  '>Degree Name</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
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
              // {...register("email", { required: true })}
              defaultValue ={user?.email}
              disabled
            />
          </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScholarship;
