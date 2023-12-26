import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetProduct, apiPutProduct, apiDeleteProduct, apiGetProducts } from 'services/ProductService'

export const getProductList = createAsyncThunk('productList/data/getProducts', async (data) => {
    const response = await apiGetProducts(data)
    return response.data
})

export const getProduct = createAsyncThunk('productEdit/data/getProduct', async (data) => {
    const response = await apiGetProduct(data)
    return response.data
})

export const updateProduct = async (data) => {
    const response = await apiPutProduct(data)
    return response.data
}

export const deleteProduct = async (data) => {
    const response = await apiDeleteProduct(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'productEdit/data',
    initialState: {
        loading: false,
        productData: null,
        productsData: []
    },
    reducers: {
    },
    extraReducers: {
        [getProductList.fulfilled]: (state, action) => {
            state.productsData = action.payload
            state.loading = false
        },
        [getProductList.pending]: (state) => {
            state.loading = true
        },
        [getProduct.fulfilled]: (state, action) => {
            state.productData = action.payload
            state.loading = false
        },
        [getProduct.pending]: (state) => {
            state.loading = true
        }
    }
})

export default dataSlice.reducer
