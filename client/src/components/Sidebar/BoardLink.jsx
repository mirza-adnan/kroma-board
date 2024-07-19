import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { motion } from "framer-motion";
import BoardOptions from "./BoardOptions";
import EditForm from "./EditForm";

function BoardLink({ name, id, active }) {
  // TODO: add options to edit
  const [showOptions, setShowOptions] = useState(false);
  const showEditForm = useStore((state) => state.edit);

  const handleDotsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowOptions((prev) => !prev);
  };

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
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
          <BoardOptions
            id={id}
            name={name}
          />
        )}
      </div>
      {showEditForm && (
        <EditForm
          boardID={id}
          name={name}
        />
      )}
    </motion.div>
  );
}
export default BoardLink;
