import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, StyledLink } from "../../App.Styled";
import cat1 from "../../assets/images/cat-1.png";
import cat2 from "../../assets/images/cat-2.png";
import cat3 from "../../assets/images/cat-3.png";
import cat4 from "../../assets/images/cat-4.png";
import cat5 from "../../assets/images/cat-5.png";
import CategoryCard from "./../CategoryCard/CategoryCard";
import {
  CategoriesCardsWrapper,
  CategoriesContainer,
  CategoriesHeading,
  CategoriesTitle,
  CategoriesWrapper,
} from "./style";
const Categories = () => {
  return (
    <CategoriesWrapper>
      <Container>
        <CategoriesContainer>
          <CategoriesHeading>
            <CategoriesTitle>Categories</CategoriesTitle>
            <StyledLink>See all categories</StyledLink>
          </CategoriesHeading>
          <CategoriesCardsWrapper>
            <Swiper
              slidesPerView={5.5}
              spaceBetween={40}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CategoryCard img={cat1} title={"Pink Panther"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat2} title={"Gold Crest"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat3} title={"Hot Lips"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat4} title={"Brown Sugar"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat5} title={"Red Velvet"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat4} title={"Brown Sugar"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat1} title={"Pink Panther"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat2} title={"Gold Crest"} />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={cat5} title={"Red Velvet"} />
              </SwiperSlide>
            </Swiper>
          </CategoriesCardsWrapper>
        </CategoriesContainer>
      </Container>
    </CategoriesWrapper>
  );
};

export default Categories;
