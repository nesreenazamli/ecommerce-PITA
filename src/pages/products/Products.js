import React from 'react';
import {StyledProductsWrapper} from "./Products.Syled";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import {Container} from "../../App.Styled";
import ProductCard from "../../components/product cad/ProductCard";

function Products(props) {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,

        <Typography key="2" color="text.primary">
            shop
        </Typography>,
    ]
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
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti.
                </Typography>


            </StyledProductsWrapper>


            <Container>

                <Typography variant={"h3"}>
                    All products
                </Typography>

                <ProductCard />


            </Container>
        </>
    );
}

export default Products;