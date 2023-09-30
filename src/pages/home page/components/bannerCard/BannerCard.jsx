import { StyledImage, Typography } from '../../../../App.Styled'
import BannerContainerStyled from './BannerCard.styled'

const BannerCard = ({title, image, text}) => {
  return (
    <div>
        <BannerContainerStyled items='center'>
            <StyledImage src={image} alt='' width='640px' height='520px'/>
            <Typography fontSize='30px' fontWeight={500} margin='24px 0 4px 0'>{title}</Typography>
            <Typography fontSize='18px' fontWeight={500} border='1px solid #121212'>{text}</Typography>
        </BannerContainerStyled>
    </div>
  )
}

export default BannerCard