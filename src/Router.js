import React from 'react';
import HomePage from "./pages/home page/HomePage";
import {useRoutes} from "react-router-dom";
import Products from "./pages/products/Products";

function Router(props) {
    const routes = useRoutes([
        {path:"/", element: <HomePage/>},
        {path:"/products", element: <Products/>},
    ])
    return (
        routes
    );
}

export default Router;