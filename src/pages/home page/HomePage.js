import React, {useState} from "react";
import Layout from "../main layout/Layout";
import {Banner, Brand, Category, Feature, Hero, Instagram, LastAdditionsProduct, NewsLetter, Offer} from "./index";
import { useSelector } from "react-redux";

function HomePage() {
  const [show, setShow] = useState(true)

  console.log(useSelector(state=>state), "state");

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
