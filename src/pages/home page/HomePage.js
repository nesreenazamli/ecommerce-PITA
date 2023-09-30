import React from "react";
import Layout from "../main layout/Layout";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Banner from "./components/banner/Banner";
import LastAdditionsProduct from "./components/lastestAddition/LastAdditionsProduct";
import Brand from "./components/brands/Brand";
import Feature from "./components/feature/Feature";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Instagram from "./components/instagram/Instagram";

function HomePage() {
  const userData = JSON.parse(localStorage.getItem("user"));

  console.log(userData, "userData");

  return (
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

  );
}

export default HomePage;
