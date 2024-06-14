import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  boards: [],
  setBoards: (newBoards) => set(() => ({ boards: newBoards })),
}));

export default useStore;
