import ApiService from "./ApiService"


export async function apiGetProducts(data) {
    return ApiService.fetchData({
        url: '/products',
        method: 'post',
        data
    })
}

export async function apiDeleteProduct(data) {
    return ApiService.fetchData({
        url: '/products/delete',
        method: 'delete',
        data
    })
}

export async function apiGetProduct(params) {
    return ApiService.fetchData({
        url: '/product',
        method: 'get',
        params
    })
}

export async function apiPutProduct(data) {
    return ApiService.fetchData({
        url: '/products/update',
        method: 'put',
        data
    })
}

export async function apiCreateProduct(data) {
    return ApiService.fetchData({
        url: '/products/create',
        method: 'post',
        data
    })
}
