import { Link } from "react-router-dom";
import Nav from "./Nav";
import useStore from "../store/store";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <header className="bg-dark font-grotesk font-bold h-header flex items-center text-2xl px-4 text-white">
      <div className="max-w-[1100px] mx-auto text-left w-full flex justify-between items-center">
        <h1 className="text-3xl">
          <Link to="/">KROMA</Link>
        </h1>
        {user?.email ? (
          <button
            className="text-lg transition-colors duration-200 hover:text-accent"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Nav />
        )}
      </div>
    </header>
  );
}
export default Header;
