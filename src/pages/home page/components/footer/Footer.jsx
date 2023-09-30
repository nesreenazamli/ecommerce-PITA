import { Container, FlexBox, Typography } from "../../../../App.Styled"
import { TbBrandFacebook } from 'react-icons/tb'
import { CiInstagram } from 'react-icons/ci'
import { SlSocialTwitter } from 'react-icons/sl'
import { AiOutlineMail } from 'react-icons/ai'
// import { Link, NavLink } from "react-router-dom"
import { AboutUsStyled,
        InformationStyled, 
        CompanyStyled, 
        ListStyled, 
        SocialIconStyled,
        LinkListStyled,
        ItemLinkStyled
} from './Footer.styled'


const Footer = () => {
  return (
    <Container margin='72px 52px'>
        <FlexBox items='center' justify='space-between'>
            <AboutUsStyled>
                <Typography fontSize='34px' fontWeight={500}>About us</Typography>
                <Typography color='#605F5F' margin='28px 0'>Experience the future of e-commerce design with<br  /> SHOPR. Limitless design possibilities.</Typography>
                <SocialIconStyled gap='25px'>
                    <TbBrandFacebook />
                    <CiInstagram />
                    <SlSocialTwitter />
                    <AiOutlineMail />
                </SocialIconStyled>
            </AboutUsStyled>

            <ListStyled justify='space-between'>
            <InformationStyled>
                <Typography fontSize='14px' fontWeight={500} margin='0 0 16px'>Information</Typography>
                <LinkListStyled>
                    <ItemLinkStyled to='/'>Shipping Policy</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Returns & Refunds</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Contact Us</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Frequently asked</ItemLinkStyled>

                </LinkListStyled>
            </InformationStyled>

            <CompanyStyled>
            <Typography fontSize='14px' fontWeight={500} margin='0 0 16px'>Company</Typography>
                <LinkListStyled>
                    <ItemLinkStyled to='/'>About Us</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Privacy Policy</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Terms & Conditions</ItemLinkStyled>
                    <ItemLinkStyled to='/'>Cookie Policy</ItemLinkStyled>

                </LinkListStyled>
            </CompanyStyled>


            </ListStyled>
        </FlexBox>

    </Container>
  )
}

export default Footer