const request = require('supertest')
const expressRouter = require('./express')

describe('Test express router', () => {
	test('It should response the GET method', async () => {
		const response = await request(expressRouter).get('/')
		expect(response.statusCode).toBe(200)
	})

	test('/:var should response status 404 with message "Not Found"', async () => {
		const response = await request(expressRouter).get('/any')
		expect(response.statusCode).toBe(404)
		expect(response.body.message).toBe('Not Found')
	})
})
