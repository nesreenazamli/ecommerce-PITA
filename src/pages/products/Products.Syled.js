import styled from "styled-components";
import productheroimag from "../../assets/images//producthead.png";

export const StyledProductsWrapper = styled.div`
  background: no-repeat url(${productheroimag});
  background-size: cover;
  width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
