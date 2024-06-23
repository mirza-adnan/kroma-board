import { IoIosAddCircle } from "react-icons/io";
import ModalBg from "../Modal/ModalBg";
import { Link, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BoardForm from "./BoardForm";

function AddBoard() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="h-[15%] relative px-3">
        <Link
          to={`${pathname}/add-board`}
          className="cursor-pointer mx-auto font-medium transition-colors duration-300 text-accent block w-[56px] h-[56px] rounded-full"
        >
          <span className="text-6xl">
            <IoIosAddCircle />
          </span>
        </Link>
      </div>
      {pathname.includes("add-board") && <BoardForm />}
    </>
  );
}
export default AddBoard;
