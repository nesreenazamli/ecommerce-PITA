import React, { useState } from "react";
import Categories from "./components/Categories";
import Shopbrands from "./components/Shopbrands";
import Offer from "../../components/offer section/Offer";

function HomePage(props) {
  const [show, setShow] = useState(true);
  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData, "userData");

  return (
    <>
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      Hello, {userData?.name}
      <Categories />
      <Shopbrands />
    </>
  );
}

export default HomePage;
