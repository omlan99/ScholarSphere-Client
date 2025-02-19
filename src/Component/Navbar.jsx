import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import logo from "../assets/icons8-scholarship-64 (2).png";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState({});
  console.log(user?.email);
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user]);
  console.log(users.email, users.role);
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <HashLink smooth to="/#scholarship">Scholarships</HashLink>
      </li>
      <li>
        <HashLink smooth to="/#universities">Universities</HashLink>
      </li>
      <li>
        <Link to={"/AllScholarship"}>All Scholarship</Link>
      </li>
      <li>
        <HashLink smooth to="/#contact">Contact</HashLink>
      </li>
      {
        user? <><li><HashLink smooth to="/#reviews">Reviews</HashLink></li></>: <></>
      }
      {user?.role && users?.role === "user" && (
        <li>
          <Link to={"dashboard/myprofile"}>User Dashboard</Link>
        </li>
      )}
      {users?.role && users?.role === "admin" && (
        <li>
          <Link to={"dashboard/myprofile"}>Admin Dashboard</Link>
        </li>
      )}
      {users?.role && users?.role === "moderator" && (
        <li>
          <Link to={"dashboard/myprofile"}>Moderator Dashboard</Link>
        </li>
      )}
    </>
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme =localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  },[theme] );
  const handleToggle = (e) =>{
    if(e.target.checked){
      setTheme("myDarkTheme")
    }else{
      setTheme("myLightTheme")
    }
  }
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
    <div className="fixed top-0 left-0 z-20 w-full bg-base-100">
      <div className="navbar  container mx-auto border-b-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="h-5 w-5 " src={logo} alt="" />
            <a className="btn btn-ghost text-xl">ScholarSphere</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <p className="font-semibold hidden md:block">{user?.displayName}</p>
              <div className="avatar hidden md:block">
                <div className="w-12">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <Link onClick={handleLogOut} className="btn btn-primary">
                Logout
              </Link>
            </div>
          ) : (
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
