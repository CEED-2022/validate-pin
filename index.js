const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

import express from 'express'
import * as validateRoute from './routes/validate.js'

const app = express()
app.use(express.urlencoded())

validateRoute.install(app)

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
