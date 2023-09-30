import styled from "styled-components";

const FormStyled = styled.form`
    width:488px;
    position: relative;
`

const InputStyled = styled.input`
    width:100%;
    outline: none;
    height: 52px;
    padding: 0px 48px;
    border-radius: 6px;
    border: 1px solid  #CBCBCB;
    background:  #FFF;
`

const FormAbsoluteStyled = styled.div`
    position: absolute;
    top:50%;
    left:${({ left }) => left};
    right:${({ right }) => right};
    transform: translateY(-50%);
`
const ButtonStyled = styled.button`
    height: 52px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: 500;

`


export { FormStyled, InputStyled, FormAbsoluteStyled, ButtonStyled }