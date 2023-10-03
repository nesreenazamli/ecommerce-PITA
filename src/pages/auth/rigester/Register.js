import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import {
  StyledError,
  StyledInput,
  StyledSignInWrapper,
  StyledWrapper,
} from "../Auth.Styled";
import { Alert, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Form, Formik } from "formik";
import { FlexColumn } from "../../../App.Styled";
import { SigninSchema } from "../../../validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch;

  const handelRegiter = async (values) => {
    dispatch(registerAction(values, navigate))

  };

  return (
    <AuthLayout>
      <StyledSignInWrapper>
        <StyledWrapper>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant={"h5"} fontSize={"40px"} fontWeight={600}>
            Sign up
          </Typography>
          <Typography margin={"20px 0"} variant={"body2"}>
            Already have an account?{" "}
            <Link fontWeight={600} href={"/login"}>
              sign in
            </Link>
          </Typography>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={handelRegiter}
            // validationSchema={SigninSchema}
          >
            {({ errors, handleSubmit, isSubmitting, touched }) => (
              <Form>
                <FlexColumn margin={"20px 0"}>
                  <StyledInput placeholder={"Your username"} name={"name"} />
                  {/*{isSubmitting && <StyledError name={"name"} component={"small"}/>}*/}
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </FlexColumn>
                <FlexColumn margin={"20px 0"}>
                  <StyledInput placeholder={"Your email"} name={"email"} />
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
