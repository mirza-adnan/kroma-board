import { useState } from "react";
import { validateColor } from "../lib/colorPatterns";
import Container from "../components/Container";

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
    {
      name: "#49DE6F",
      value: "#49DE6F",
    },
    {
      name: "#49DED4",
      value: "#49DED4",
    },
  ];
  const [value, setValue] = useState("");
  const [colors, setColors] = useState(colorsData);

  const handleAdd = (e) => {
    e.preventDefault();

    if (value.trim()) {
      const color = validateColor(value);
      console.log(color);
      if (color) {
        setColors(colors.concat({ name: color, value: color }));
        setValue("");
      } else {
        alert("Invalid Color Specification");
      }
    }
  };

  return (
    <div className="bg-dark flex-1">
      <div>
        <form
          className="flex justify-center items-center gap-8 my-12"
          onSubmit={handleAdd}
        >
          <input
            className="h-[43px] py-3 px-4 shadow-lg min-w-[350px] rounded-full focus:border-none focus:outline-none font-medium"
            type="text"
            value={value}
            placeholder="e.g. #542ef9, hsl(93, 75%, 60%)"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-accent h-[43px] px-8 rounded-full font-medium text-md text-dark"
          >
            Add
          </button>
        </form>
      </div>
      <Container classes="flex justify-center items-center flex-wrap gap-14 mt-16">
        {colors.map((color) => (
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
      </Container>
    </div>
  );
}
export default Board;
