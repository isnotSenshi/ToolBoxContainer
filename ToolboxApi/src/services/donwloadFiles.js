const { default: axios } = require('axios')
const globalConfig = require('../globalConfig.js')
const logger = require('../utils/logger.js')

const downloadFilesService = async (filename) => {
     try {
          const url = globalConfig.downloadFiles
          const filesResponse = await axios({
               method: 'GET',
               url: `${url}${filename}`,
               headers: {
                    'Authorization': 'Bearer aSuperSecretKey',
                    'Content-Type': 'application/json'
               }
          })
          return filesResponse.data
     } catch (error) {
          logger(error, '/getFiles')
          return null
     }
}

module.exports = downloadFilesService
