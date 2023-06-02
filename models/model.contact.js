const { model, Schema } = require('mongoose')

// Document
const contactSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: Date, required: true },
  cel: { type: String, required: true },
  address: { type: String, required: true }
})

// sobreescribimos el objeto para eliminar props <_id, __v>
contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Model
const Contact = model('Contact', contactSchema)

module.exports = Contact
