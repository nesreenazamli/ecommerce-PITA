import React from 'react';
import { FlexColum } from "../../../App.Styled";
import {Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import { Formik, Form} from "formik";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "../Auth.Styled";
import {SigninSchema} from "../../../validation";
import AuthLayout from "../AuthLayout";

function SignIn() {
    return (
        <AuthLayout>
            <StyledSignInWrapper>
                <StyledWrapper>

                <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign In</Typography>
                <Typography margin={"20px 0"} variant={"body2"}>
                    Don’t have an accout yet? <Link fontWeight={600} href={"/register"}>sign up</Link>
                </Typography>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={() => console.log("test")}
                    validationSchema={SigninSchema}
                >

                    {({errors, handleSubmit, isSubmitting, setSubmitting , touched}) => (
                        <Form  onSubmit={handleSubmit}>
                        <FlexColum margin={"20px 0"}>
                            <StyledInput placeholder={"Your username or email"} name={"email"}/>
                            <StyledError name={"email"} component={"small"}/>
                        </FlexColum>
                        <FlexColum margin={"0 0 20px 0"}>
                            <StyledInput placeholder={"Password"} name={"password"}/>
                            <StyledError name={"password"} component={"small"}/>
                        </FlexColum>
                            <Button type={"submit"} variant="contained" fullWidth={true}>
                                Sign in
                            </Button>
                        </Form>

                    )}
                </Formik>
            </StyledWrapper>
            </StyledSignInWrapper>
        </AuthLayout>
    );
}

export default SignIn;