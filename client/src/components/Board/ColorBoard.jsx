import useStore from "../../store/store";
import Container from "../Container";
import { useParams } from "react-router-dom";
import colorService from "../../services/color.service";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

function ColorBoard({ boardID }) {
  const user = useStore((state) => state.user);
  const boards = useStore((state) => state.boards);
  const setColors = useStore((state) => state.setColors);
  const colors = useStore((state) => state.colors);

  const fetchColors = async () => {
    let colorsRes;
    if (boardID == user.defaultBoardID) {
      colorsRes = await colorService.getAllColors(user._id);
    } else {
      colorsRes = await colorService.getColorsByID(user._id, boardID);
    }

    setColors(colorsRes);
  };

  const handleDeleteColor = (id) => {
    return async () => {
      try {
        await colorService.deleteColorByID(id);
        setColors(colors.filter((color) => color._id !== id));
      } catch (e) {
        console.log(e.message);
      }
    };
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
        <motion.div
          key={color._id + boardID}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="max-w-[80px] flex flex-col items-center justify-center relative group cursor-pointer"
            key={color._id}
            onClick={() => navigator.clipboard.writeText(color.value)}
          >
            <div
              style={{ backgroundColor: color.value }}
              className="w-[70px] rounded-full aspect-square cursor-pointer shadow-2xl"
            ></div>
            <p className="font-medium text-bright mt-2 w-full whitespace-nowrap overflow-hidden text-ellipsis text-center">
              {color.value.toUpperCase()}
            </p>
            <button
              className="absolute text-lg top-0 right-0 bg-black/70 rounded-full p-[2px] hidden group-hover:block"
              onClick={handleDeleteColor(color._id)}
            >
              <IoClose />
            </button>
          </div>
        </motion.div>
      ))}
    </Container>
  );
}
export default ColorBoard;
