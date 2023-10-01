import React from "react";
import { FlexBox, StyledDel, StyledImage } from "../../App.Styled";
import { Button, CardContent, Rating, Typography } from "@mui/material";
import { StyledProductCard } from "./ProductCard.Styled";
import {useNavigate} from "react-router-dom";

function ProductCard({
  productImage,
  productName,
  price,
  discount,
  rate,
  description,
    id
}) {
  const newPrice = price - price * (discount / 100);
  const navigate = useNavigate()
  return (
    <StyledProductCard >
      <StyledImage width={"150px"} height={"200px"} src={productImage} onClick={() => navigate(`/product/${id}`)} />
      <CardContent>
        <Typography>{productName}</Typography>
        <FlexBox items={"center"}>
          <Typography variant={"h6"}>{newPrice}</Typography>
          <StyledDel>{price}</StyledDel>
        </FlexBox>

        <Rating name="read-only" value={rate} readOnly />

        <Typography variant={"body2"}>{description}</Typography>

        <Button variant="contained" fullWidth={true}>
          Add to cart
        </Button>
      </CardContent>
    </StyledProductCard>
  );
}

export default ProductCard;
