import React, {useState} from 'react';
import {Container, FlexBox, FlexColum, StyledImage} from "../../App.Styled";
import img from "../../assets/images/signin.png"
import {Alert, AlertTitle, Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import {Formik, Form} from "formik";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "./SignIn.Styled";
import {SigninSchema} from "../../validation";
import Layout from "../auth/layout";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SignIn({setUser}) {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log(error, "error")

    const handleSaveChanges = async (values) => {
        console.log(values)
        setError("");
        setIsLoading(true);
        try {
            // const response = await axios.get(`https://e-commerce-api-fylh.onrender.com/api/login?email=${values.name}&password=${values.password}`);
            const response = await axios.post(`https://e-commerce-api-fylh.onrender.com/api/login`, values);
            console.log(response.data.user);

            // setUser(response.data);

            // Set user to localStorage
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/");
            setUser(response.data.user)
            // history.push("/");
        } catch (e) {
            console.log(e.response);
        }
        setIsLoading(false);
    };

    return (
        <Layout>
            {error && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert> }
            <StyledSignInWrapper>
                <StyledWrapper>

                    <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign In</Typography>
                    <Typography margin={"20px 0"} variant={"body2"}>
                        Don’t have an accout yet? <Link fontWeight={600} href={"/"}>sign up</Link>
                    </Typography>

                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={handleSaveChanges}
                        // validationSchema={SigninSchema}
                    >

                        {({errors,isSubmitting, handleSubmit,touched}) => (
                            <Form onSubmit={handleSubmit}>
                                <FlexColum margin={"20px 0"}>
                                    <StyledInput placeholder={"Your username or email"} name={"email"}/>
                                    <StyledError name={"email"} component={"small"}/>
                                </FlexColum>
                                <FlexColum margin={"0 0 20px 0"}>
                                    <StyledInput placeholder={"Password"} name={"password"}/>
                                    <StyledError name={"password"} component={"small"}/>
                                </FlexColum>

                                <Button type={"submit"} disabled={isSubmitting} variant="contained" fullWidth={true}>
                                    Sign in
                                </Button>
                            </Form>

                        )}
                    </Formik>
                </StyledWrapper>
            </StyledSignInWrapper>
        </Layout>

    );
}

export default SignIn;