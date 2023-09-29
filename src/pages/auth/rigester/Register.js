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
import { FlexColum } from "../../../App.Styled";
import { SigninSchema } from "../../../validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelRegiter = async (values) => {
    setError("");
    try {
      const response = await axios.post(
        "https://e-commerce-api-fylh.onrender.com/api/register",
        values
      );
      navigate("/login");
      console.log(response, "response.data");
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
                <FlexColum margin={"20px 0"}>
                  <StyledInput placeholder={"Your username"} name={"name"} />
                  {/*{isSubmitting && <StyledError name={"name"} component={"small"}/>}*/}
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </FlexColum>
                <FlexColum margin={"20px 0"}>
                  <StyledInput placeholder={"Your email"} name={"email"} />
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
