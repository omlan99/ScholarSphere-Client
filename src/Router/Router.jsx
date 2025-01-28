import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllScholarship from "../Pages/Scholarship/AllScholarship";
import ScholarshipDetails from "../Pages/Scholarship/ScholarshipDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import MyProfile from "../Pages/Dashbaord/MyProfile";
import Payment from "../Pages/payment/Payment";
import ManageScholarship from "../Pages/Dashbaord/ManageScholarship";
import ManageUsers from "../Pages/Dashbaord/ManageUsers";
import AddScholarship from "../Pages/Dashbaord/AddScholarship";
import MyApplication from "../Pages/Dashbaord/Users/MyApplication";
import MyReview from "../Pages/Dashbaord/Users/MyReview";
import AppliedScholarship from "../Pages/Dashbaord/AppliedScholarship";
import AllReview from "../Pages/Dashbaord/AllReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AllScholarship",
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: "/scholarshipDetails/:id",
        element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "myprofile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: "manageScholarship",
        element: <PrivateRoute><ManageScholarship></ManageScholarship></PrivateRoute>,
      },
      {
        path: "manageUsers",
        element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>,
      },
      {
        path: "addScholarship",
        element: <PrivateRoute><AddScholarship></AddScholarship></PrivateRoute>,
      },
      {
        path: "myApplication",
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
      },
      {
        path: "myReview",
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
      },
      {
        path : "allApplication",
        element : <PrivateRoute><AppliedScholarship></AppliedScholarship></PrivateRoute>
      },
      {
        path : 'allReviews',
        element : <PrivateRoute><AllReview></AllReview></PrivateRoute>
      },
      {
        path: "payment/:charge",
        element: <Payment></Payment>,
      },
    ],
  },
]);
