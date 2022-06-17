import { Server, Response } from 'miragejs'

import json from './mockData/invoices-mockdata.json'

export function makeServer({ environment = 'development' } = {}) {

	let server = new Server({
		
		environment,

		routes() {

			this.namespace = 'api'

			this.get('/invoice', () => {
				
				return new Response(200, {}, { invoicesArr: json })
			})

		},
	})

	return server
}