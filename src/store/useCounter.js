import { create } from "zustand";

const useCounter = create((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  decrease: () => set((state) => ({ counter: state.counter - 1 })),
  reset: () => set({ counter: 0 }),
}));

export default useCounter;
