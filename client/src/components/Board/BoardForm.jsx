import { useState } from "react";

function BoardForm() {
  const [value, setValue] = useState("");

  return (
    <div>
      <form className="flex justify-center items-center gap-8 my-12">
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
export default BoardForm;
