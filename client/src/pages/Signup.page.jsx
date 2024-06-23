import Container from "../components/Container";
import { useState } from "react";
import useStore from "../store/store";
import authService from "../services/auth.service";
import { Form, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

function Signup() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

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
      const user = await authService.signup({
        name: info.name,
        email: info.email,
        password: info.password,
      });
      setUser(user);
      setInfo({ name: "", email: "", password: "", password2: "" });
      navigate("/verify");
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
            <FormInput
              label="Name"
              type="text"
              value={info.name}
              name="name"
              placeholder="e.g. Matty Healy"
              handleChange={handleChange}
            />
            <FormInput
              label="Email"
              type="email"
              value={info.email}
              name="email"
              placeholder="e.g. matty@1975.com"
              handleChange={handleChange}
            />
            <FormInput
              label="Password"
              type="password"
              value={info.password}
              name="password"
              placeholder="e.g. chipichipichapachapa278"
              handleChange={handleChange}
            />
            <FormInput
              label="Confirm Password"
              type="password"
              value={info.password2}
              name="password2"
              placeholder="e.g. chipichipichapachapa278"
              handleChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-accent text-dark font-semibold mt-2 shadow-lg shadow-darkish-700 text-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default Signup;
