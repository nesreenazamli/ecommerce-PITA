import styled from "styled-components";
import {ErrorMessage, Field} from "formik";
import {FlexBox, StyledImage} from "../../App.Styled";


export const StyledSignInWrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;


  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    height: 50vh;
  }
`
export const StyledWrapper = styled.div`
    
    width: 60%;
    margin: auto;

`



export const StyledInput = styled(Field)`
  border: none;
  outline: none;
  padding: 10px 5px;
  border-bottom: 1px solid #A7A7A7;

  &::placeholder {
    color: #A7A7A7;
  }

`

export const StyledError = styled(ErrorMessage)`
  color: #a41c1c !important;
  font-size: 14px;
  margin-top: 5px;
`

export const StyledAuthLayout = styled(FlexBox)`

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  
`


export const StyleAuthImage = styled(StyledImage)`
   height: 100vh;
  width: 48%;

  @media screen and (max-width: 900px) {
    height: 50vh;
    width: 100%;
  }
`