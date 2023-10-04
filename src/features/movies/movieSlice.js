import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        saveMovie: (state, action) => {
            // state.value = state.value;
            state.value = [...state.value, action.payload]
            console.log("VALLL", state.value)
            // console.log("List of movviesssssjwdhjh: ", state.value)
        }
    }
})

export const {saveMovie}  = movieSlice.actions
export default movieSlice.reducer