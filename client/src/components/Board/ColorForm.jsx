import { useEffect, useState } from "react";
import { hexPattern, validateColor } from "../../lib/colorPatterns";
import colorService from "../../services/color.service";
import useStore from "../../store/store";

function ColorForm({ boardID }) {
  const [value, setValue] = useState("");
  const { _id: userID } = useStore((state) => state.user);
  const colors = useStore((state) => state.colors);
  const setColors = useStore((state) => state.setColors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.trim()) {
      const color = validateColor(value);
      if (color) {
        const colorRes = await colorService.createColor({
          value: color,
          hex: "",
          boardID,
          userID,
        });
        setColors(colors.concat(colorRes));
        setValue("");
      } else {
        alert("Invalid Color Specification");
      }
    }
  };

  const getColorPickerValue = () => {
    let color = value.match(hexPattern);
    if (color) {
      color = color[0];
      if (color[0] !== "#") {
        color = "#" + color;
      }
      if (color.length === 4) {
        color =
          color.slice(0, 2) +
          color[1] +
          color.slice(2, 3) +
          color[2] +
          color.slice(3) +
          color[3];
      }
      return color;
    }
    return "#121212";
  };

  return (
    <div>
      <form
        className="flex justify-center items-center gap-8 my-12"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            className="h-[43px] py-3 px-4 shadow-lg min-w-[350px] rounded-full focus:border-none focus:outline-none font-medium"
            type="text"
            value={value}
            placeholder="e.g. #542ef9, hsl(93, 75%, 60%)"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            className="h-8 w-8 focus:border-none focus:outline-none absolute bg-red-400 p-0 right-2 top-[6px]"
            id="color-picker"
            type="color"
            value={getColorPickerValue()}
            placeholder="e.g. #542ef9, hsl(93, 75%, 60%)"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-accent h-[43px] px-8 rounded-full font-medium text-md text-dark"
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default ColorForm;
