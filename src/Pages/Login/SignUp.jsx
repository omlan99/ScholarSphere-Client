import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/undraw_sign-up_z2ku.svg";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Component/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import ToggleBtn from "../../Component/ToggleBtn";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        updateUser(data.name, data.photo)
        .then(console.log('user name and photo url updated')  )
        
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Created an Account Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>ScholarSphere | SignUp</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center my-4">
        Create a new Account
      </h1>

      <div className="min-h-screen flex items-center justify-center gap-5  p-10">
        <div className="hidden lg:block">
          <img src={signUpImg} alt="" />
        </div>

        <div className="card bg-base-100 border w-full max-w-xl shrink-0 ">
          <ToggleBtn></ToggleBtn>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-400 capitalize ml-3">Forgot to type your name</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 capitalize ml-3">
                  Forgot to type your email 
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                {...register("photo", { required: true })}
                placeholder="Enter link of a photo"
                className="input input-bordered"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-400 capitalize ml-3">
                 Upload a image
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-400 capitalize ml-3">
                  Please Enter a password
                </p>
              )}
              {errors.password?.type === "min" && (
                <p className="text-red-400 capitalize ml-3">
                  Please Enter at least 6 character{" "}
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-400 capitalize ml-3">
                  Please Enter at least one uppercase and one lowercase and one
                  special character{" "}
                </p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>

          <SocialLogin></SocialLogin>
          <p className="text-center py-4 font-medium text-xl">
            <small>
              Already have an account?{" "}
              <Link className="text-blue-500" to={"/login"}>
                Log In
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
