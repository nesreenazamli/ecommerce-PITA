import { Container, FlexColumn, Typography } from '../../../../App.Styled'
import GalleryProduct from '../galleryProduct/GalleryProduct'
import { GalleryStyled } from './Instagram.styled'

const Instagram = () => {
  return (
    <Container>
    <FlexColumn items='center' justify='center'>
        <Typography fontWeight={500}>#nayzakdesign</Typography>
        <Typography fontSize='40px' fontWeight={500}>On Instagram</Typography>
       
        <GalleryStyled>
            <GalleryProduct />  
        </GalleryStyled>
    </FlexColumn>
    </Container>
  )
}

export default Instagram