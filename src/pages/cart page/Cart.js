import React, {useEffect, useState} from 'react';
import {Container, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import Layout from "../main layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {FlexBox, StyledImage} from "../../App.Styled";
import {FaTrash} from "react-icons/fa";
import {addToCart, decreaseQuantity} from "../../redux/action/cartAction";

function Cart(props) {
    const [data, setData] = useState([])

    const dispatch = useDispatch();
    const cartData = useSelector(state => state?.cart?.cart) || [];

    useEffect(() => {
        setData(cartData);

    }, [data]);


    return (
        <Layout>

            <Typography textAlign={"center"} fontWeight={600} fontSize={"2vw"}>Cart</Typography>
            <FlexBox justify={"center"}><Typography>Shop for $34 more to enjoy </Typography> <Typography
                fontWeight={600} margin={"0 5px"}>FREE Shipping </Typography></FlexBox>

            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) =>
                            <TableRow>

                                <TableCell>
                                    <StyledImage width={"100px"} height={"100px"} src={item.thumbnail}/>
                                    <div>
                                        {item.name}
                                        <FaTrash/>
                                    </div>
                                </TableCell>
                                <TableCell>


                                    <FlexBox>

                                        <div
                                        onClick={() => dispatch(decreaseQuantity(item, 1))}

                                        >
                                            -
                                        </div>

                                        <Typography margin={"0 15px"}>{item?.quantity}</Typography>

                                        <div

                                            onClick={() =>
                                                dispatch(addToCart(item, 1))
                                            }
                                        >+
                                        </div>
                                    </FlexBox>

                                </TableCell>
                                <TableCell>${item.price.toFixed(2)}</TableCell>
                                <TableCell><Typography
                                    fontWeight={600}>${(item.price * item.quantity).toFixed(2)}</Typography></TableCell>
                            </TableRow>
                        )}
                    </TableBody>


                </Table>

            </Container>

        </Layout>
    );
}

export default Cart;