const request = require('supertest')
const Express = require('express')
const bodyParser = require('body-parser')
const router = require('./')
require('../globalConfig')
const app = new Express()

app.use(bodyParser.json())
app.use('/', router)

describe('Api routes', function () {
	test('GET /getFiles', async () => {
		const response = await request(app).get('/getFiles')
		expect(response.statusCode).toBe(200)
	})

	test('GET /downloadFiles case null', async () => {
		const response = await request(app).get('/downloadFiles/')
		expect(response.statusCode).toBe(404)
	})
})
