const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {

    try {
        const allWorkouts = await Workout.find({});
        res.status(200).json(allWorkouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}

const createWorkout = async (req, res) => {

    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getSingleWorkout = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }
    try {
        const workout = await Workout.findById(id);
        if (!workout)
            res.status(404).json({ error: "Can't find workout with id " + id })
        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json(error.message);
    }

}

const deleteWorkout = async (req, res) => {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout)
        res.status(404).json({ error: "Can't find workout with id " + id })

    res.status(200).json(workout)

}

const updateWorkout = async (req, res) => {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })

    if (!workout)
        res.status(404).json({ error: "Can't find workout with id " + id })

    res.status(200).json(workout)
}

module.exports = { createWorkout, getWorkouts, getSingleWorkout, deleteWorkout, updateWorkout }