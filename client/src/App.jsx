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
import ColorBoard from "./components/Board/ColorBoard";
import ColorsContainer from "./components/Board/ColorsContainer";
import AddBoard from "./components/Sidebar/AddBoard";
import RequireVerification from "./components/RequireVerification";

function App() {
  // const setUser = useStore((state) => state.setUser);
  // const navigate = useNavigate();
  // const user = useStore((state) => state.user);

  // controlling where to go on intitial page load based on logged in status
  // useEffect(() => {
  //   if (!authService.isLoggedIn()) {
  //     navigate("/login");
  //   }
  // }, []);

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
            <Route element={<RequireVerification />}>
              <Route
                path="/board/*"
                element={<Board />}
              >
                <Route
                  path=":boardID/*"
                  element={<ColorsContainer />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
