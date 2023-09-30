import styled from "styled-components";
import shopProduct from '../../../assets/Shop.png'
import { FlexBox, FlexColumn } from "../../../../../App.Styled";

const HeaderShopStyled = styled(FlexColumn)`
    background: no-repeat url(${shopProduct});
  background-size: cover;
  width: 100%;
  height: 50vh;
  text-align: center;
`
const BreadcrumbsStyled = styled(FlexBox)`
  font-size: 12px;
  color: #605F5F;
`
export  { HeaderShopStyled, BreadcrumbsStyled }