
export default function productsFakeApi(server, apiPrefix) {

    server.post(`${apiPrefix}/products`, (schema, { requestBody }) => {
        const { order } = JSON.parse(requestBody)
        let data = schema.db.productsData
        if (data.length > 0) {
            if (order === 'asc') {
                data = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
            }
            if (order === 'desc') {
                data = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
            }
        }
        return data
    })

    server.del(`${apiPrefix}/products/delete`, (schema, { requestBody }) => {
        const { id } = JSON.parse(requestBody)
        schema.db.productsData.remove({ id })
        return true
    })

    server.get(`${apiPrefix}/product`, (schema, { queryParams }) => {
        const id = queryParams.id
        const product = schema.db.productsData.find(id)
        return product
    })

    server.put(`${apiPrefix}/products/update`, (schema, { requestBody }) => {
        const data = JSON.parse(requestBody)
        const { id } = data
        schema.db.productsData.update({ id }, data)
        return true
    })

    server.post(`${apiPrefix}/products/create`, (schema, { requestBody }) => {
        const data = JSON.parse(requestBody)
        schema.db.productsData.insert(data)
        return true
    })

}