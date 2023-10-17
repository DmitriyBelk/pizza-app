import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.serachValuse = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    }
  },
});

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
