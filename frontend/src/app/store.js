import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/ProductListSlice";

export const store = configureStore({
    reducer:{
        product:ProductReducer
    }
})