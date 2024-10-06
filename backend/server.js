require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/workouts")
const cors = require("cors")

const app = express()

app.use(cors())

// For every request, look if it has a body
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/workouts", routes)

mongoose.connect(process.env.MONG_UI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
