import { Circles } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../store/store";
import authService from "../services/auth.service";
import boardService from "../services/board.service";
import { useEffect } from "react";

function Verification() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    if (!user?.verified) {
      authService.verifyUser(id).then((data) => {
        setUser(data);
        navigate("/board");
      });
    }
  }, []);

  return (
    <Circles
      height="80"
      width="80"
      color="#ffd008"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="fixed h-[100dvh] w-[100dvw] left-0 top-0 flex justify-center items-center bg-dark"
      visible={true}
    />
  );
}
export default Verification;
