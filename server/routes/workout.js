import express from "express";
import Workout from "../models/workoutModel.js";

// Instantiate router ref
const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single workouts" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

export default router;
