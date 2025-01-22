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
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            {/* { */}
                {/* user && !user.role && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>My profile</Link>
                </li>
                <li>
                    <Link>My Application</Link>
                </li>
                <li>
                    <Link>My Review</Link>
                </li>
                {/* </>) */}
            {/* } */}
            {/* { */}
                {/* user?.role === 'moderator' && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>My Profile</Link>
                </li>
                <li>
                    <Link>Manage Scholarship</Link>
                </li>
                <li>
                    <Link>All Reviews</Link>
                </li>
                <li>
                    <Link>All applied Scholarship</Link>
                </li>
                <li>
                    <Link>Add Scholarship</Link>
                </li>
                {/* </>)  */}
            {/* } */}
            {/* { */}
                {/* user?.role === 'admin' && (<> */}
                <li>
                    <Link to={'/dashboard/myprofile'}>Admin Profile.</Link>
                </li>
                <li>
                    <Link>Add Scholarship</Link>
                </li>
                <li>
                    <Link>Manage Scholarship.</Link>
                </li>
                <li>
                    <Link>Manage Applied Application</Link>
                </li>
                <li>
                    <Link>Manage Users.</Link>
                </li>
                <li>
                    <Link>Manage Review</Link>
                </li>
                {/* </>) */}
            {/* } */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
         <Outlet></Outlet>
        </div>
    
      </div>
    </div>
  );
};

export default DashboardLayout;
