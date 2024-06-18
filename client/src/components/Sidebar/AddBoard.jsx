import { IoIosAddCircle } from "react-icons/io";
import ModalBg from "../Modal/ModalBg";
import { Link, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BoardForm from "./BoardForm";

function AddBoard() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="h-[15%] bg-dark rounded-2xl relative">
        <Link
          to={`${pathname}/add-board`}
          className="h-full w-full cursor-pointer flex justify-center items-center gap-6 text-xl font-medium transition-colors duration-300 hover:text-accent"
        >
          <span className="absolute left-5 text-3xl">
            <IoIosAddCircle />
          </span>
          <span>Add Board</span>
        </Link>
      </div>
      {pathname.includes("add-board") && <BoardForm />}
    </>
  );
}
export default AddBoard;
