import { useState } from "react";
import { validateColor } from "../../lib/colorPatterns";
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
          value,
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

  return (
    <div>
      <form
        className="flex justify-center items-center gap-8 my-12"
        onSubmit={handleSubmit}
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
  );
}
export default ColorForm;
