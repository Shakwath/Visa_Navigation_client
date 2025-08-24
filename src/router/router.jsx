import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Home";
import AddVisa from "../Components/Pages/Addvisa";
import Login from "../Components/login";
import Register from "../Components/Register";
import MyProfile from "../Components/Pages/MyProfile";
import ForgetPassword from "../Components/ForgetPassword";
import ErrorPage from "../Components/Pages/errorpage";
import PrivateRoute from "../Components/Provider/PrivateRoute";
import Allvisas from "../Components/Pages/Allvisas";
import MyVisaapplications from "../Components/Pages/MyVisaapplications";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/addvisa",
        element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>,
      },
      {
        path: "/allvisa",
        element: <PrivateRoute><Allvisas></Allvisas></PrivateRoute>,
      },
      {
        path: "/myvisapplication",
        element: <PrivateRoute><MyVisaapplications></MyVisaapplications></PrivateRoute>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
       {
        path: "/Register",
        element: <Register></Register>,
      },
       {
        path: "/updateprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path : '/forgetpassword',
        element: <ForgetPassword></ForgetPassword>,
       },
       {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  }
]);

