import express from "express";
import router from "./routes/workout.js";
import mongoose from "mongoose";
import "dotenv/config";

// instantiate app
const app = express();

//middlewares
app.use(express.json()); // Parses incoming JSON requests and passes to req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", router);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
