import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Sort = {
  name: string;
  sort: string;
}

interface FilterSliceState  {
  serachValuse: string;
  categoryId: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  serachValuse: "",
  categoryId: 0,
  sort: {
    name: "популярности",
    sort: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.serachValuse = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    }
  },
});

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
