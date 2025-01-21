
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import AllScholarship from "../Pages/Login/AllScholarship";

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
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <Login></Login>
        },

      ]
    },
  ]); 