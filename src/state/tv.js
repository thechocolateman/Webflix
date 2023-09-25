import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers:{
        saveTvSeries: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const {saveTvSeries} = tvSlice.actions
export default tvSlice.reducer