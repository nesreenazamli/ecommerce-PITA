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
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import {Typography} from "@mui/material";
import {useSelector} from "react-redux";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const userData = useSelector((state) => state.UserReducer.user);

  console.log(userData, "userData")

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
              <Typography variant={"h6"}>Shop</Typography>
            </StyledLogoImg>
            <StyledNav>
              <StyledLink to={"/"}>Home</StyledLink>
              <StyledLink to={"/products"}>Products</StyledLink>
              <StyledLink to={"/category"}>Category</StyledLink>
            </StyledNav>
            <FlexBox align="center">
              {/*<StyledIcon>*/}
                <AiOutlineSearch  size={"20px"} />

              {/*</StyledIcon>*/}
              <StyledLink to={user ? "/profile" : "/login"}>
                <FaUser  cursor={"pointer"} size={"20px"} />
              </StyledLink>

             {/*<StyledLink to={"/"}>*/}
               <BiShoppingBag size={"24px"} />
             {/*</StyledLink>*/}
              {user && <IoExitOutline
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                  }}
                  size={"24px"}
                  cursor={"pointer"}
                  style={{margin: "0 20px"}}
              />}
              {/*<StyledCart>5</StyledCart>*/}
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
