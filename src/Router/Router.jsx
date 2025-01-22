
import {
    createBrowserRouter,
  } from "react-router-dom";
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


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
           path : '/',
           element : <Home></Home>
        },
        {
          path: '/AllScholarship',
          element : <AllScholarship></AllScholarship>

        },
        {
          path: "/scholarshipDetails/:id",
          element : <ScholarshipDetails></ScholarshipDetails>
        },
     
        {
          path: "/payment/:charge",
          element: <Payment></Payment>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <Login></Login>
        },

      ]
    },
    {
      path : 'dashboard',
      element : <DashboardLayout></DashboardLayout>,
      children : [
        {
          path : 'myprofile',
          element : <MyProfile></MyProfile>
        }
      ]
    },
  ]); 