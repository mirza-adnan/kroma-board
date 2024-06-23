import useStore from "../../store/store";
import Container from "../Container";
import { useParams } from "react-router-dom";
import colorService from "../../services/color.service";
import { useEffect } from "react";

function ColorBoard({ boardID }) {
  const user = useStore((state) => state.user);
  const boards = useStore((state) => state.boards);
  const setColors = useStore((state) => state.setColors);
  const colors = useStore((state) => state.colors);

  const fetchColors = async () => {
    let colorsRes;
    if (boardID == user.defaultBoardID) {
      console.log("here");
      colorsRes = await colorService.getAllColors(user._id);
    } else {
      colorsRes = await colorService.getColorsByID(user._id, boardID);
    }

    setColors(colorsRes);
  };

  useEffect(() => {
    fetchColors();
  }, [boardID]);

  return (
    <Container
      classes="flex justify-center items-center flex-wrap gap-14 mt-16"
      width={500}
    >
      {colors.map((color) => (
        <div
          className="max-w-[80px] flex flex-col items-center justify-center"
          key={color._id}
        >
          <div
            style={{ backgroundColor: color.value }}
            className="w-[70px] rounded-full aspect-square cursor-pointer shadow-2xl"
            onClick={() => navigator.clipboard.writeText(color.value)}
          ></div>
          <p className="font-medium text-bright mt-2 w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {color.value.toUpperCase()}
          </p>
        </div>
      ))}
    </Container>
  );
}
export default ColorBoard;
