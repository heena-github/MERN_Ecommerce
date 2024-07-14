import { configureStore } from "@reduxjs/toolkit";


import ProductReducer from "../features/products/ProductListSlice";
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer:{
        product:ProductReducer,
        auth:authReducer
    }
})