import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    selectedMovie: ""
}

export const modalSlice = createSlice({
    name:'active',
    initialState,
    reducers:{
        openModal: (state, action) => {
            state.value = !state.value;
            state.selectedMovie = action.payload
            console.log("MOVIE: ", action.payload)
        },
        closeModal: (state) =>{
            state.value = ""
        }
    }
})

export const {openModal, closeModal}  = modalSlice.actions
export default modalSlice.reducer