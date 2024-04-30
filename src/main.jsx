import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
 import AuthProvider from "./Providers/AuthProvider";
import Profile from "./components/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";
import About from "./components/About";
 import ErrorPage from "./components/ErrorPage";
import ResidentialDetails from "./components/ResidentialDetails";
import Listings from "./components/Listings";
import AddTouristsSpot from './components/AddTouristsSpot';
import AllTouristSpots from './components/AllTouristSpots';
import MyList from './components/MyList';
import UpdateSpot from './components/UpdateSpot';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-tourist-spot",
        element: <AllTouristSpots></AllTouristSpots> ,
      },
      {
        path: "/listings",
        element: <Listings></Listings>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/update",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/update-spot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/my-list-id/${params.id}`)
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>,
      },
      {
        path: "/residential/:id",
        element: <PrivateRoute><ResidentialDetails></ResidentialDetails></PrivateRoute>,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
