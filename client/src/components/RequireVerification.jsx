import { useLocation, Navigate, Outlet } from "react-router-dom";
import useStore from "../store/store";

function RequireVerification() {
  const location = useLocation();
  const user = useStore((state) => state.user);

  return user.verified ? (
    <Outlet />
  ) : (
    <Navigate
      to="/verify"
      state={{ from: location }}
      replace
    />
  );
}
export default RequireVerification;
