import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAllProducts,fetchProductsByFilter} from './ProductListApi'

const initialState={
products: [],
  status: 'idle',
  totalItems:0
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
    async ({filter,sort,pagination})=>{
        const response = await fetchProductsByFilter(filter,sort,pagination)
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
         state.products=action.payload.products
         state.totalItems=action.payload.totalItems
        })
        // builder.addCase(fetchAllProductsAsync.rejected,(state,action)=>{})
    }
})

export const {} = ProductSlice.actions

// global state
 export const selectAllProduct = (state)=>state.product.products
 export const selectTotalItems = (state)=>state.product.totalItems
export default ProductSlice.reducer