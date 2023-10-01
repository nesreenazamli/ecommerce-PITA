import React, {useState} from "react";
import Layout from "../main layout/Layout";
import {Banner, Brand, Category, Feature, Hero, Instagram, LastAdditionsProduct, NewsLetter, Offer} from "./index";

function HomePage() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(true)

  console.log(userData, "userData");

  return (
      <>
          {show && <Offer handleShow={(prev) => setShow(!prev)} />}

          <Layout>
        <Hero />
        <Category />
        <Banner />
        <LastAdditionsProduct />
        <Brand />
        <Feature />
        <NewsLetter />
        <Instagram />
      </Layout>
</>
  );
}

export default HomePage;
