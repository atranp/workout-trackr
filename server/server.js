import express from "express";
import 'dotenv/config';


const workoutRoutes = require('./routes/workout')

// instantiate app
const app = express();

//middlewares
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.use('/api/workouts', workoutRoutes)

//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port', process.env.PORT)
})