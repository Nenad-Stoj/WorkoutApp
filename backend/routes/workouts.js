const express = require('express');
const router = express.Router();

const Workout = require('../models/WorkoutModel')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

router.get('/', getWorkouts)

router.get('/:id', getSingleWorkout)

//Create
router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

//Edit
router.patch('/:id', updateWorkout)
module.exports = router