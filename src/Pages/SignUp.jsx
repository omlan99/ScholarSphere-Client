import signUpImg from '../assets/undraw_sign-up_z2ku.svg'

const SignUp = () => {
    return (
           <div className="min-h-screen flex items-center justify-center gap-5  p-10">
             <div className='hidden lg:block'>
               <img src={signUpImg} alt="" />
             </div>
             
               <div className="card bg-red-100 w-full max-w-xl shrink-0 ">
                 <form className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input
                       type="email"
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
               </div>
             
           </div>
    );
};

export default SignUp;