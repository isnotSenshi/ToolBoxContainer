const { mockRequest, mockResponse } = require('../utils/mockInterceptor')
const { getFiles, donwloadFiles } = require('../controllers/index')

jest.mock('../services/getFilesService.js')

describe("Check method getFilesController", () => {

     test('should return 200', async () => {
          let req = mockRequest()
          req.params.id = null
          const res = mockResponse()

          await getFiles(req, res)

          expect(res.status).toHaveBeenCalledWith(200)
          expect(res.json).toHaveBeenCalledWith({ files: undefined })
     })

     test('should return 200', async () => {
          const res = mockResponse()
          const req = { params: { filename: 'test1.csv' } }

          await donwloadFiles(req, res)
          expect(res.status).toHaveBeenCalledWith(200)
          expect(res.json).toHaveBeenCalledWith({
               files: [
                    {
                         "file": "file",
                         "lines": [
                              {
                                   "text": "text",
                                   "number": "number",
                                   "hex": "hex"
                              }
                         ]
                    }
               ]
          })
     })
})