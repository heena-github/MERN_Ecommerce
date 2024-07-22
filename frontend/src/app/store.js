import { configureStore } from "@reduxjs/toolkit";


import ProductReducer from "../features/products/ProductListSlice";
import authReducer from "../features/auth/authSlice"
import cartReducer from "../features/cart/cartSlice"
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
    reducer:{
        product:ProductReducer,
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer
    }
})