import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

export const modalSlice = createSlice({
    name:'active',
    initialState,
    reducers:{
        toggleModal: (state) => {state.value = !state.value}
    }
})

export const {toggleModal}  = modalSlice.actions
export default modalSlice.reducer