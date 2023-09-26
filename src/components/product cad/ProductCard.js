import React from 'react';
import {FlexBox, StyledDel, StyledImage} from "../../App.Styled";
import {Button, CardContent, Rating, Typography} from "@mui/material";
import img from "../../assets/images/item.png";

function ProductCard({productImage, productName, price, prevPrice, rate, description}) {
    return (
        <FlexBox>
            <StyledImage src={img} />

            <CardContent>
                <Typography>{productName}test</Typography>
                <FlexBox items={"center"}>
                    <Typography variant={"h6"}>{price}$56</Typography>
                    <StyledDel>{prevPrice}$22</StyledDel>
                </FlexBox>

                <Rating name="read-only" value={2.5} readOnly />

                <Typography variant={"body2"}>
                    {description} bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                </Typography>

                <Button variant="contained" fullWidth={true}>
                    Add to cart
                </Button>

            </CardContent>

        </FlexBox>
    );
}

export default ProductCard;