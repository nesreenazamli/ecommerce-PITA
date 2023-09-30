import BannerCard from '../bannerCard/BannerCard'

import BannerImg1 from '../../../../assets/images/banner/Banner1.png'
import BannerImg2 from '../../../../assets/images/banner/Banner2.png'
import {Container, FlexBox} from "../../../../App.Styled";

const Banner = () => {
  return (
    <Container margin='52px'>
        <FlexBox items='center' gap='32px'>
            <BannerCard image={BannerImg1} text='See Collection' title='Splash'/>
            <BannerCard image={BannerImg2} text='See Collection' title='Hair Style'/>
        </FlexBox>

    </Container>

  )
}

export default Banner