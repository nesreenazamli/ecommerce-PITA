import React from 'react';
import HomePage from "./pages/home page/HomePage";
import {Navigate, useRoutes} from "react-router-dom";
import Products from "./pages/products/Products";
import SignIn from "./pages/sign in/SignIn";
import Siginup from "./pages/sign in/Siginup";
const userData = JSON.parse(localStorage.getItem("user"))

export function Router(props) {
   return  useRoutes([
        {path:"/", element: <HomePage/>},
        // {path:"/login", element: <SignIn/>},
        // {path:"/register", element: <Siginup/>},
        {path:"/products", element: <Products/>},



    ])
}

export function AuthRouters(props) {
    return useRoutes([
        {path:"/login", element: <SignIn setUser={setUser} />},
        {path:"/register", element: <Siginup/>},
        { path: '*', element: <Navigate to="/login" /> },



    ])
}



