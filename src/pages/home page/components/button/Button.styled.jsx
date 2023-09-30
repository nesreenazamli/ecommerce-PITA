import styled from "styled-components";

export const StyledButton = styled.button`
border: none;
outline: none;
text-align: center;
border-radius: ${({ radius }) => radius};
padding: ${({ padding }) => padding};
background: #000;
color: #ffff;
font-size: 18px;
font-weight: 500;
width:  ${({ width }) => width};
margin: ${({ margin }) => margin}
`