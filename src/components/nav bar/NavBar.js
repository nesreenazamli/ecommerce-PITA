import React from "react";
import { Container, FlexBox } from "../../App.Styled";
import {
  StyledCart,
  StyledLogoImg,
  StyledHeader,
  StyledLink,
  StyledIcon,
  StyledHeaderContent,
  StyledNav,
  StyledMenuIcon,
} from "./NavBar.Styled";
import { AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="header">
      <StyledHeader>
        <Container>
          <StyledHeaderContent>
            <StyledLogoImg>
              {/*<img*/}
              {/*    src={require("../../assets/Branding.png")}*/}
              {/*    alt=""*/}
              {/*    srcSet=""*/}
              {/*/>*/}
            </StyledLogoImg>
            <StyledNav>
              <StyledLink to={"/"}>Home</StyledLink>
              <StyledLink to={"/products"}>Products</StyledLink>
              <StyledLink to={"/category"}>Category</StyledLink>
            </StyledNav>
            <FlexBox align="center">
              <StyledIcon>
                <AiOutlineSearch size={"24px"} />
                <Link to={user ? "/profile" : "/login"}>
                  <FaUser size={"24px"} />
                </Link>
              </StyledIcon>
              <IoExitOutline
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
                size={"24px"}
              />
              <BiShoppingBag size={"24px"} />
              <StyledCart>5</StyledCart>
              <StyledMenuIcon>
                <HiOutlineMenuAlt4 />
              </StyledMenuIcon>
            </FlexBox>
          </StyledHeaderContent>
        </Container>
      </StyledHeader>
    </div>
  );
}

export default NavBar;
