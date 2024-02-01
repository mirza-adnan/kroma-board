import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Board from "./pages/Board.page.jsx";
import Login from "./pages/Login.page.jsx";
import Signup from "./pages/Signup.page.jsx";
import VerifyPrompt from "./pages/VerifyPrompt.page.jsx";
import Verification from "./components/Verification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/verify",
        element: <VerifyPrompt />,
      },
      {
        path: "/verify/:id",
        element: <Verification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
