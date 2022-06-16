import express from "express";
import 'dotenv/config';

// instantiate app
const app = express();

//middlewares
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

//listen for requests
app.listen(process.env.PORT, ()=> {
    console.log('Listening on port', process.env.PORT)
})