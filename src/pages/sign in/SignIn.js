import React from 'react';
import {Container, FlexBox, FlexColum, StyledImage} from "../../App.Styled";
import img from "../../assets/images/signin.png"
import {Button, TextField, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import {Field, Formik, Form} from "formik";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "./SignIn.Styled";
import {SigninSchema} from "../../validation";


function SignIn(props) {
    return (
        <FlexBox>
            <StyledImage height={"100vh"} width={"48%"} src={img} alt={"sign in"}/>

            <StyledSignInWrapper>
                <StyledWrapper>

                <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign In</Typography>
                <Typography margin={"20px 0"} variant={"body2"}>
                    Don’t have an accout yet? <Link fontWeight={600} href={"/"}>sign up</Link>
                </Typography>

                <Formik
                    initialValues={{
                        name: "",
                        password: "",
                    }}
                    onSubmit={() => console.log("test")}
                    validationSchema={SigninSchema}
                >

                    {({errors, handleSubmit, isSubmitting, setSubmitting , touched}) => (
                        <Form  onSubmit={handleSubmit}>
                        <FlexColum margin={"20px 0"}>
                            <StyledInput placeholder={"Your username or email"} name={"name"}/>
                            {/*{isSubmitting && <StyledError name={"name"} component={"small"}/>}*/}
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}

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

        </FlexBox>
    );
}

export default SignIn;