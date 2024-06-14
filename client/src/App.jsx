import Header from "./components/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useStore from "./store/store";
import authService from "./services/auth.service";
import Layout from "./components/Layout";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";
import Verification from "./components/Verification";
import VerifyPrompt from "./pages/VerifyPrompt.page";
import Board from "./pages/Board.page";
import RequireAuth from "./components/RequireAuth";

// TODO: Data Validation
// TODO: Protected Routes

function App() {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  // controlling where to go on intitial page load based on logged in status
  useEffect(() => {
    if (authService.isLoggedIn()) {
      setUser(authService.getFromLocal());
      navigate("/board");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/verify/:id"
            element={<Verification />}
          />
          <Route element={<RequireAuth />}>
            <Route
              path="/verify"
              element={<VerifyPrompt />}
            />
            <Route
              path="/board"
              element={<Board />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
