import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    userId:'',
    emailAddress:''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logInUser: (state, action) => {
            state.userId = action.userId
            console.log("state", action)
        }
    }
})

export const {logInUser} = userSlice.actions
export default userSlice.reducer