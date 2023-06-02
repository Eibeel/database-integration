const express = require('express')
const router = express.Router()
const contactsControllers = require('../controllers/controller.contact')

router.get('/api/contacts', contactsControllers.getAllContacts) // -> GET all contacts
router.get('/api/contacts/:name', contactsControllers.getContactByName) // -> GET contact by name
router.post('/api/contacts', contactsControllers.createContact) // -> POST new contact
router.put('/api/contacts/:id', contactsControllers.updateContact) // -> PUT contact by id
router.delete('/api/contacts/:id', contactsControllers.deleteContact) // -> DELETE contact by id

module.exports = router
