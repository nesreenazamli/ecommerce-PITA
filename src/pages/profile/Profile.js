import React, { useEffect } from "react";
import Layout from "../main layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {getUserById, loginAction} from "../../redux/action/userAction";
import { Container, FlexBox } from "../../App.Styled";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Profile() {
    const userData = useSelector(state => state.UserReducer.profile);

    console.log(userData, "Fffffff")

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        dispatch(getUserById(user.id));

    }, [])

    return (
    <Layout>
      <Container margin="52px 166px">
       <Typography fontSize={"4vw"} textAlign={"center"} margin={"30px 0"}>My account</Typography> 
        <FlexBox margin="50px 0 0" gap="32px">
          <SideBar />
          <Outlet />
        </FlexBox>
      </Container>
    </Layout>
  );
}
