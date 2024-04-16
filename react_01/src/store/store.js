import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { Api } from "../services/api";
import postReducer from "../feature/post/postSlice"
import authReducer from "../feature/auth/authSlice"
export const store = configureStore({
    reducer:{
        [Api.reducerPath]: Api.reducer,
        [postReducer.name]: postReducer,
        [authReducer.name]: authReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
    
})
setupListeners(store.dispatch)