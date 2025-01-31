import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import logo from '../assets/icons8-scholarship-64 (2).png'
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const axiosSecure = useAxiosSecure()
  const [users , setUsers] = useState({})
  console.log(user?.email)
  useEffect(() =>{
    axiosSecure.get(`/users/${user?.email}`)
    .then(res => {
      setUsers(res.data)
    })
    
  }, [user?.email, axiosSecure])
  console.log(users.email, users.role)
  const navOptions = (
    <>
    <li>
        <Link>Home</Link>
      </li>
      <li>
      <Link to={'/AllScholarship'}>All Scholarship</Link>
      </li>
      {users?.role === 'user' && (<li><Link to={"dashboard/myprofile"}>User Dashboard</Link></li>) }
      {users?.role === 'admin' &&   ( <li><Link to={"dashboard/myprofile"}>Admin Dashboard</Link></li>)}
      {users?.role === 'moderator' && (<li><Link to={"dashboard/myprofile"}>Moderator Dashboard</Link></li>)}
    </>
  );


  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logging Out",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="" />
        <a className="btn btn-ghost text-xl">ScholarSphere</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
            <div className="flex items-center gap-4">
            <p className="font-semibold">{user?.displayName}</p>
            <div className="avatar">
              <div className="w-12">
                <img src={user?.photoURL} />
              </div>
            </div>
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          </div>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
