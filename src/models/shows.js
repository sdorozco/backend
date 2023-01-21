const { Schema } = require('mongoose')
const mongoose = require('mongoose')


var showSchema = new Schema(
    {
        id: Number,
        name: String,
        image: String,
        details: {
            genres: Array,
            year: String,
            description: String,
            cast: Array,
            episodes: Array
        }
    }
)

module.exports = mongoose.model('shows', showSchema)