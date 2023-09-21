import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    selectedMovie: ""
}

export const modalSlice = createSlice({
    name:'active',
    initialState,
    reducers:{
        toggleModal: (state, action) => {
            state.value = !state.value;
            state.selectedMovie = action.payload
            console.log("MOVIE: ", action.payload)
        }
    }
})

export const {toggleModal}  = modalSlice.actions
export default modalSlice.reducer