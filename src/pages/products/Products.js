import React, { useEffect, useState } from "react";
import {
  StyledProductContainer,
  StyledProductsWrapper,
} from "./Products.Syled";
import { Breadcrumbs, CircularProgress, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Container, FlexBox } from "../../App.Styled";
import ProductCard from "../../components/product cad/ProductCard";
import axios from "axios";
import Layout from "../main layout/Layout";

function Products(props) {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        "https://e-commerce-api-dev.onrender.com/api/products"
      );
      setLoading(false);
      setAllProducts(response.data);
      console.log(response.data, "response");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getallProducts();
  }, []);
  return (
    <Layout>
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
        <Typography variant={"h3"} margin={"52px 0 20px 0"}>
          All products
        </Typography>
        {loading ? (
          <FlexBox items="center" justify="center">
            <CircularProgress color="inherit" /> :
          </FlexBox>
        ) : (
          <StyledProductContainer>
            {allproducts.map((item) => (
              <ProductCard
                id={item.id}
                productName={item.name}
                rate={item.rate}
                productImage={item.thumbnail}
                price={item.price}
                description={item.description}
                discount={item.discount}
              />
            ))}
          </StyledProductContainer>
        )}
      </Container>
    </Layout>
  );
}

export default Products;
