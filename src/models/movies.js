const { Schema } = require('mongoose')
const mongoose = require('mongoose')

var movieSchema = new Schema(
    {
        adult: Object,
        backdrop_path: Object,
        genre_ids: Object,
        id: Object,
        original_language: Object,
        original_title: Object,
        overview: Object,
        popularity: Object,
        poster_path: Object,
        release_date: Object,
        title: Object,
        video: Object,
        vote_average: Object,
        vote_count: Object
    }
)

module.exports = mongoose.model('Movies', movieSchema)