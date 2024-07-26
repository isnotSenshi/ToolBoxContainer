const axios = require('axios')
const downloadFilesService = require('./donwloadFiles.js')

jest.mock('axios')

describe('Data service', () => {
	test('downloadFiles API', async () => {
		const mockData = {
			files: ["file,text,number,hex"]
		}

		axios.mockResolvedValueOnce({ data: mockData })

		const files = await downloadFilesService('test1.csv')

		expect(files).toEqual(mockData)
	})

})
