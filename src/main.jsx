import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AddVisa from './Components/Pages/Addvisa.jsx';
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';


const router = createBrowserRouter([
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
        element: <AddVisa></AddVisa>,
      },
    ],
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
