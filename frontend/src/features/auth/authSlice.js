import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { checkUser, createUser, updateUser } from "./authApi"


const initialState={
    loggedInUser:null,
    status:'idle',
    error:null
}

export const createUserAsync=createAsyncThunk(
    'user/createUser',
    async(userData)=>{
        const response = await createUser(userData)
        return response.data
    }
)

export const checkUserAsync=createAsyncThunk(
    'user/checkUser',
    async(loginInfo)=>{
        const response = await checkUser(loginInfo)
        return response.data
    }
)

export const updateUserAsync=createAsyncThunk(
    'user/updateUser',
    async(update)=>{
        const response = await updateUser(update)
        return response.data
    }
)

export const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createUserAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(createUserAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.loggedInUser=action.payload
        })
        .addCase(checkUserAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(checkUserAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.loggedInUser=action.payload
        })
        .addCase(checkUserAsync.rejected,(state,action)=>{
            state.status='idle'
            state.error=action.error
        })
        .addCase(updateUserAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(updateUserAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.loggedInUser=action.payload
        })
    }
})

export const {} = authSlice.actions
export const selectLoggedInUser = (state)=>state.auth.loggedInUser
export const selectError=(state)=>state.auth.error
export default authSlice.reducer