import express from 'express'
import mongoose from 'mongoose'
import drink from './models/drink.js'
import 'dotenv/config'
import drinkRoutes from './routes/routes.js'
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req, method)
    next()
})

// routes
app.use('/api/drinks', drinkRoutes)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('MongoDB Connected & listening on port: ', process.env.PORT)
        })
    }).catch(err => console.log(err))