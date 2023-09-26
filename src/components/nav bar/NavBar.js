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
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function NavBar(props) {
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
                                <AiOutlineSearch size={'24px'} />
                                <AiOutlineUser size={'24px'} />
                            </StyledIcon>
                            <BiShoppingBag size={'24px'} />
                            <StyledCart>5</StyledCart>
                            <StyledMenuIcon><HiOutlineMenuAlt4/></StyledMenuIcon>
                        </FlexBox>
                    </StyledHeaderContent>
                </Container>
            </StyledHeader>
        </div>
    );
}

export default NavBar;