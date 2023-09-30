import { useEffect, useState } from "react";
import axios from 'axios';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";


import ProductCard from './ProductCard';

const SliderCardProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('https://e-commerce-api-fylh.onrender.com/api/products')
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Swiper
    slidesPerView={5}
    spaceBetween={40}
    freeMode={true}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
    autoplay={true}
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard 
          name={item.name} 
          price={item.price} 
          discount={item.discount} 
          thumbnail={item.thumbnail}
    />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderCardProducts;
