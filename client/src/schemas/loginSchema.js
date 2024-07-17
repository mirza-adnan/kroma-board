import yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("It must be valid email.").required(),
  password: yup.string().min(6, "Password must contain at least 6 characters"),
});
