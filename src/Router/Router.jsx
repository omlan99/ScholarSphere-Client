
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      
      children : [
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