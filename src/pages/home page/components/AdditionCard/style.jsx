import styled from "styled-components";

export const AdditionCardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: fit-content;
  position: relative;
`;
export const AdditionCardBadge = styled("span")`
  position: absolute;
  left: 16px;
  top: 16px;
  color: #121212;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 100px;
  background-color: #fff;
  text-transform: uppercase;
`;
export const AdditionCardImgWrapper = styled("div")`
  width: 100%;
  display: flex;
  flex: 1 310px;
  min-height: 413px;
  background-color: #e8eaec;
`;
export const AdditionCardImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AdditionCardDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const AdditionCardTitle = styled("span")`
  color: #121212;
  font-size: 16px;
  font-weight: 500;
`;
export const AdditionCardPriceWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const AdditionCardCurrentPrice = styled("span")`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;
export const AdditionCardOldPrice = styled("span")`
  color: #a7a7a7;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-decoration: line-through;
`;
