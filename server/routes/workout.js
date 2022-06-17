import express from 'express';

const router = express.Router();


//Get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workouts'})
})

module.exports = router