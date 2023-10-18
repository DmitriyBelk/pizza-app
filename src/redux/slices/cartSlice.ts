import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },
    minusCartItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) findItem.count--;
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
