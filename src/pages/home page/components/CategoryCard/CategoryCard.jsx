import React from "react";
import {
  CategoryCardImageWrapper,
  CategoryCardImg,
  CategoryCardTitle,
  CategoryCardWrapper,
} from "./style";

const CategoryCard = ({ img, title }) => {
  return (
    <CategoryCardWrapper>
      <CategoryCardImageWrapper>
        <CategoryCardImg src={img} />
      </CategoryCardImageWrapper>
      <CategoryCardTitle>{title}</CategoryCardTitle>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
