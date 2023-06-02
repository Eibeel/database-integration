require('dotenv').config()
require('./configMongo') // -> conexión instantanea a MongoDB

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes/routes')
const notFound = require('./middleware/notFound')
const handleError = require('./middleware/handleError')

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.use(notFound)
app.use(handleError)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
