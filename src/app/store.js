import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "../features/modal/modalSlice";
import movieReducer from "../state/movies";
import genreReducer from "../state/genres";
import tvReducer from "../state/tv";
import userReducer from "../state/user";
import categoryReducer from "../state/categories";
import searchReducer from "../state/search";

export const store = configureStore({
  reducer: {
    active: modalReducer, //To hide and show modal
    movies: movieReducer, //
    genres: genreReducer,
    tvSeries: tvReducer,
    user: userReducer,
    categories: categoryReducer,
    searchQuery: searchReducer,
  },
});
