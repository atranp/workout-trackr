import express from "express";
import Workout from "../models/workoutModel.js";
import {
  createWorkout,
  getWorkouts,
} from "../controllers/workoutController.js";

// Instantiate router ref
const router = express.Router();

//Get all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single workouts" });
});

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
