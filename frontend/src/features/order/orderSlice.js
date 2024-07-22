import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createOrder } from "./OrderApi"

const initialState={
    orders:[],
    status:'idle'

}

export const createOrderAsync=createAsyncThunk(
    'order/createOrder',
     async(order)=>{
        const response = await createOrder(order)
        return response.data
    }
)

export const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createOrderAsync.pending,(state,action)=>{
          state.status='loading'
        })
        .addCase(createOrderAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.orders.push(action.payload)
          })
    }
})

export const {}=orderSlice.actions
export default orderSlice.reducer