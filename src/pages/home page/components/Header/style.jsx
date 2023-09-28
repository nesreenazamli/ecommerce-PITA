import { styled } from "styled-components";
import { FlexBox } from "./../../App.Styled";

export const HeaderWrapper = styled("div")``;
export const HeaderContainer = styled(FlexBox)`
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 20px 0;
`;
export const HeaderLogoWrapper = styled(FlexBox)`
  align-items: center;
  gap: 0.5rem;
`;
export const HeaderImg = styled("img")``;
export const HeaderNavWrapper = styled(FlexBox)`
  align-items: center;
  gap: 3rem;
`;
export const HeaderLink = styled("span")`
  cursor: pointer;
  & > a {
    color: #121212;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const HeaderIconsWrapper = styled(FlexBox)`
  align-items: center;
  gap: 20px;

  & > svg {
    cursor: pointer;
    font-size: 23px;
    color: #121212;
  }
`;
