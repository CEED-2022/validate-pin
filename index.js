const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT // Heroku assigns you a port

import express from 'express'
import cors from 'cors'
import * as validateRoute from './routes/validate.js'

const app = express()
app.use(express.urlencoded())
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

validateRoute.install(app)

app.listen(PORT, () => {
  console.log(`App listenig at port ${PORT}`)
})
