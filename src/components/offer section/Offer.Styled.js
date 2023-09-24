import styled from "styled-components";
import {FlexBox} from "../../App.Styled";

export const StyledOffer = styled(FlexBox)`
    background: ${props => props.theme.pallete.black};
    color: ${props => props.theme.pallete.white};
    padding: 0 2%;
    text-align: center;
    justify-content: flex-end;
`

export const StyledOfferText = styled.p`
    flex: 1
`