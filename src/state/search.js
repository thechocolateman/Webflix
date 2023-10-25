import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveSearch: (state, action) => {
      state.value = action.payload;
    },
    getResults: (state, action) => {
      state.results = action.payload;
      console.log("GET RESULTS FOR ", action.payload);
    },
  },
});

export const { saveSearch, getResults } = searchSlice.actions;
export default searchSlice.reducer;
