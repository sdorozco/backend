const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const async = require('async')
const request = require('request')
const Movies = require('./src/models/movies.js')
const Tv = require('./src/models/tv.js')
const dotenv = require('dotenv')
const userRoutes = require('./src/routes/user.js')
const showRoutes = require('./src/routes/shows.js')
const app = express()
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000
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
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})