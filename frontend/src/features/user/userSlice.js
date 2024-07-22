import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchLoggedInUserOrders } from "./userApi"

const initialState={
    userOrders:[],
    status:'idle'
}

export const fetchLoggedInUserOrdersAsync=createAsyncThunk(
    'user/fetchLoggedInUserOrders',
    async (userId)=>{
        const response = await fetchLoggedInUserOrders(userId)
        return response.data
    }
)

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchLoggedInUserOrdersAsync.pending,(state,action)=>{
           state.status='loading'
        })
        .addCase(fetchLoggedInUserOrdersAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.userOrders=action.payload
         })
    }
})

export const {} = userSlice.actions
export const selectUserOrders = (state)=>state.user.userOrders
export default userSlice.reducer;