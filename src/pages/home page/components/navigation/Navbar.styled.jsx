import styled from "styled-components";
import { FlexBox } from "../../../../App.Styled";


const NavStyled = styled(FlexBox)`
    padding: 20px 0;
`
const LogoStyled = styled(FlexBox)`
    gap: 8px;
`

const LogoTextStyled = styled.h2`
    letter-spacing: 1.5px;
    padding-top: 3px;
`

const NavigateLinkStyled = styled(FlexBox)`
    gap: 40px;
`

export  { NavStyled, LogoStyled, LogoTextStyled, NavigateLinkStyled }