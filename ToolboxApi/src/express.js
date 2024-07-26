const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const expressServer = express()
expressServer.disable('x-powered-by')
expressServer.use(cors())
expressServer.use(bodyParser.json())
expressServer.use(bodyParser.urlencoded({ extended: false }))
expressServer.use(cookieParser())
expressServer.use('/files', routes)
expressServer.use('/:var', ({ res }) => res.status(404).json({ code: 404, message: 'Not Found' }))
expressServer.use('/', ({ res }) => res.status(200).json({
     code: 200, message: `GET ALL FILES  /files/getFiles ----- GET SINGLE FILE  /files/downloadFiles/test1.csv`}))


module.exports = expressServer
