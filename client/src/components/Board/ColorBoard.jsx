import useStore from "../../store/store";
import Container from "../Container";
import { useParams } from "react-router-dom";
import colorService from "../../services/color.service";
import { useEffect } from "react";

function ColorBoard({ boardID }) {
  const { _id: userID } = useStore((state) => state.user);
  const setColors = useStore((state) => state.setColors);
  const colors = useStore((state) => state.colors);

  const fetchColors = async () => {
    const colorsRes = await colorService.getColorsByID(userID, boardID);
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
          className="flex flex-col items-center justify-center"
          key={color._id}
        >
          <div
            style={{ backgroundColor: color.value }}
            className="w-[70px] rounded-full aspect-square cursor-pointer shadow-2xl"
            onClick={() => navigator.clipboard.writeText(color.value)}
          ></div>
          <p className="font-medium text-bright mt-2">
            {color.value.toUpperCase()}
          </p>
        </div>
      ))}
    </Container>
  );
}
export default ColorBoard;
