import React from "react";
import { FlexBox, StyledDel, StyledImage } from "../../App.Styled";
import { Button, CardContent, Rating, Typography } from "@mui/material";
import { StyledProductCard } from "./ProductCard.Styled";

function ProductCard({
  productImage,
  productName,
  price,
  discount,
  rate,
  description,
}) {
  const newPrice = price - price * (discount / 100);
  return (
    <StyledProductCard>
      <StyledImage width={"150px"} height={"200px"} src={productImage} />

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
