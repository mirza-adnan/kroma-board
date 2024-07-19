import boardService from "../../services/board.service";
import useStore from "../../store/store";
import FormInput from "../FormInput";
import ModalBg from "../Modal/ModalBg";

export default function EditForm({ boardID, name }) {
  const setEdit = useStore((state) => state.setEdit);
  const editValue = useStore((state) => state.editValue);
  const setEditValue = useStore((state) => state.setEditValue);
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const applyEdit = async (e) => {
    e.preventDefault();
    try {
      if (editValue !== name) {
        const resBoard = await boardService.editBoardNameByID(
          boardID,
          editValue
        );
        setBoards(
          boards.map((board) => {
            return board._id === boardID ? resBoard : board;
          })
        );
      }
      setEditValue("");
      setEdit(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleCancelEdit = () => {
    setEdit(false);
  };

  return (
    <ModalBg>
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <form className="flex flex-col gap-6">
          <FormInput
            label="Name"
            type="text"
            name="boardName"
            placeholder="Enter new name"
            value={editValue}
            handleChange={handleChange}
          />
          <div className="flex justify-center gap-4 items-center">
            <button
              type="submit"
              className="bg-accent h-[43px] px-8 rounded-full font-medium text-md text-dark w-1/3"
              onClick={applyEdit}
            >
              Apply
            </button>
            <button
              type="button"
              className="bg-dark h-[43px] px-8 rounded-full font-medium text-md text-bright w-1/3"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ModalBg>
  );
}
