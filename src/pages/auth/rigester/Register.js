import React from 'react';
import AuthLayout from "../AuthLayout";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "../Auth.Styled";
import {Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import {Form, Formik} from "formik";
import {FlexColum} from "../../../App.Styled";
import {SigninSchema} from "../../../validation";

function Register() {
    return (
        <AuthLayout>
            <StyledSignInWrapper>
                <StyledWrapper>
                    <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign up</Typography>
                    <Typography margin={"20px 0"} variant={"body2"}>
                        Already have an account? <Link fontWeight={600} href={"/login"}>sign in</Link>
                    </Typography>

                    <Formik
                        initialValues={{
                            name: "",
                            email:"",
                            password: "",
                        }}
                        onSubmit={() => console.log("test")}
                        validationSchema={SigninSchema}
                    >

                        {({errors, handleSubmit, isSubmitting, setSubmitting , touched}) => (
                            <Form  onSubmit={handleSubmit}>
                                <FlexColum margin={"20px 0"}>
                                    <StyledInput placeholder={"Your username"} name={"name"}/>
                                    {/*{isSubmitting && <StyledError name={"name"} component={"small"}/>}*/}
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}

                                </FlexColum>
                                <FlexColum margin={"20px 0"}>
                                    <StyledInput placeholder={"Your email"} name={"email"}/>
                                    <StyledError name={"email"} component={"small"}/>


                                </FlexColum>
                                <FlexColum margin={"0 0 20px 0"}>
                                    <StyledInput placeholder={"Password"} name={"password"}/>
                                    <StyledError name={"password"} component={"small"}/>
                                </FlexColum>

                                <Button type={"submit"} variant="contained" fullWidth={true}>
                                    Sign up
                                </Button>
                            </Form>

                        )}
                    </Formik>
                </StyledWrapper>
            </StyledSignInWrapper>
        </AuthLayout>
    );
}

export default Register;