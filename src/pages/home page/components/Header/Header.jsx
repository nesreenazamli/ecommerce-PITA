import React from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Container } from "../../App.Styled";
import shopr from "../../assets/images/SHOPR.svg";
import logo from "../../assets/images/logo.svg";
import {
  HeaderContainer,
  HeaderIconsWrapper,
  HeaderImg,
  HeaderLink,
  HeaderLogoWrapper,
  HeaderNavWrapper,
  HeaderWrapper,
} from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <HeaderLogoWrapper>
            <HeaderImg src={logo} />
            <HeaderImg src={shopr} />
          </HeaderLogoWrapper>
          <HeaderNavWrapper>
            <HeaderLink>
              <Link to={"/home"}>Home</Link>
            </HeaderLink>
            <HeaderLink>
              <Link to={"/product"}>Product</Link>
            </HeaderLink>
            <HeaderLink>
              <Link to={"/category"}>Category</Link>
            </HeaderLink>
          </HeaderNavWrapper>
          <HeaderIconsWrapper>
            <BiSearch />
            <RxPerson />
            <BiShoppingBag />
          </HeaderIconsWrapper>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
