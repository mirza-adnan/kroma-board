import { useState } from "react";
import Container from "../components/Container";
import useStore from "../store/store";
import { useNavigate, useLocation, Link, Form } from "react-router-dom";
import authService from "../services/auth.service";
import FormInput from "../components/FormInput";
import inputErrors from "../lib/inputErrors";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const setUser = useStore((state) => state.setUser);

  const navigate = useNavigate();
  const { search } = useLocation();
  // const redirect = new URLSearchParams(search).get("redirect") || "/board";

  const inputs = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "e.g. matty@1975.com",
      errorMessage: inputErrors.email,
    },
    {
      id: 2,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "e.g. chipichipichapachapa75",
      errorMessage: inputErrors.password,
    },
  ];

  const handleChange = (e) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login({
        email: info.email,
        password: info.password,
      });
      setUser(user);
      setInfo({ email: "", password: "" });
      navigate("/board");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <Container classes="flex justify-center items-center my-16">
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <div className="mt-12">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-6"
          >
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                label={input.label}
                name={input.name}
                type={input.type}
                value={info[input.name]}
                placeholder={input.placeholder}
                errorMessage={input.errorMessage}
                handleChange={handleChange}
              />
            ))}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-accent text-dark font-semibold mt-2 shadow-lg shadow-darkish-700 text-lg"
            >
              Login
            </button>
          </form>
          <p
            style={{ color: "#d0d0d0" }}
            className="mt-4"
          >
            Create an account{" "}
            <Link
              to="/signup"
              className="text-accent underline"
            >
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
export default Login;
