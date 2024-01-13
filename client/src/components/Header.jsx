import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-dark font-grotesk font-bold h-header flex items-center text-2xl px-4 text-white">
      <div className="max-w-[1100px] mx-auto text-left w-full flex justify-between items-center">
        <h1 className="text-3xl">
          <Link to="/">KROMA</Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
