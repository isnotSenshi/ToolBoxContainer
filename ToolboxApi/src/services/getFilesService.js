const { default: axios } = require('axios')
const globalConfig = require('../globalConfig.js')
const logger = require('../utils/logger.js')

const getFilesService = async () => {
     try {
          const url = globalConfig.getFiles
          const filesResponse = await axios({
               method: 'GET',
               url,
               headers: {
                    'Authorization': 'Bearer aSuperSecretKey',
                    'Content-Type': 'application/json'
               }
          })

          return filesResponse.data.files
     } catch (error) {
          logger(error, '/getFiles')
          return null
     }
}

module.exports = getFilesService 
