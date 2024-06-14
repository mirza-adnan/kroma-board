import ModalBg from "../Modal/ModalBg";

function BoardForm() {
  return (
    <ModalBg>
      <div className="bg-darkish-400 p-3 md:p-6 rounded-lg max-w-[400px] w-[95%]">
        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor=""
              className="font-medium text-lg block"
            >
              Name
            </label>
            <input
              type="text"
              name="boardName"
              className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
              placeholder="Facebook 2.0"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-medium text-lg block"
            >
              Name
            </label>
            <input
              type="text"
              name="boardName"
              className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
              placeholder="Facebook 2.0"
            />
          </div>
        </form>
      </div>
    </ModalBg>
  );
}
export default BoardForm;
