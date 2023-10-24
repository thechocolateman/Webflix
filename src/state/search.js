import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveSearch } = searchSlice.actions;
export default searchSlice.reducer;
