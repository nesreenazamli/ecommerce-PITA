import React from "react";
import HomePage from "./pages/home page/HomePage";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import SignIn from "./pages/auth/sign in/SignIn";
import Register from "./pages/auth/rigester/Register";
import Product from "./pages/products/Product";
import Profile from "./pages/profile/Profile";
import AccountDetails from "./pages/profile/components/AccountDetails";
import Orders from "./pages/profile/components/Orders";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="details" element={<AccountDetails />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default Router;
