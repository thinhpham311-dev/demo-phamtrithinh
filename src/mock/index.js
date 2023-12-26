
import { createServer } from 'miragejs'
import appConfig from 'configs/app.config'

import { signInUserData } from './data/authData'
import { productsData } from './data/productsData'

import { authFakeApi, productsFakeApi } from './fakeApi'

const { apiPrefix } = appConfig


export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                productsData,
                signInUserData,
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough(request => {
                let isExternal = request.url.startsWith('http')
                return isExternal
            })
            this.passthrough()

            productsFakeApi(this, apiPrefix)
            authFakeApi(this, apiPrefix)
        },
    })
}