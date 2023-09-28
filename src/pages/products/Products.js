import React, {useEffect, useState} from 'react';
import {StyledProductsWrapper} from "./Products.Syled";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from '@mui/material/Link';
import {Container} from "../../App.Styled";
import ProductCard from "../../components/product cad/ProductCard";
import axios from "axios";

function Products() {
    const [prod, setProd] = useState([]);

    const getPoducts = async () => {
        try{
            const response = await axios.get("https://e-commerce-api-fylh.onrender.com/api/products");
            console.log(response.data)

            setProd(response.data)
        }catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        getPoducts();
    }, []);

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


                {prod?.map((item)=>
                    <ProductCard
                        description={item.description}
                        price={item.price}
                        productImage={item.thumbnail}
                        rate={item.rate}
                        productName={item.name}
                        discount={item.discount}
                    />
                )}

            </Container>
        </>
    );
}

export default Products;