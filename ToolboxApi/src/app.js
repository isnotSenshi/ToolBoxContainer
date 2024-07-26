const { port } = require('./globalConfig.js')
const expressServer = require('./express.js')
const { default: axios } = require('axios')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

axios.defaults.timeout = 25000

const server = expressServer.listen(port, () => console.log(`👾 Server running on port ${port} 👾`))

module.exports = { server }
