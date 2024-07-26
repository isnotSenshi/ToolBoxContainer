const axios = require('axios')
const getFilesService = require('./getFilesService.js')

jest.mock('axios')

describe('Data service', () => {
	test('getFilesService API', async () => {
		const mockData = {
			files: ["test1.csv", "test2.csv", "test3.csv", "test18.csv", "test4.csv", "test5.csv", "test6.csv", "test9.csv", "test15.csv"]
		}

		axios.mockResolvedValueOnce({ data: mockData })

		const files = await getFilesService()

		expect(files).toEqual(mockData.files)
	})

})
