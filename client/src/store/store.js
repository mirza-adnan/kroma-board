import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  boards: [],
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
  currBoardID: "",
  setCurrBoardID: (newBoardID) => set(() => ({ currBoardID: newBoardID })),
}));

export default useStore;
