import {BsArrowRight} from "react-icons/bs";
import logos1 from "../../../../assets/images/brands/Logos1.png"
import logos2 from "../../../../assets/images/brands/Logos2.png"
import logos3 from "../../../../assets/images/brands/Logos3.png"
import logos4 from "../../../../assets/images/brands/Logos4.png"
import logos5 from "../../../../assets/images/brands/Logo5.png"
import logos6 from "../../../../assets/images/brands/Logos6.png"
import { Container, FlexBox, StyledImage, Typography } from "../../../../App.Styled";
import BrandStyled from './Brand.styled'

const Brand = () => {
    return (
        <Container margin='52px'>
            <BrandStyled>
            <FlexBox justify="space-between" items="center">
                <div>
                    <Typography fontSize='40px' fontWeight={500}>Shop brands</Typography>
                    <Typography fontSize='18px' color={'#3E3E59'} margin='16px 0'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atqu.</Typography>
                    
                    <FlexBox items="center">
                    <Typography fontSize='18px' fontWeight={500} margin='0 5px 0 0 ' border='1px solid #121212'>See all brands</Typography>
                     <BsArrowRight />                   
                    </FlexBox>
                </div>
                {/* <FlexBox wrap='wrap' justify='space-between' items='center'>
                    <StyledImage src={logos1} />
                    <StyledImage src={logos2} />
                    <StyledImage src={logos3} />
                    <StyledImage src={logos4} />
                    <StyledImage src={logos5} />
                    <StyledImage src={logos6} />
                </FlexBox> */}

            </FlexBox>
            </BrandStyled>
        </Container>
    );
}

export default Brand;