module.exports = (error, request, response) => {
  console.error(error)
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'id used is misused' })
  } else {
    response.status(500).end()
  }
}
