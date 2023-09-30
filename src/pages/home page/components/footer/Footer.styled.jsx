import styled from "styled-components"
import { FlexBox } from "../../../../App.Styled"
import { Link } from 'react-router-dom'

const AboutUsStyled = styled.div`
    flex: 1;
`
const ListStyled = styled(FlexBox)`
    flex: 0.5;
`
const InformationStyled = styled.div`
`

const CompanyStyled = styled.div`
    
`

const SocialIconStyled = styled(FlexBox)`
    
`
const LinkListStyled = styled.div`
`
const ItemLinkStyled = styled(Link)`
    margin-top: 12px;
    display: block;
`


export { 
    AboutUsStyled, 
    InformationStyled,  
    CompanyStyled, ListStyled, 
    SocialIconStyled,
    LinkListStyled,
    ItemLinkStyled
}