import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
// import Home from "./components/Home";
//import Login from "./components/Login";
// import Register from "./components/Register";
 import AuthProvider from "./Providers/AuthProvider";
// import Profile from "./components/Profile";
// import PrivateRoute from "./routes/PrivateRoute";
// import UpdateProfile from "./components/UpdateProfile";
// import About from "./components/About";
 import ErrorPage from "./components/ErrorPage";
// import ResidentialDetails from "./components/ResidentialDetails";
// import Listings from "./components/Listings";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
