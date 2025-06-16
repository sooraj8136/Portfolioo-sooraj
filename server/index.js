const express = require('express')
const connectDB = require('./config/db');
const apiRouter = require('./routes');
const cors = require('cors');
require('dotenv').config();

const app = express()
connectDB()

app.use(cors({
    origin: ['http://localhost:5173','https://portfolioo-sooraj.vercel.app'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json())

app.get('/', (req, res, next) => {
    res.json("Hello world")
})

app.use("/api", apiRouter)

app.listen(process.env.PORT, (err) => {
    process.env.PORT
    if (err) {
        console.log(err)
    } else {
        console.log(`Server listening on port ${process.env.PORT}`)
    }
})

