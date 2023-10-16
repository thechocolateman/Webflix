import { configureStore } from "@reduxjs/toolkit"

import modalReducer from "../features/modal/modalSlice"
import movieReducer from "../features/movies/movieSlice"
import genreReducer from "../state/genres"
import tvReducer from "../state/tv"
import userReducer from "../state/user"

export const store = configureStore({
    reducer :{
        active: modalReducer, //To hide and show modal
        movies: movieReducer, //
        genres: genreReducer,
        tvSeries: tvReducer,
        user: userReducer
    }
});