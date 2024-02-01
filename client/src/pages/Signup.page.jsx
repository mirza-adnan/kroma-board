import Container from "../components/Container";
import { useState } from "react";
import useStore from "../store/store";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

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
      setInfo({ name: "", email: "", password: "" });
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
            <div>
              <label
                htmlFor=""
                className="font-medium text-lg block"
              >
                Name
              </label>
              <input
                type="text"
                value={info.name}
                name="name"
                onChange={handleChange}
                className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
                placeholder="e.g. Matty Healy"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-medium text-lg block"
              >
                Email
              </label>
              <input
                type="email"
                value={info.email}
                name="email"
                onChange={handleChange}
                className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
                placeholder="e.g. matty@1975.com"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-medium text-lg block"
              >
                Password
              </label>
              <input
                type="password"
                value={info.password}
                name="password"
                onChange={handleChange}
                className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
                placeholder="e.g. chipichipichapachapa278"
              />
            </div>
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
