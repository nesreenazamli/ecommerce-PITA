import { FlexBox, StyledImage, Typography } from "../../../../App.Styled"
import ProductCardStyled from './ProductCard.styled'

const ProductCard = ({ name, price, discount, thumbnail }) => {
  const discountPrice = price - (price * discount)/100;

  return (
    <ProductCardStyled>
        <StyledImage src={thumbnail} width='330px' height='313px' />
        <Typography fontWeight={500} margin='12px 0'>{name}</Typography>
        <FlexBox>
          <Typography>{price}</Typography>
          <Typography>{discountPrice}</Typography>
        </FlexBox>

    </ProductCardStyled>
  )
}

export default ProductCard