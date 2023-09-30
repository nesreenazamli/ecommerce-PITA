import { AiOutlineStar } from 'react-icons/ai'
import { Container, FlexBox, StyledImage, Typography, DiscountStyled } from '../../../../../App.Styled'
import product1 from '../../../assets/product1.png'
import Button from '../../button/Button'
import { DiscountContainerStyled, ProductDetailsStyled, ProductImageContainerStyled } from './ProductCard.styled'
const ProductCard = () => {
  // const { name, price, thumbnail, discount, description, rate } = item
  return (
    <Container margin='52px'>
    <FlexBox gap='40px' items='center'>
        <ProductImageContainerStyled>
            <StyledImage src={product1} alt='' />
        </ProductImageContainerStyled>

        <ProductDetailsStyled>
        <Typography fontSize='25px'  fontWeight={700}>test</Typography>
                <DiscountContainerStyled items={"center"}>
                    <Typography fontSize='14px' fontWeight={600} >$56</Typography>
                    <DiscountStyled>$22</DiscountStyled>
                </DiscountContainerStyled>

                <FlexBox>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                 </FlexBox>

                <Typography width='612px' margin='24px 0'>
                Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </Typography>

                <Button text='Add to cart' padding='8px 100px' radius='5px'  />
                    
               
        </ProductDetailsStyled>
    </FlexBox>
    </Container>
  )
}

export default ProductCard