import mongoose, { Schema } from 'mongoose'

var tvSchema = new Schema(
    {
        adult: Object,
        backdrop_path: Object,
        created_by: Object,
        episode_run_time: Object,
        first_air_date: Object,
        genres: Object,
        homepage: Object,
        id: Object,
        in_production: Object,
        languages: Object,
        last_air_date: Object,
        last_episode_to_air: Object,
        name: Object,
        next_episode_to_air: Object,
        networks: Object,
        number_of_episodes: Object,
        number_of_seasons: Object,
        origin_country: Object,
        original_language: Object,
        original_name: Object,
        overview: Object,
        popularity: Object,
        poster_path: Object,
        production_companies: Object,
        production_countries: Object,
        seasons: Object,
        spoken_languages: Object,
        status: Object,
        tagline: Object,
        type: Object,
        vote_average: Object,
        vote_count: Object
    }
)

export default mongoose.model('Tv', tvSchema)