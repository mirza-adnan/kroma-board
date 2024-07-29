import * as yup from "yup";

const name = yup
  .string()
  .required("Tell us your name")
  .max(30, "Name cannot exceed 30 characters");
const email = yup
  .string()
  .email("Email cannot be blank")
  .required("Email is required");
const password = yup
  .string()
  .required("Password cannot be blank")
  .min(6, "Must be at least 6 characters long")
  .max(30, "Password cannot exceed 30 characters");
const confirmPassword = yup
  .string()
  .required("Password cannot be blank")
  .min(6, "Must be at least 6 characters long")
  .max(30, "Password cannot exceed 30 characters");

const signupSchema = yup.object({
  name,
  email,
  password,
  confirmPassword: confirmPassword.oneOf(
    [yup.ref("password")],
    "Passwords do not match"
  ),
});

const signupValidator = {
  signupSchema,
  name,
  email,
  password,
  confirmPassword,
};

export default signupValidator;
