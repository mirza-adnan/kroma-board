import Container from "../components/Container";
import { useState } from "react";
import useStore from "../store/store";
import authService from "../services/auth.service";
import { Form, Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

function Signup() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      id: 3,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter a Password",
    },
    {
      id: 4,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Re-enter Password",
    },
  ];

  const setUser = useStore((state) => state.setUser);

  const handleChange = (e) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (info.password === info.confirmPassword) {
        const user = await authService.signup({
          name: info.name,
          email: info.email,
          password: info.password,
        });
        setUser(user);
        setInfo({ name: "", email: "", password: "", confirmPassword: "" });
        navigate("/verify");
      } else {
        alert("Passwords do not match.");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Container classes="flex justify-center items-center my-16">
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
        <div className="mt-12">
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-6"
          >
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                label={input.label}
                type={input.type}
                value={info[input.name]}
                name={input.name}
                placeholder={input.placeholder}
                handleChange={handleChange}
              />
            ))}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-accent text-dark font-semibold mt-2 shadow-lg shadow-darkish-700 text-lg"
            >
              Sign Up
            </button>
          </form>
          <p
            style={{ color: "#d0d0d0" }}
            className="mt-4"
          >
            Already have an account? Login{" "}
            <Link
              to="/login"
              className="text-accent underline"
            >
              here.
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
export default Signup;
