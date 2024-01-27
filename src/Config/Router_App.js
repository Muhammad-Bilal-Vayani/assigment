import React from 'react'
import Home from '../Pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import  Login  from '../Pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="Login" element={<Login />} />
    </Route>
  )
)


export const Router_App = () => {


  return (
    <RouterProvider router={router} />
  )
}