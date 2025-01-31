import express from 'express'
import mongoose from 'mongoose'

import 'dotenv/config'

const app = express()
const port = 8080

app.use(express.json())

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))



app.listen(port, () => {
    console.log('listening on port: ', port)
})