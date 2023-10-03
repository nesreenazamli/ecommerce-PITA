import styled from "styled-components";
import { FlexBox, FlexColumn } from "../../../../App.Styled";

     
const CategoryCardImg = styled.div`
   width: 100%;
    height: 250px;
    margin-bottom: 20px;
    border: 1px solid #e6e2e2;
    padding: 10px;
    border-radius: 5px; 
    cursor: pointer;
`

const CategorySliderStyled = styled.div`
    margin-top:32px;
`
const CategoryCardWrapper = styled(FlexColumn)`
    width: ${props => props.width ? props.width : "100%"};
`

const CardWrapper = styled(FlexBox)`
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;

`
export { CategorySliderStyled, CategoryCardImg, CardWrapper, CategoryCardWrapper } ;