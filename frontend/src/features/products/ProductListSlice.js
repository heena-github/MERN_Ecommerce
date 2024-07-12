import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAllProducts,fetchProductsByFilter} from './ProductListApi'

const initialState={
products: [],
  status: 'idle',
}

export const fetchAllProductsAsync=createAsyncThunk(
'product/fetchAllProduct',
async()=>{
    const response = await fetchAllProducts()
    return response.data
}
)

export const fetchProductsByFilterAsync = createAsyncThunk(
    'product/fetchProductsByFilter',
    async ({filter,sort})=>{
        const response = await fetchProductsByFilter(filter,sort)
        return response.data
    }
)

export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllProductsAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchAllProductsAsync.fulfilled,(state,action)=>{
         state.status='idle'
         state.products=action.payload
        })
        .addCase(fetchProductsByFilterAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchProductsByFilterAsync.fulfilled,(state,action)=>{
         state.status='idle'
         state.products=action.payload
        })
        // builder.addCase(fetchAllProductsAsync.rejected,(state,action)=>{})
    }
})

export const {} = ProductSlice.actions

// global state
 export const selectAllProduct = (state)=>state.product.products
export default ProductSlice.reducer