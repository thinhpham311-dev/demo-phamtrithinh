import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'products',
        path: '/products',
        component: React.lazy(() => import('views/products/ProductList')),
        authority: [],
    },
    {
        key: 'addproduct',
        path: '/products/add',
        component: React.lazy(() => import('views/products/ProductNew')),
        authority: [],
    },
    {
        key: 'products',
        path: '/products/edit/:productId',
        component: React.lazy(() => import('views/products/ProductEdit')),
        authority: [],
    },

]