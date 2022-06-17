import express from "express";
import router from "./routes/workout.js";
import 'dotenv/config';

// instantiate app
const app = express();

//middlewares
app.use(express.json()) // Parses incoming JSON requests and passes to req
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.use('/api/workouts', router)

//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port', process.env.PORT)
})