import React, {useState} from 'react';
import Layout from "../auth/layout";
import {StyledError, StyledInput, StyledSignInWrapper, StyledWrapper} from "./SignIn.Styled";
import {Alert, AlertTitle, Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import {Form, Formik} from "formik";
import {FlexColum} from "../../App.Styled";
import axios from "axios";

function Siginup(props) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log(error, "error")

    const handleSaveChanges = async (values) => {
        console.log(values)
        setError("");
        setIsLoading(true);
        try {
            // const response = await axios.get(`https://e-commerce-api-fylh.onrender.com/api/login?email=${values.name}&password=${values.password}`);
            const response = await axios.post(`https://e-commerce-api-fylh.onrender.com/api/register`, values);
            console.log("test");

            // setUser(response.data);

            // Set user to localStorage
            // localStorage.setItem("user", JSON.stringify(response.data));

            // history.push("/");
        } catch (e) {
            console.log(e.response.data.error);
            setError(e.response.data.error)
        }
        setIsLoading(false);
    };

    return (
        <Layout>

            <StyledSignInWrapper>

                <StyledWrapper>
                    {error && <Alert style={{width:"100%"}} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert> }
                    <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>Sign In</Typography>
                    <Typography margin={"20px 0"} variant={"body2"}>
                        Don’t have an accout yet? <Link fontWeight={600} href={"/"}>sign up</Link>
                    </Typography>

                    <Formik
                        initialValues={{
                            name:"",
                            email: "",
                            password: "",
                        }}
                        onSubmit={handleSaveChanges}
                        // validationSchema={SigninSchema}
                    >

                        {({errors, handleSubmit,touched}) => (
                            <Form onSubmit={handleSubmit}>
                                <FlexColum margin={"20px 0"}>
                                    <StyledInput placeholder={"Your username or email"} name={"name"}/>
                                    <StyledError name={"name"} component={"small"}/>
                                </FlexColum>
                                <FlexColum margin={"20px 0"}>
                                    <StyledInput placeholder={"Your username or email"} name={"email"}/>
                                    <StyledError name={"email"} component={"small"}/>
                                </FlexColum>
                                <FlexColum margin={"0 0 20px 0"}>
                                    <StyledInput placeholder={"Password"} name={"password"}/>
                                    <StyledError name={"password"} component={"small"}/>
                                </FlexColum>

                                <Button type={"submit"} disabled={isLoading} variant="contained" fullWidth={true}>
                                    Sign up
                                </Button>
                            </Form>

                        )}
                    </Formik>
                </StyledWrapper>
            </StyledSignInWrapper>
        </Layout>
    );
}

export default Siginup;