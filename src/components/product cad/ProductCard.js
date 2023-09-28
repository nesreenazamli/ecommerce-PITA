import React from 'react';
import {FlexBox, StyledDel, StyledImage} from "../../App.Styled";
import {Button, CardContent, Rating, Typography} from "@mui/material";
import img from "../../assets/images/item.png";

function ProductCard({productImage, productName,discount,  price, prevPrice, rate, description}) {
    const currentPrice = price - price * (discount / 100 )
    return (
        <FlexBox>
            <StyledImage width={"200px"} src={productImage} />

            <CardContent>
                <Typography>{productName}</Typography>
                <FlexBox items={"center"}>
                    <Typography variant={"h6"}>${currentPrice.toFixed(2)}</Typography>
                    <StyledDel>${price}</StyledDel>
                </FlexBox>

                <Rating name="read-only" value={rate} readOnly />

                <Typography variant={"body2"}>
                    {description}
                </Typography>

                <Button variant="contained" fullWidth={true}>
                    Add to cart
                </Button>

            </CardContent>

        </FlexBox>
    );
}

export default ProductCard;