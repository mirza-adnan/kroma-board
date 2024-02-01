import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="text-lg flex gap-6 font-semibold">
      <li>
        <Link
          to="/login"
          className="transition-colors duration-200 hover:text-accent"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="transition-colors duration-200 py-2 px-4 bg-accent rounded-full text-dark hover:bg-bright"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}
export default Nav;
