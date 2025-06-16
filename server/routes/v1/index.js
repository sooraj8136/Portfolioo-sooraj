const contactRouter = require('./contactRoutes')

const v1Router = require('express').Router()

v1Router.use('/contact', contactRouter)

module.exports = v1Router