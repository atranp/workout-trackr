import express from "express";
import Workout from "../models/workoutModel.js";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
} from "../controllers/workoutController.js";

// Instantiate router ref
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

export default router;
