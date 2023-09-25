import { configureStore } from "@reduxjs/toolkit"

import modalReducer from "../features/modal/modalSlice"
import movieReducer from "../features/movies/movieSlice"
import genreReducer from "../state/genres"
import tvReducer from "../state/tv"

export const store = configureStore({
    reducer :{
        active: modalReducer,
        movie: movieReducer,
        genres: genreReducer,
        tvSeries: tvReducer
    }
});