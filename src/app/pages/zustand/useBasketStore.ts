import { create } from "zustand";

type Store = {
  basket: Set<string>;
  addToBasket: (item: string) => void;
  removeFromBasket: (item: string) => void;
};

export const useBasketStore = create<Store>((set) => ({
  basket: new Set<string>(),
  addToBasket: (item) =>
    set((state) => {
      const newBasket = new Set(state.basket);
      newBasket.add(item);
      return { basket: newBasket };
    }),
  removeFromBasket: (itemToRemove) =>
    set((state) => {
      const newBasket = new Set(state.basket);
      newBasket.delete(itemToRemove);
      return { basket: newBasket };
    }),
}));
