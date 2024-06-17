import { useParams } from "react-router-dom";
import ColorBoard from "./ColorBoard";
import ColorForm from "./ColorForm";

function ColorsContainer() {
  const { boardID } = useParams();

  return (
    <>
      <ColorForm boardID={boardID} />
      <ColorBoard boardID={boardID} />
    </>
  );
}
export default ColorsContainer;
