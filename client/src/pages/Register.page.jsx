import Container from "../components/Container";

function Register() {
  return (
    <Container classes="flex justify-center items-center my-16">
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <h2 className="text-3xl font-semibold text-center">Register</h2>
        <div className="mt-12">
          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor=""
                className="font-medium text-lg block"
              >
                Email
              </label>
              <input
                type="email"
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
                className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
                placeholder="e.g. chipichipichapachapa278"
              />
            </div>
            <button className="w-full py-2 rounded-md bg-accent text-dark font-semibold mt-2 shadow-lg shadow-darkish-700 text-lg">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default Register;
