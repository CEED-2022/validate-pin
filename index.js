const DEFAULT_PORT = 8080
const DEFAULT_HOST = '0.0.0.0'
const PORT = process.env.PORT || DEFAULT_PORT
const HOST = process.env.HOST || DEFAULT_HOST

import express from 'express'
import cors from 'cors'
import * as validateRoute from './routes/validate.js'

const app = express()
app.use(express.urlencoded({ extended: true}))
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

validateRoute.install(app)

app.listen({port: PORT, host: HOST }, () => {
  console.log(`App listenig at port ${PORT}`)
})
