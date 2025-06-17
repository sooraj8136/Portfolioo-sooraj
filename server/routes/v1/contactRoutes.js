const contaCtcontroller = require('../../controllers/contactController')

const contactRouter = require('express').Router()

contactRouter.post("/contact-message", contaCtcontroller)

module.exports = contactRouter