import React, { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import { Link, Outlet } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";

const DashboardLayout = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState([])
    useEffect(() =>{
        if(user?.email){
            axiosSecure.get(`/users/${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setCurrentUser(res.data)
                setLoading(false)
                
            })
            .catch(error =>{
                console.log(error)
                setLoading(false)
            })
            
        }else{
            setLoading(false)
        }
     
    } , [user?.email, axiosSecure])
    if(loading){
        return <div className="w-1/4  h-screen flex  justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            {
                currentUser?.role === "user" && (<>
                <li>
                    <Link to={'/dashboard/myprofile'}>My profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/myApplication'}>My Application</Link>
                </li>
                <li>
                    <Link to={'/dashboard/myReview'}>My Review</Link>
                </li>
                </>)
            }
            {
                currentUser?.role === 'moderator' && (<>
                <li>
                    <Link to={'/dashboard/myprofile'}>My Profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageScholarship'}>Manage Scholarship</Link>
                </li>
                <li>
                    <Link to={'/dashboard/allReviews'}>All Reviews</Link>
                </li>
                <li>
                    <Link to={"/dashboard/allApplication"}>All applied Scholarship</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addScholarship'}>Add Scholarship</Link>
                </li>
                </>) 
            }
            {
                currentUser?.role === 'admin' && (<>
                <li>
                    <Link to={'/dashboard/myprofile'}>Admin Profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addScholarship'}>Add Scholarship</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageScholarship'} >Manage Scholarship</Link>
                </li>
                <li>
                    <Link to={"/dashboard/allApplication"}>Manage Applied Application</Link>
                </li>
                <li>
                    <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
                <li>
                    <Link to="allReviews">Manage Review</Link>
                </li>
                </>)
            }
          
          </ul>
        </div>
        {/* flex flex-col items-center justify-center */}
        <div className="drawer-content p-7">
          {/* Page content here */}
         <Outlet></Outlet>
        </div>
    
      </div>
    </div>
  );
};

export default DashboardLayout;
