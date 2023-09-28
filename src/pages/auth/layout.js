import React from 'react';
import {FlexBox, StyledImage} from "../../App.Styled";
import img from "../../assets/images/signin.png";

function Layout({ children }) {
    return (
        <FlexBox>
            <StyledImage height={"100vh"} width={"48%"} src={img} alt={"sign in"}/>
            {children}
        </FlexBox>
    );
}

export default Layout;