import React, { useEffect } from "react";
import Layout from "../main layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/action/action";
import { Container, FlexBox } from "../../App.Styled";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Profile() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user.id, "user");
  // useEffect(() => {
  //     dispatch(loginAction(user.id))

  // }, [ ])

  console.log(
    useSelector((state) => state),
    "dddddddddd"
  );

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
