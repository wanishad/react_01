import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        user: null,
    },
    reducers: {
        userExist: (state, action) => {
            state.user = action.payload;
            state.loader = false
        },
        userNoxExist: (state,) => {
            state.user = null;
            state.loader = false
        }
    },
})
export const { userExist, userNoxExist } = authSlice.actions
export default authSlice.reducer
