const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

// conexión a MongoDB
mongoose.connect(connectionString)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error:', err))
