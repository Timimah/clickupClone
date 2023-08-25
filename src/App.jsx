import React, { Children, useState } from 'react'
import './index.css'
import { Login } from './Pages/Login'
import { Signup } from './Pages/Signup'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    // {
    //   path: "/signupwithsso",
    //   element: <Signup />,
    // }
  ]);

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
