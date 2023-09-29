import * as yup from "yup";

export const SigninSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
});
