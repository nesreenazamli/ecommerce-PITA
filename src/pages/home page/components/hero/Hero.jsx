import heroImg from '../../../../assets/images/Hero.png'
import { Container, FlexBox, StyledImage, Typography } from '../../../../App.Styled';
import Button from '../button/Button';
import { HeroTitle, StyledHero } from './Hero.styled';

const Hero = () => {
  return (
    <StyledHero>

        <FlexBox items='center'>
        <Container margin ='0 52px'>
            <HeroTitle>
                Care products for every home.
            </HeroTitle>
            <Typography fontSize='18px' margin='8px 0 28px'>Keep your everyday style chic and on-trend with <br /> our selection 20+ styles to choose from.</Typography>
            <Button text='See Collection'  padding='10px 26px;' radius='39px'  />
        </Container>
        </FlexBox>

        <FlexBox width="50%">
            <StyledImage src={heroImg} alt='' width='100%' height='100%' cover='cover' />            
        </FlexBox>

        </StyledHero>
  )
}

export default Hero