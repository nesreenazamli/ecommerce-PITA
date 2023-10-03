import styled from "styled-components"
import { StyledImage } from "../../App.Styled"
import { StyledLink } from "../../components/nav bar/NavBar.Styled"
import { StyledInput } from "../auth/Auth.Styled"

const ListWrapperStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

const StyledImageWrapper = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
position: relative;
    
`

const ImageStyled = styled(StyledImage)`
    border-radius: 50%;
    `

const CameraWrapperStyled = styled.div`
    opacity: 0.8;
    background:  #121212;
    width:25px;
    height:25px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right:0;
`

const LinkSidebarStyled = styled(StyledLink)`
    font-size: 18px;
    font-weight:500;
    margin: 0;
    color:#605F5F;
    text-align: left;
    margin-top:16px;
    padding:5px 0;
    width:100%;
`

const StyledInputProfile = styled(StyledInput)`
    border: 1px solid #e1dcdc;
    border-radius: 5px;
`

export  { ListWrapperStyled, ImageStyled, CameraWrapperStyled, LinkSidebarStyled, StyledInputProfile, StyledImageWrapper }