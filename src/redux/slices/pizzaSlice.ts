import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

// type FetchPizzas = {
//   category: string;
//   sortType: string;
// }
type FetchPizzas = Record<string, string>;

type PizzaItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async ({ category, sortType }: FetchPizzas) => {
    const { data } = await axios.get<PizzaItem[]>(
      `https://2580328108fa311f.mokky.dev/pizzas?${category}&sortBy=${sortType}`
    );
    return data;
  }
);


interface PizzasSliceState {
  items: PizzaItem[];
  status: "loading" | "success" | "error";
}

const initialState: PizzasSliceState = {
  items: [],
  status: "loading", // loading| succes | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
