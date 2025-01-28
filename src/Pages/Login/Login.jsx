import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/undraw_login_wqkt.svg";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Component/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import ToggleBtn from "../../Component/ToggleBtn";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password).then((result) => {
      // console.log(result.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
    
  };

  return (
    <div>
      <Helmet>
        <title>ScholarSphere | Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center gap-5  p-10">
        <div className="hidden lg:block">
          <img src={loginImg} alt="" />
        </div>

        <div className="card bg-base-100 w-full border max-w-xl shrink-0 ">
          <h1 className="text-3xl font-bold text-center mt-8">
            Login to your account
          </h1>
          <ToggleBtn></ToggleBtn>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
                required
              />
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="text-center py-4 font-medium text-xl">
            <small>
              Don't have any account?{" "}
              <Link className="text-blue-500" to={"/signup"}>
                Create a new Account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
