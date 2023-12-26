import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetProducts, apiDeleteProduct } from 'services/ProductService'

export const getProductList = createAsyncThunk('productList/data/getProducts', async (data) => {
    const response = await apiGetProducts(data)
    return response.data
})

export const deleteProduct = async (data) => {
    const response = await apiDeleteProduct(data)
    return response.data
}

const dataSlice = createSlice({
    name: 'productList/data',
    initialState: {
        loading: false,
        dataProducts: [],
    },
    reducers: {},
    extraReducers: {
        [getProductList.fulfilled]: (state, action) => {
            state.dataProducts = action.payload
            state.loading = false
        },
        [getProductList.pending]: (state) => {
            state.loading = true
        }
    }

})


export default dataSlice.reducer
