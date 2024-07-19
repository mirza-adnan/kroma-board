import { useNavigate } from "react-router-dom";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function EditButton({ name }) {
  const setEdit = useStore((state) => state.setEdit);
  const setEditValue = useStore((state) => state.setEditValue);
  const handleEditClick = () => {
    setEditValue(name);
    setEdit(true);
  };

  return (
    <div>
      <button
        className="text-yellow-300 p-1 text-center"
        onClick={handleEditClick}
      >
        <FaRegEdit />
      </button>
    </div>
  );
}

function DeleteButton({ id }) {
  const setBoards = useStore((state) => state.setBoards);
  const boards = useStore((state) => state.boards);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

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
    <button
      className="text-red-500 flex-1 text-center"
      onClick={handleDeleteBoard}
    >
      <MdDelete />
    </button>
  );
}

export default function BoardOptions({ id, name }) {
  return (
    <div className="absolute bg-dark/70 flex justify-center items-center -bottom-4 right-8 rounded-tl-none text-xl p-1 rounded-lg border border-darkish-100 z-30 translate-x-10">
      <EditButton name={name} />
      <hr className="border border-darkish-200 w-4 rotate-90 mx-2" />
      <DeleteButton id={id} />
    </div>
  );
}
