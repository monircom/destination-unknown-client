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
import AddTouristsSpot from './components/AddTouristsSpot';
import AllTouristSpots from './components/AllTouristSpots';
import MyList from './components/MyList';
import UpdateSpot from './components/UpdateSpot';
import CountryWiseSpot from './components/CountryWiseSpot';
import DetailSpot from './components/DetailSpot';



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
        path: "/country-wise-card/:country",
        element: <CountryWiseSpot></CountryWiseSpot>,
       // loader: ({params}) => fetch(`https://b9a10-destination-unknown-server.vercel.app/my-list-id/${params.id}`)
      },
      {
        path: "/update-spot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`https://b9a10-destination-unknown-server.vercel.app/my-list-id/${params.id}`)
      },
      {
        path: "/detail-spot/:id",
        element: <PrivateRoute><DetailSpot></DetailSpot></PrivateRoute>,
        //loader: ({params}) => fetch(`https://b9a10-destination-unknown-server.vercel.app/my-list-id/${params.id}`)
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
