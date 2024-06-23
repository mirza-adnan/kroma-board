import BoardButton from "./BoardButton";
import boardService from "../../services/board.service";
import useStore from "../../store/store";
import { useEffect } from "react";
import DefaultButton from "./DefaultButton";
import AddBoard from "./AddBoard";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const user = useStore((state) => state.user);
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fetchBoards = async () => {
    const boardsRes = await boardService.getBoardsByID(user?._id);
    setBoards(boardsRes);

    if (pathname == "/board" || pathname == "/board/") {
      const { _id } = boardsRes.find((board) => board.default);
      navigate(_id);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, [user?._id]);

  return (
    <div className="w-sidebar bg-darkish-500 absolute top-0 left-0 h-[calc(100dvh-70px)] mt-header">
      <div className="relative h-full">
        <div className="board-container h-[85%] overflow-auto px-3 py-4">
          {boards.map((board) =>
            board?.default ? (
              <DefaultButton
                key={board?._id}
                id={board?._id}
                active={pathname.includes(board?._id)}
              />
            ) : (
              <BoardButton
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
