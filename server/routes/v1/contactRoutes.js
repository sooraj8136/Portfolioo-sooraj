const contacts = require('../../controllers/contactcontroller')

const contactRouter = require('express').Router()

contactRouter.post("/contact-message", contacts)

module.exports = contactRouter