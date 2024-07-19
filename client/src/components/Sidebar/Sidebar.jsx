import BoardLink from "./BoardLink";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { useEffect } from "react";
import DefaultButton from "./DefaultButton";
import AddBoard from "./AddBoard";
import { useLocation, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

function Sidebar() {
  const user = useStore((state) => state.user);
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);

  const { pathname } = useLocation();

  const fetchBoards = async () => {
    const boardsRes = await boardService.getBoardsByID(user?._id);
    setBoards(boardsRes);
  };

  useEffect(() => {
    fetchBoards();
  }, [user?._id]);

  return (
    <div className="w-sidebar bg-darkish-500 fixed top-0 left-0 h-[calc(100dvh-70px)] mt-header z-20">
      <div className="h-full">
        <div className="board-container h-[85%] overflow-y-auto px-3 py-4">
          {boards.map((board) =>
            board?.default ? (
              <DefaultButton
                key={board?._id}
                id={board?._id}
                active={pathname.includes(board?._id)}
              />
            ) : (
              <BoardLink
                name={board?.name}
                id={board?._id}
                key={board?._id}
                active={pathname.includes(board?._id)}
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
