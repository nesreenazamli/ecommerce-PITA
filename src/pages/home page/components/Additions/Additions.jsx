import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../../App.Styled";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";

import dot from "../../assets/images/dot.svg";
import AdditionCard from "../AdditionCard/AdditionCard";
import {
  AdditionsCardsWrapper,
  AdditionsContainer,
  AdditionsHeading,
  AdditionsImg,
  AdditionsMore,
  AdditionsTitle,
  AdditionsWrapper,
} from "./style";

const Additions = () => {
  return (
    <AdditionsWrapper>
      <Container>
        <AdditionsContainer>
          <AdditionsHeading>
            <AdditionsTitle>Latest Additions</AdditionsTitle>
            <AdditionsMore>
              <AdditionsImg src={dot} />
              <AdditionsImg src={dot} />
            </AdditionsMore>
          </AdditionsHeading>
          <AdditionsCardsWrapper>
            <Swiper
              slidesPerView={4}
              spaceBetween={32}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                  badgeTitle={"New"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product2}
                  title={"Pink Huice"}
                  currentPrice={"$56.00"}
                  oldPrice={"$76.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product3}
                  title={"Glossier Pack"}
                  currentPrice={"$32.00"}
                  oldPrice={"$60.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product4}
                  title={"Splash Mash"}
                  currentPrice={"$64.00"}
                  oldPrice={"$120.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                  badgeTitle={"Hot"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdditionCard
                  img={product1}
                  title={"Cherry Cherry"}
                  currentPrice={"$24.99"}
                  oldPrice={"$54.00"}
                />
              </SwiperSlide>
            </Swiper>
          </AdditionsCardsWrapper>
        </AdditionsContainer>
      </Container>
    </AdditionsWrapper>
  );
};

export default Additions;
