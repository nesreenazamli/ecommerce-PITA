import styled from "styled-components";

export const CategoryCardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0.5rem;
`;
export const CategoryCardImageWrapper = styled("div")`
  width: 196px;
  height: 196px;
  border-radius: 50%;
`;
export const CategoryCardImg = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const CategoryCardTitle = styled("p")`
  color: #121212;
  font-size: 18px;
  font-weight: 500;
`;
