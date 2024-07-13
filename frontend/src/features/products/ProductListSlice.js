import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchAllProducts,fetchBrands,fetchCategories,fetchProductsByFilter,fetchProductsById} from './ProductListApi'

const initialState={
products: [],
  status: 'idle',
  totalItems:0,
  brands:[],
  categories:[],
  selectedProduct:null
}

export const fetchAllProductsAsync=createAsyncThunk(
'product/fetchAllProduct',
async()=>{
    const response = await fetchAllProducts()
    return response.data
}
)

export const fetchProductByIdAsync=createAsyncThunk(
    'product/fetchProductsById',
    async(id)=>{
        const response = await fetchProductsById(id)
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

export const fetchBrandsAsync = createAsyncThunk(
    'product/fetchBrands',
    async ()=>{
        const response = await fetchBrands()
        return response.data
    }
)

export const fetchCategoriesAsync = createAsyncThunk(
    'product/fetchCategories',
    async ()=>{
        const response = await fetchCategories()
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
        .addCase(fetchBrandsAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchBrandsAsync.fulfilled,(state,action)=>{
         state.status='idle'
         state.brands=action.payload
        })
        .addCase(fetchCategoriesAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchCategoriesAsync.fulfilled,(state,action)=>{
         state.status='idle'
         state.categories=action.payload
        })
        .addCase(fetchProductByIdAsync.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(fetchProductByIdAsync.fulfilled,(state,action)=>{
         state.status='idle'
         state.selectedProduct=action.payload
        })
        // builder.addCase(fetchAllProductsAsync.rejected,(state,action)=>{})
    }
})

export const {} = ProductSlice.actions

// global state
 export const selectAllProduct = (state)=>state.product.products
 export const selectTotalItems = (state)=>state.product.totalItems
 export const selectBrands = (state)=>state.product.brands
 export const selectCategories = (state)=>state.product.categories
 export const selectProduct = (state)=>state.product.selectedProduct
export default ProductSlice.reducer