import {StyledImage, FlexBox} from "../../../../App.Styled";
import instagram1  from '../../../../assets/images/instagram/instagram1.png'
import instagram2  from '../../../../assets/images/instagram/instagram2.png'
import instagram3  from '../../../../assets/images/instagram/instagram3.png'
import instagram4  from '../../../../assets/images/instagram/instagram4.png'
import instagram5  from '../../../../assets/images/instagram/instagram5.png'
import instagram6  from '../../../../assets/images/instagram/instagram6.png'

const images = [instagram1, instagram2, instagram3, instagram4, instagram5, instagram6];

const GalleryProduct = () => {
  return (
    <FlexBox>
        {images.map((image, index) => (
            <StyledImage key={index} src={image} alt='' width='16.66%' />
        ))}
    </FlexBox>
  )
}

export default GalleryProduct