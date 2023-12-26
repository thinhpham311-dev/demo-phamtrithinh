import { createSlice } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'productList/state',
    initialState: {
        view: 'grid',
        deleteConfirmation: false,
        selectedProduct: '',
        query: {
            order: 'asc',
        },
        loading: false,
    },
    reducers: {
        toggleView: (state, action) => {
            state.view = action.payload
        },
        toggleDeleteConfirmation: (state, action) => {
            state.deleteConfirmation = action.payload
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
    },
})

export const {
    toggleView,
    toggleDeleteConfirmation,
    setSortedColumn,
    setSelectedProduct
} = stateSlice.actions

export default stateSlice.reducer
