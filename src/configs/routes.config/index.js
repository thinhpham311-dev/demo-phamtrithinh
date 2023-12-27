import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [
    ...authRoute
]

export const protectedRoutes = [
    {
        key: 'products',
        path: '/list',
        component: React.lazy(() => import('views/products/ProductList')),
        authority: [],
    },
    {
        key: 'addproduct',
        path: '/add',
        component: React.lazy(() => import('views/products/ProductNew')),
        authority: [],
    },
    {
        key: 'products',
        path: '/edit/:productId',
        component: React.lazy(() => import('views/products/ProductEdit')),
        authority: [],
    },

]