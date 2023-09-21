import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        activeMovie: (state, action) => {
            // state.value = state.value;
            console.log("movie is: ", action.payload)
        }
    }
})

export const {activeMovie}  = movieSlice.actions
export default movieSlice.reducer