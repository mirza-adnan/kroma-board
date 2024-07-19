import { create } from "zustand";

const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")),
  setUser: (newUser) => set(() => ({ user: newUser })),
  boards: [],
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
  currBoardID: "",
  setCurrBoardID: (newBoardID) => set(() => ({ currBoardID: newBoardID })),
  colors: [],
  setColors: (newColors) => set(() => ({ colors: newColors })),
  edit: false,
  setEdit: (newEdit) => set(() => ({ edit: newEdit })),
  editValue: "",
  setEditValue: (newValue) => set(() => ({ editValue: newValue })),
}));

export default useStore;
