import BoardButton from "./BoardButton";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { useEffect } from "react";
import DefaultButton from "./DefaultButton";
import AddBoard from "./AddBoard";

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
    <div className="w-sidebar bg-darkish-500 absolute top-0 left-0 h-[calc(100dvh-70px)] mt-header px-2 py-4">
      <div className="relative h-full">
        <div className="h-[85%] overflow-auto">
          {boards.map((board) =>
            board.default ? (
              <DefaultButton key={board._id} />
            ) : (
              <BoardButton
                name={board.name}
                id={board._id}
                key={board._id}
              />
            )
          )}
        </div>
        <AddBoard />
      </div>
    </div>
  );
}
export default Sidebar;
