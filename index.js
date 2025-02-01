import express from 'express'
import mongoose from 'mongoose'
import drink from './models/drink.js'
import 'dotenv/config'
import drinkRoutes from './routes/routes.js'
import connectDB from './db.js'

const app = express()

// middleware
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("you hit a route")
    next()
})//showing what route was hit


// routes
app.use('/drinks', drinkRoutes)


// connect to DB and port listening
connectDB(app)

// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log('MongoDB Connected & listening on port: ',process.env.PORT)
//         })
//     }).catch(err => console.log(err.message))