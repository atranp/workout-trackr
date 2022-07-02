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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
});

// routes
app.use("/api/workouts", router);

// connect to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
