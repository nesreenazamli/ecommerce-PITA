import React from "react";
import {
  AdditionCardBadge,
  AdditionCardCurrentPrice,
  AdditionCardDetails,
  AdditionCardImg,
  AdditionCardImgWrapper,
  AdditionCardOldPrice,
  AdditionCardPriceWrapper,
  AdditionCardTitle,
  AdditionCardWrapper,
} from "./style";

const AdditionCard = ({ img, title, currentPrice, oldPrice, badgeTitle }) => {
  return (
    <AdditionCardWrapper>
      {badgeTitle && <AdditionCardBadge>{badgeTitle}</AdditionCardBadge>}
      <AdditionCardImgWrapper>
        <AdditionCardImg src={img} />
      </AdditionCardImgWrapper>
      <AdditionCardDetails>
        <AdditionCardTitle>{title}</AdditionCardTitle>
        <AdditionCardPriceWrapper>
          <AdditionCardCurrentPrice>{currentPrice}</AdditionCardCurrentPrice>
          <AdditionCardOldPrice>{oldPrice}</AdditionCardOldPrice>
        </AdditionCardPriceWrapper>
      </AdditionCardDetails>
    </AdditionCardWrapper>
  );
};

export default AdditionCard;
