import { Container, FlexBox, Typography } from '../../../../App.Styled'
import SliderCardProducts from './ProductCardSlider'

const LastAdditionsProduct = () => {
  return (
    <Container margin='114px 52px'>
        <FlexBox items='center' justify='space-between'>
            <Typography fontWeight='500' fontSize='34px'>Lastest Additions</Typography>
        </FlexBox>
        <SliderCardProducts />
    </Container>
  )
}

export default LastAdditionsProduct