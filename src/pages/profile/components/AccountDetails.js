import { Form, Formik } from "formik";

import { StyledError } from "../../auth/Auth.Styled";
import { Button, Typography } from "@mui/material";
import { FlexColumn } from "../../../App.Styled";
import { StyledInputProfile } from "../Profile.Styled";

const AccountDetails = () => {
  return (
    <div style={{ width:"60%" }}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          user_name: "",
          email: "",
          old_password: "",
          new_password: "",
          reset_password: "",
        }}
        onSubmit={() => console.log("vaild")}
      >
        {({ errors, handleSubmit, isSubmitting, setSubmitting, touched }) => (
          <Form>
            <FlexColumn margin="20px 0">
              {" "}
              First Name *
              <StyledInputProfile
                type="text"
                placeholder="First Name"
                name="first_name"
                id="firstname"
              />
              <StyledError name="first_name" component="small" />
            </FlexColumn>
            <FlexColumn margin="20px 0">
              {" "}
              Last Name *
              <StyledInputProfile
                placeholder="Last Name"
                type="text"
                er="Last Name"
                name="last_name"
                id="lastname"
              />
              <StyledError name="last_name" component="small" />
            </FlexColumn>
            <FlexColumn margin="20px 0">
              {" "}
              Display Name *
              <StyledInputProfile
                type="text"
                placeholder="Display Name"
                name="user_name"
                id="displayname"
              />
              <StyledError name="user_name" component="small" />
              <Typography fontSize="12px" color=" #807E7E">
                This will be how your name will be displayed in the account
                section and in reviews
              </Typography>
            </FlexColumn>
            <FlexColumn margin="20px 0">
              {" "}
              Email Address *
              <StyledInputProfile
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
              />
              <StyledError name="email" component="small" />
            </FlexColumn>

            <Typography fontSize="18px" fontWeight="600" margin="32px 0">
              Password change
            </Typography>
            <FlexColumn margin="20px 0">
              {" "}
              Old Password *
              <StyledInputProfile
                type="password"
                placeholder="Old Password"
                name="old_password"
                id="old-password"
              />
              <StyledError name="old_password" component="small" />
            </FlexColumn>
            <FlexColumn margin="20px 0">
              {" "}
              New Password *
              <StyledInputProfile
                type="password"
                placeholder="New Password"
                name="new_password"
                id="new-password"
              />
              <StyledError name="new_password" component="small" />
            </FlexColumn>
            <FlexColumn margin="20px 0">
              {" "}
              Reset Password *
              <StyledInputProfile
                type="password"
                placeholder="Reset Password"
                name="reset_password"
                id="reset-password"
              />
              <Typography fontSize="12px" color=" #807E7E">
                This will be how your name will be displayed in the account
                section and in reviews
              </Typography>
            </FlexColumn>

            <Button text="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountDetails;
