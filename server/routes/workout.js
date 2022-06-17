import express from 'express';

const router = express.Router();


//Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workouts'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({msg: 'POST a single workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a workout"})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a workout"})
})

export default router;