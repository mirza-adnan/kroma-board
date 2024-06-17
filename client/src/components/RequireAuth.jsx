import { useLocation, Navigate, Outlet } from "react-router-dom";
import useStore from "../store/store";
import authService from "../services/auth.service";

function RequireAuth() {
  const location = useLocation();
  const user = useStore((state) => state.user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
}
export default RequireAuth;
