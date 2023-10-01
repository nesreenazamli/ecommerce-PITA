import React from 'react';
import HomePage from "./pages/home page/HomePage";
import {useRoutes} from "react-router-dom";
import Products from "./pages/products/Products";
import SignIn from "./pages/auth/sign in/SignIn";
import Register from "./pages/auth/rigester/Register";
import Product from "./pages/products/Product";


function Router(props) {
    const routes = useRoutes([
        {path:"/", element: <HomePage/>},
        {path:"/products", element: <Products/>},
        {path:"/product/:id", element: <Product />},
        {path:"/login", element: <SignIn/>},
        {path:"/register", element: <Register/>},
    ])
    return (
        routes
    );
}

export default Router;