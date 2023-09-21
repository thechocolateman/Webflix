import { configureStore } from "@reduxjs/toolkit"

import modalReducer from "../features/modal/modalSlice"
import movieReducer from "../features/movies/movieSlice"

export const store = configureStore({
    reducer :{
        active: modalReducer,
        movie: movieReducer
    }
});