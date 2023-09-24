import React from 'react';
import {Container, StyledImage, Typography} from "../../App.Styled";
import {CategoriesHeader, StyledCard, StyledCardWrapper} from "./Home.Styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import itemImg from "../../assets/images/item.png"
import splashImg from "../../assets/images/splash.png"

// Import Swiper styles
import 'swiper/css';

function Categories(props) {

    return (
        <Container>
            <CategoriesHeader>
                <Typography fontSize="34">Categories</Typography>
                <Typography >See all categories</Typography>
            </CategoriesHeader>

            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={itemImg} width={"100px"} />
                    <Typography fontSize="18">
                        Pink Panther
                    </Typography>
                </SwiperSlide>

            </Swiper>


            <StyledCardWrapper>
                <StyledCard>
                    <StyledImage src={splashImg} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <Typography>
                        See Collection
                    </Typography>

                </StyledCard>
                <StyledCard>
                    <StyledImage src={splashImg} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <Typography>
                        See Collection
                    </Typography>

                </StyledCard>
            </StyledCardWrapper>




        </Container>
    );
}

export default Categories;