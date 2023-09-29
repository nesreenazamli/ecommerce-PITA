import React, { useState } from "react";
import { FlexColum } from "../../../App.Styled";
import { Alert, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Formik, Form } from "formik";
import {
  StyledError,
  StyledInput,
  StyledSignInWrapper,
  StyledWrapper,
} from "../Auth.Styled";
import { SigninSchema } from "../../../validation";
import AuthLayout from "../AuthLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handelSignIn = async (values) => {
    setError("");
    try {
      const response = await axios.post(
        "https://e-commerce-api-fylh.onrender.com/api/login",
        values
      );
      navigate("/");
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log(response.data.user, "response.data");
    } catch (e) {
      console.log(e.response.data.error, "error");
      setError(e.response.data.error);
    }
  };
  return (
    <AuthLayout>
      <StyledSignInWrapper>
        <StyledWrapper>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>
            Sign In
          </Typography>
          <Typography margin={"20px 0"} variant={"body2"}>
            Don’t have an accout yet?{" "}
            <Link fontWeight={600} href={"/register"}>
              sign up
            </Link>
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handelSignIn}
            validationSchema={SigninSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <FlexColum margin={"20px 0"}>
                  <StyledInput
                    placeholder={"Your username or email"}
                    name={"email"}
                  />
                  <StyledError name={"email"} component={"small"} />
                </FlexColum>
                <FlexColum margin={"0 0 20px 0"}>
                  <StyledInput placeholder={"Password"} name={"password"} />
                  <StyledError name={"password"} component={"small"} />
                </FlexColum>
                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  variant="contained"
                  fullWidth={true}
                >
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
