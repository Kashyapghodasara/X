import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Feed from './Feed'
import Profile from './Profile' 
import Edit from './Edit'

const Body = () => {
    const appRouter = createBrowserRouter([
        // This is an Array of Object
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/",
                    element: <Feed />
                },
                {
                    path: "/profile/:id",
                    element: <Profile />
                }, 
                {
                    path: "/editProfile",
                    element: <Edit />
                }
            ]
        },
        {
            path: "/login", 
            element: <Login/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body