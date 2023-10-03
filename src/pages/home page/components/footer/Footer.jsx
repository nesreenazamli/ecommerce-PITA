import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Container } from "../../../../App.Styled";
import {
  FooterContainer,
  FooterIconWrapper,
  FooterLeftDescription,
  FooterLeftSocialWrapper,
  FooterLeftTitle,
  FooterLink,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrapper,
  FooterWrapperLeft,
  FooterWrapperRight,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterWrapperLeft>
            <FooterLeftTitle>About us</FooterLeftTitle>
            <FooterLeftDescription>
              Experience the future of e-commerce design with SHOPR. Limitless
              design possibilities.
            </FooterLeftDescription>
            <FooterLeftSocialWrapper>
              <FooterIconWrapper to={"/"}>
                <FiFacebook />
              </FooterIconWrapper>
              <FooterIconWrapper to={"/#"}>
                <FaInstagram />
              </FooterIconWrapper>
              <FooterIconWrapper to={"/#"}>
                <FiTwitter />
              </FooterIconWrapper>
              <FooterIconWrapper to={"/#"}>
                <HiOutlineMail />
              </FooterIconWrapper>
            </FooterLeftSocialWrapper>
          </FooterWrapperLeft>
          <FooterWrapperRight>
            <FooterLinksWrapper>
              <FooterLinksTitle>Information</FooterLinksTitle>
              <FooterLink>
                <Link>Shipping Policy</Link>
              </FooterLink>
              <FooterLink>
                <Link>Returns & Refunds</Link>
              </FooterLink>
              <FooterLink>
                <Link>Contact Us</Link>
              </FooterLink>
              <FooterLink>
                <Link>Frequently asked</Link>
              </FooterLink>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksTitle>Company</FooterLinksTitle>
              <FooterLink>
                <Link>About Us</Link>
              </FooterLink>
              <FooterLink>
                <Link>Privacy Policy</Link>
              </FooterLink>
              <FooterLink>
                <Link>Terms & Conditions</Link>
              </FooterLink>
              <FooterLink>
                <Link>Cookie Policy</Link>
              </FooterLink>
            </FooterLinksWrapper>
          </FooterWrapperRight>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
