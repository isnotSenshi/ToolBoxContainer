const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	port: 3001,
	tokenUrl: 'Bearer aSuperSecretKey',
	getFiles: 'https://echo-serv.tbxnet.com/v1/secret/files',
	downloadFiles: 'https://echo-serv.tbxnet.com/v1/secret/file/'
}