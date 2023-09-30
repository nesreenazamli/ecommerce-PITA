import React, { useEffect, useState } from "react";
import {
  StyledProductContainer,
  StyledProductsWrapper,
} from "./Products.Syled";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Container } from "../../App.Styled";
import ProductCard from "../../components/product cad/ProductCard";
import axios from "axios";

function Products(props) {
  const [allproducts, setAllProducts] = useState([]);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,

    <Typography key="2" color="text.primary">
      shop
    </Typography>,
  ];

  const getallProducts = async () => {
    try {
      const response = await axios.get(
        "https://e-commerce-api-fylh.onrender.com/api/products"
      );
      setAllProducts(response.data);
      console.log(response.data, "response");
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   getallProducts();
  // }, []);
  return (
    <>
      <StyledProductsWrapper>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>

        <Typography variant="h2" margin={"10px 0"}>
          Shop
        </Typography>

        <Typography variant="p" width={"30%"}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis voluptatum deleniti.
        </Typography>
      </StyledProductsWrapper>

      <Container>
        <Typography variant={"h3"}>All products</Typography>

        <StyledProductContainer>
          {allproducts.map((item) => (
            <ProductCard
              productName={item.name}
              rate={item.rate}
              productImage={item.thumbnail}
              price={item.price}
              description={item.description}
              discount={item.discount}
            />
          ))}
        </StyledProductContainer>
      </Container>
    </>
  );
}

export default Products;
