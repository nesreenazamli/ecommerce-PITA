import React, { useState } from "react";
import { FlexColumn } from "../../../App.Styled";
import { AiOutlineCamera } from "react-icons/ai";
import { Typography } from "@mui/material";
import { CameraWrapperStyled, ImageStyled, LinkSidebarStyled, ListWrapperStyled, StyledImageWrapper } from "../Profile.Styled";
import avatar from "../../../assets/images/Logos.svg"

export default function SideBar() {

  return (
    <FlexColumn style={{ width:"20%" }}>
      <StyledImageWrapper width="82px" height="82px">
         <ImageStyled src={avatar} alt="" width="100%" height="100%" />
        <CameraWrapperStyled>
          {/* <input type="file" /> */}
          <AiOutlineCamera style={{ color: "#fff" }} />
        </CameraWrapperStyled>
      </StyledImageWrapper>
      <ListWrapperStyled>
        <LinkSidebarStyled
          fontSize="18px"
          fontWeight={500}
          color="#605F5F"
          margin="32px 0 0"
          to={"/profile"}
        >
          Dashboard
        </LinkSidebarStyled>
        <LinkSidebarStyled to="orders">Orders</LinkSidebarStyled>
        <LinkSidebarStyled to="address">Addresses</LinkSidebarStyled>
        <LinkSidebarStyled to="details">Account Details</LinkSidebarStyled>
        <LinkSidebarStyled to="wishlist">Wishlist</LinkSidebarStyled>
        <LinkSidebarStyled to="logout">Logout</LinkSidebarStyled>
      </ListWrapperStyled>
    </FlexColumn>
  );
}
