import React, {useEffect} from "react";
import { FlexBox, StyledDel, StyledImage } from "../../App.Styled";
import { Button, CardContent, Rating, Typography } from "@mui/material";
import { StyledProductCard } from "./ProductCard.Styled";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/action/cartAction";

function ProductCard({
  productImage,
  productName,
  price,
  discount,
  rate,
  description,
   id,
   product
}) {
  const newPrice = price - price * (discount / 100);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const handel = () => {
  //   dispatch(addToCart(product, 1))
  // }



  const handelAddToCart = () => {
    dispatch(addToCart(product, 1))
  }

  const state = useSelector(state => state.cart.cart);

  useEffect(() => {
    console.log(state, "state")
  }, [state]);


  return (
    <StyledProductCard >
      <StyledImage fit={"unset"} width={"200px"} height={"200px"} src={productImage} onClick={() => navigate(`/product/${id}`)} />
      <CardContent>
        <Typography>{productName}</Typography>
        <FlexBox items={"center"}>
          <Typography variant={"h6"}>${newPrice.toFixed(2)}</Typography>
          <StyledDel>${price.toFixed(2)}</StyledDel>
        </FlexBox>

        <Rating name="read-only" value={rate} readOnly />

        <Typography variant={"body2"} margin={"0 0 10px 0"}>{description}</Typography>

        <Button variant="contained" fullWidth={true} onClick={handelAddToCart}>
          Add to cart
        </Button>
      </CardContent>
    </StyledProductCard>
  );
}

export default ProductCard;
