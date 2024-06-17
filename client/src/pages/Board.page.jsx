import { useEffect, useState } from "react";
import { validateColor } from "../lib/colorPatterns";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar/Sidebar";
import boards from "../data/boards";
import colors from "../data/colors";
import useStore from "../store/store";
import { Outlet, useNavigate } from "react-router-dom";
import ColorForm from "../components/Board/ColorForm";

function Board() {
  const colorsData = [
    {
      name: "#242424",
      value: "#242424",
    },
    {
      name: "#49DE6F",
      value: "#49DE6F",
    },
    {
      name: "#49DED4",
      value: "#49DED4",
    },
    {
      name: "#242424",
      value: "#242424",
    },
    {
      name: "#49DE6F",
      value: "#49DE6F",
    },
    {
      name: "#49DED4",
      value: "#49DED4",
    },
    {
      name: "#242424",
      value: "#242424",
    },
    {
      name: "#49DE6F",
      value: "#49DE6F",
    },
    {
      name: "#49DED4",
      value: "#49DED4",
    },
    {
      name: "#242424",
      value: "#242424",
    },
  ];
  const [value, setValue] = useState("");
  const [boardId, setBoardId] = useState("");
  const [currColors, setCurrColors] = useState([]);

  const handleBoardChange = (id) => {
    setBoardId(id);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (value.trim()) {
      const color = validateColor(value);
      console.log(color);
      if (color) {
        colors.push({ name: color, value: color, boardId });
        setCurrColors(
          currColors.concat({ name: color, value: color, boardId })
        );
        setValue("");
      } else {
        alert("Invalid Color Specification");
      }
    }
  };

  return (
    <div className="bg-dark flex-1 px-4">
      <Sidebar />
      <div className="ml-sidebar transition-[margin] duration-200">
        <Outlet />
        {/* <Container
          classes="flex justify-center items-center flex-wrap gap-14 mt-16"
          width={500}
        >
          {currColors.map((color) => (
            <div
              className="flex flex-col items-center justify-center"
              key={color.value}
            >
              <div
                style={{ backgroundColor: color.value }}
                className="w-[70px] rounded-full aspect-square cursor-pointer shadow-2xl"
                onClick={() => navigator.clipboard.writeText(color.value)}
              ></div>
              <p className="font-medium text-bright mt-2">{color.name}</p>
            </div>
          ))}
        </Container> */}
      </div>
    </div>
  );
}
export default Board;
