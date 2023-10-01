import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

export const genreSlice = createSlice({
    name: "genre",
    initialState,
    reducers:{
        saveGenres: (state, action) => {
            state.value = action.payload
            
        }
    }
})

export const {saveGenres} = genreSlice.actions
export default genreSlice.reducer