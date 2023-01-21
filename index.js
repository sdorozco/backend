import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import async from 'async'
import request from 'request'
import Movies from './src/models/movies.js'
import Tv from './src/models/tv.js'
import dotenv from 'dotenv'
import userRoutes from './src/routes/user.js'
import showRoutes from './src/routes/shows.js'
const app = express()
app.use(express.json());
app.use(cors())
dotenv.config();

const api_key = '?api_key=7be72508776961f3948639fbd796bccd'
const numTvShows = 1000
// const url = "mongodb://localhost:27017/netflix-clone"
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

connect()

//middleware
app.use('/api',userRoutes);
app.use('/api',showRoutes);

//routes
app.get('/',(req,res)=>{
    res.send("Welcome to my API");
});

//show movie for id
app.get("/movies/:id", (req, res, next) => {
    Movies.find({ 'id': { $in: [req.params.id] } }, function (err, movies) {
        res.json(movies)
    })
})
app.listen(5000, () => {
    console.log('Server started on port 5000')
})