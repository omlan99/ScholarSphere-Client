import React from "react";
import useAuth from "../Hook/useAuth";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const {user} = useAuth()
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
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 space-y-2">
            {/* Sidebar content here */}

            {/* { */}
                {/* user && !user.role && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>My profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/myApplication'}>My Application</Link>
                </li>
                <li>
                    <Link to={'/dashboard/myReview'}>My Review</Link>
                </li>
                {/* </>) */}
            {/* } */}
            {/* { */}
                {/* user?.role === 'moderator' && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>My Profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageScholarship'}>Manage Scholarship</Link>
                </li>
                <li>
                    <Link to={'allReviews'}>All Reviews</Link>
                </li>
                <li>
                    <Link to={"/dashboard/allApplication"}>All applied Scholarship</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addScholarship'}>Add Scholarship</Link>
                </li>
                {/* </>)  */}
            {/* } */}
            {/* { */}
                {/* user?.role === 'admin' && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>Admin Profile.</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addScholarship'}>Add Scholarship</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageScholarship'} >Manage Scholarship.</Link>
                </li>
                <li>
                    <Link>Manage Applied Application</Link>
                </li>
                <li>
                    <Link to="/dashboard/manageUsers">Manage Users.</Link>
                </li>
                <li>
                    <Link to="allReviews">Manage Review</Link>
                </li>
                {/* </>) */}
            {/* } */}
          
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
