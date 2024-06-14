import BoardButton from "./BoardButton";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { useEffect } from "react";
import DefaultButton from "./DefaultButton";

function Sidebar() {
  const user = useStore((state) => state.user);
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);

  const fetchBoards = async () => {
    const boardsRes = await boardService.getBoardsByID(user?._id);
    setBoards(boardsRes);
  };

  useEffect(() => {
    fetchBoards();
  }, [user._id]);

  return (
    <div className="w-sidebar bg-darkish-500 absolute top-0 left-0 h-[calc(100dvh-70px)] mt-header px-2 py-4 overflow-auto">
      {boards.map((board) =>
        board.default ? (
          <DefaultButton />
        ) : (
          <BoardButton
            name={board.name}
            id={board._id}
            key={board._id}
          />
        )
      )}
    </div>
  );
}
export default Sidebar;
