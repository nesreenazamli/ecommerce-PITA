import { useEffect, useState } from "react";
import axios from 'axios';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";


import CategoryCard from './CategoryCard';

const SliderCardCategory = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('https://e-commerce-api-fylh.onrender.com/api/categories')
      setCategories(data);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Swiper
    slidesPerView={5.5}
    spaceBetween={50}
    freeMode={true}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
    autoplay={true}
    >
      {categories.map((item) => (
        <SwiperSlide key={item.id}>
          <CategoryCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderCardCategory;
