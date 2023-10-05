import React, { useState } from "react";
import { FlexColumn } from "../../../App.Styled";
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
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../../redux/action/userAction";


function SignIn() {
  const error = useSelector(state=> state.UserReducer.error)
  console.log(error, "ffffff");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSignIn = async (values) => {
    dispatch(loginAction(values, navigate))
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
            Don’t have an accout yet?
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
                <FlexColumn margin={"20px 0"}>
                  <StyledInput
                    placeholder={"Your username or email"}
                    name={"email"}
                  />
                  <StyledError name={"email"} component={"small"} />
                </FlexColumn>
                <FlexColumn margin={"0 0 20px 0"}>
                  <StyledInput placeholder={"Password"} name={"password"} />
                  <StyledError name={"password"} component={"small"} />
                </FlexColumn>
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
