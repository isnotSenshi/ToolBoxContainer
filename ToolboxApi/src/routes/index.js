const express = require('express')
const indexController = require('../controllers/')

const appRouter = express.Router()

appRouter.get('/getFiles', indexController.getFiles)
appRouter.get('/downloadFiles/:filename', indexController.donwloadFiles)

module.exports = appRouter
