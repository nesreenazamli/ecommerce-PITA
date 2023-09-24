import styled from "styled-components";
import {FlexBox} from "../../App.Styled";

export const CategoriesHeader = styled(FlexBox)`
    justify-content: space-between;
    align-items: center;
`

export const StyledCardWrapper = styled(FlexBox)`
    justify-content: space-between;
  text-align: center;
  margin-top: 104px;

`

export const StyledCard = styled.div`
    width: 49%;
`

export const StyledShopContent = styled.div`
    width: 49%;
    display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const StyledShopImages = styled.div`
  width: 49%;
  
  &img{
    margin: 10px;
  }
`