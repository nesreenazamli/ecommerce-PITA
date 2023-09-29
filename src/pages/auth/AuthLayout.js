import React from 'react';
import {FlexBox,  StyledImage} from "../../App.Styled";
import img from "../../assets/images/signin.png";
import {StyleAuthImage, StyledAuthLayout} from "./Auth.Styled";

function AuthLayout({ children }) {
    return (
        <StyledAuthLayout>
            <StyleAuthImage src={img} alt={"sign in"}/>
            {children}
        </StyledAuthLayout>
    );
}

export default AuthLayout;