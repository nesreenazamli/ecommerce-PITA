import React from "react";
import { Container, FlexBox } from "../../App.Styled";
import {
  StyledLogoImg,
  StyledHeader,
  StyledLink,
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
import {Badge, Typography} from "@mui/material";
import {useSelector} from "react-redux";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const cart = useSelector(state => state?.cart?.cart);

  return (
    <div className="header">
      <StyledHeader>
        <Container>
          <StyledHeaderContent>
            <StyledLogoImg>
             <Link to="/"><Typography color={"#000"} variant={"h6"}>Shop</Typography></Link> 
            </StyledLogoImg>
            <StyledNav>
              <StyledLink to={"/"}>Home</StyledLink>
              <StyledLink to={"/products"}>Products</StyledLink>
              <StyledLink to={"/cart"}>Categories</StyledLink>
            </StyledNav>
            <FlexBox align="center">
              {/*<StyledIcon>*/}
                <AiOutlineSearch  size={"20px"} />

              {/*</StyledIcon>*/}
              <StyledLink to={user ? "/profile" : "/login"}>
                <FaUser  cursor={"pointer"} size={"20px"} />
              </StyledLink>

             {/*<StyledLink to={"/"}>*/}

              <Badge badgeContent={cart?.length} color="primary">
                <BiShoppingBag size={"24px"} />
              </Badge>

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

              <StyledMenuIcon>
                {/*<div style={{color:"red"}}>{state.cart?.cart?.length} </div>*/}
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
