import { Product } from "../../sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BasketItem {
  product: Product;
  quantity: number;
}

interface BasketState {
  items: BasketItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => BasketItem[];
  updateCart: () => void;
  getTotalDiscountedPrice: () => number;
  getSubTotal: () => number;
}

const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      updateCart: () => {
        const cartItems = get().items;
        const updatedCartItems = cartItems.map((item) => {
          // Update the quantity of each item
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        set({ items: updatedCartItems });
      },
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product._id === product._id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              items: [...state.items, { product, quantity: 1 }],
            };
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as BasketItem[]),
        })),
      clearBasket: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) =>
            total +
            (parseFloat(item.product.price ?? "0") ?? 0) * item.quantity,
          0
        );
      },
      getItemCount: (productId: string) => {
        const item = get().items.find((item) => item.product._id === productId);
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,
      getTotalDiscountedPrice: () => {
        return get().items.reduce(
          (total, item) => {
            const discount = item.product.discountPercentage ?? 0;
            const price = parseFloat(item.product.price ?? "0");
            const discountedPrice = price - (price * discount / 100);
            return total + discountedPrice * item.quantity;
          },
          0
        );
      },
      getSubTotal: () => {
        return get().items.reduce(
          (total, item) => {
            const price = parseFloat(item.product.price ?? "0");
            return total + price * item.quantity;
          },
          0
        );
      }
    }),
    {
      name: "basket-store",
    }
  )
);

export default useBasketStore;
