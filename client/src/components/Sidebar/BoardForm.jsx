import { useState } from "react";
import ModalBg from "../Modal/ModalBg";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
import boardService from "../../services/board.service";
import FormInput from "../FormInput";

function BoardForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const user = useStore((state) => state.user);
  const setBoards = useStore((state) => state.setBoards);
  const boards = useStore((state) => state.boards);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleCancel = (e) => {
    navigate(-1);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (name) {
        const data = await boardService.createBoard({
          name,
          length: 0,
          userID: user._id,
          default: false,
        });
        setBoards(boards.concat(data));
        setName("");
        navigate(`/board/${data._id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ModalBg>
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <form className="flex flex-col gap-6">
          <FormInput
            label="Name"
            type="text"
            name="boardName"
            placeholder="Enter a name for the board"
            value={name}
            handleChange={handleChange}
          />
          <div className="flex justify-center gap-4 items-center">
            <button
              type="submit"
              className="bg-accent h-[43px] px-8 rounded-full font-medium text-md text-dark w-1/3"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              type="button"
              className="bg-dark h-[43px] px-8 rounded-full font-medium text-md text-bright w-1/3"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ModalBg>
  );
}
export default BoardForm;
