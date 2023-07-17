require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const app = express();

const mongoose = require('mongoose')

app.use(express.json());

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on " + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {

    res.json({ message: "welcome to the app " })
})


