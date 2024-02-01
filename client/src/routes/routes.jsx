import { Navigate, Outlet } from "react-router-dom";
import Board from "../pages/Board.page";

const routes = (isLoggedIn) => [
  {
    path: "/board",
    element: isLoggedIn ? <Board /> : <Navigate to="/signup" />,
  },
];

export default routes;
