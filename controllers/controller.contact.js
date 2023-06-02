const Contact = require('../models/model.contact')

const getAllContacts = (request, response) => {
  Contact.find({})
    .then(contacts => response.json(contacts))
}

const getContactByName = (request, response, next) => {
  const { name } = request.params
  const query = { name }

  Contact.findOne(query)
    .then(contact => {
      if (contact) {
        response.json(contact)
      } else {
        response.status(404).end()
      }
    })
    .catch(err => next(err))
}

const createContact = (request, response) => {
  const contact = request.body

  const newContact = new Contact({
    name: contact.name,
    lastName: contact.lastName,
    email: contact.email,
    birthday: new Date(),
    cel: contact.cel,
    address: contact.address
  })

  newContact.save()
    .then(savedContact => {
      response.json(savedContact)
    })
}

const updateContact = (request, response, next) => {
  const { id } = request.params
  const contact = request.body

  const newContactUpdate = {
    name: contact.name,
    lastName: contact.lastName,
    email: contact.email,
    birthday: new Date(),
    cel: contact.cel,
    address: contact.address
  }

  Contact.findByIdAndUpdate(id, newContactUpdate, { new: true })
    .then(updateContent => {
      response.json(updateContent)
    })
    .catch(err => next(err))
}

const deleteContact = (request, response, next) => {
  const { id } = request.params
  Contact.findByIdAndDelete(id)
    .then(() => response.status(204).end())
    .catch(err => next(err))
}

module.exports = {
  getAllContacts,
  getContactByName,
  createContact,
  updateContact,
  deleteContact
}
