const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./src/routes/user.route.js')
const showRoutes = require('./src/routes/shows.route.js')
const videoRoutes = require('./src/routes/video.route.js')
const app = express()
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000
dotenv.config();

// const url = "mongodb://localhost:27017/netflix-clone"
//Connect MongoDB
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

connect()
//routes
app.use('/api',userRoutes);
app.use('/api',showRoutes);
app.use('/api',videoRoutes);
//route test
app.get('/',(req,res)=>{
    res.send("Welcome to my API");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})