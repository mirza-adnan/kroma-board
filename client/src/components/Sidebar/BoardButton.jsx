import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import boardService from "../../services/board.service";
import useStore from "../../store/store";

function BoardButton({ name, id, active }) {
  // TODO: add options to edit
  const [showOptions, setShowOptions] = useState(false);
  const setBoards = useStore((state) => state.setBoards);
  const boards = useStore((state) => state.boards);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  const handleDotsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };

  const handleDeleteBoard = async () => {
    try {
      await boardService.deleteBoardByID(id);
      setBoards(boards.filter((board) => board._id !== id));
      navigate(`/board/${user.defaultBoardID}`);
      console.log("board deleted");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="my-4 relative">
      <Link
        to={`/board/${id}`}
        className={clsx(
          "flex justify-between items-center group font-bold text-md py-3 px-4 text-center w-full rounded-xl transition-colors duration-300",
          {
            "bg-accent text-dark font-bold": active,
            "bg-dark text-bright hover:bg-accent-light hover:text-accent-dark":
              !active,
          }
        )}
      >
        <div className="flex justify-start items-center gap-6 text-center w-full rounded-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                clipRule="evenodd"
              />
              <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
            </svg>
          </span>
          <span className="text-left">{name}</span>
        </div>
        <button
          className="relative hover:bg-accent-dark rounded-full p-1 hover:text-accent-light hidden group-hover:block transition-colors duration-100"
          onClick={handleDotsClick}
        >
          <BsThreeDotsVertical />
        </button>
      </Link>
      {showOptions && (
        <div className="absolute bg-dark/70 flex justify-center items-center -bottom-4 right-8 rounded-tl-none text-xl p-1 rounded-lg border border-darkish-100 z-30 translate-x-10">
          <button className="text-yellow-300 p-1 text-center">
            <FaRegEdit />
          </button>
          <hr className="border border-darkish-200 w-4 rotate-90 mx-2" />
          <button
            className="text-red-500 flex-1 text-center"
            onClick={handleDeleteBoard}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
}
export default BoardButton;
