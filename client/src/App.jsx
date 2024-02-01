import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useStore from "./store/store";
import authService from "./services/auth.service";

// TODO: Data Validation
// TODO: Protected Routes

function App() {
  const isLoggedIn = authService.isLoggedIn();
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    if (authService.isLoggedIn()) {
      setUser(authService.getFromLocal());
    }
  }, [setUser]);

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
