import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import useStore from "../store/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Board() {
  const user = useStore((state) => state.user);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname == "/board" || pathname == "/board/") {
      navigate(user.defaultBoardID);
    }
  }, [user._id]);

  return (
    <div className="bg-dark flex-1 px-4">
      <Sidebar />
      <div className="ml-sidebar transition-[margin] duration-200">
        <Outlet />
      </div>
    </div>
  );
}
export default Board;
