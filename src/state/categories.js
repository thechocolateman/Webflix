import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    saveCategory: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { saveCategory } = categorySlice.actions;
export default categorySlice.reducer;
