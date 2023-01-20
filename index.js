import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import async from 'async'
import request from 'request'
import Movies from './models/movies.js'
import Tv from './models/tv.js'
import Shows from './models/shows.js'
const app = express()

app.use(cors())

const url = "mongodb+srv://Admin:Admin@cluster0.btgsx4a.mongodb.net/netflix-clone"
const api_key = '?api_key=7be72508776961f3948639fbd796bccd'
const numTvShows = 1000
// const url = "mongodb://localhost:27017/netflix-clone"
async function connect() {
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

connect()

//all movies
// app.get("/all/movies", (req, res, next) => {
//     let aux = 0
//     let page = 1
//     async.timesLimit(20, 2, (i, callback) => {
//         setTimeout(() => {
//             var options = {
//                 url: 'https://api.themoviedb.org/3/movie/popular' + api_key + '&page=1'
//             }
//             request(options, (error, response, body) => {
//                 var result = JSON.parse(body)
//                 if (response.statusCode == 200) {
//                     aux = aux + 1
//                     var data = new Movies({
//                         adult: result.results[i].adult,
//                         backdrop_path: result.results[i].backdrop_path,
//                         genre_ids: result.results[i].genre_ids,
//                         id: result.results[i].id,
//                         original_language: result.results[i].original_language,
//                         original_title: result.results[i].original_title,
//                         overview: result.results[i].overview,
//                         popularity: result.results[i].popularity,
//                         poster_path: result.results[i].poster_path,
//                         release_date: result.results[i].release_date,
//                         title: result.results[i].title,
//                         video: result.results[i].video,
//                         vote_average: result.results[i].vote_average,
//                         vote_count: result.results[i].vote_count
//                     })
//                     console.log(aux)
//                     if (aux === 20) {
//                         console.log(aux)
//                         aux = 0
//                         page = page + 1
//                     }
//                     console.log(i)
//                     data.save()
//                     callback(null, data)
//                 }
//             })
//         }, 1000);
//     })
//     return next()
// })

//fetch tv shows from tvmaze and save into mongoDB
app.get('/all', (req, res, next) => {
    async.timesLimit(numTvShows, 2, (i, callback) => {
        setTimeout(function () {
            var options = {
                url: 'http://api.tvmaze.com/shows/' + (i + 1) + "?embed[]=episodes&embed[]=cast",
            }
            request(options, (error, response, body) => {
                var result = JSON.parse(body)
                var data = new Shows({
                    id: result.id,
                    name: result.name,
                    image: result.image ? result.image.original : null,
                    details: {
                        genres: result.genres,
                        year: result.premiered,
                        description: result.summary,
                        cast: result._embedded ? result._embedded.cast : null,
                        episodes: result._embedded ? result._embedded.episodes : null
                    }
                });
                console.log(i)
                data.save()
                callback(null, data)
            });
        }, 1000)
    });
    return next()
})

app.get("/all/tv", (req, res, next) => {

    async.timesLimit(1000, 2, (i, callback) => {
        setTimeout(() => {
            var options = {
                url: 'https://api.themoviedb.org/3/tv/' + i + api_key
            }
            request(options, (error, response, body) => {
                var result = JSON.parse(body)
                if (response.statusCode == 200) {

                    var data = new Tv({
                        adult: result.adult,
                        backdrop_path: result.backdrop_path,
                        created_by: result.created_by,
                        episode_run_time: result.episode_run_time,
                        first_air_date: result.first_air_date,
                        genres: result.genres,
                        homepage: result.homepage,
                        id: result.id,
                        in_production: result.in_production,
                        languages: result.languages,
                        last_air_date: result.last_air_date,
                        last_episode_to_air: result.last_episode_to_air,
                        name: result.name,
                        next_episode_to_air: result.next_episode_to_air,
                        networks: result.networks,
                        number_of_episodes: result.number_of_episodes,
                        number_of_seasons: result.number_of_seasons,
                        origin_country: result.origin_country,
                        original_language: result.original_language,
                        original_name: result.original_name,
                        overview: result.overview,
                        popularity: result.popularity,
                        poster_path: result.poster_path,
                        production_companies: result.production_companies,
                        production_countries: result.production_countries,
                        seasons: result.seasons,
                        spoken_languages: result.spoken_languages,
                        status: result.status,
                        tagline: result.tagline,
                        type: result.type,
                        vote_average: result.vote_average,
                        vote_count: result.vote_count
                    })

                    console.log(i)
                    data.save()
                    callback(null, data)
                }
            })
        }, 1000);
    })
    return next()
})
//show movie for id
app.get("/movies/:id", (req, res, next) => {
    Movies.find({ 'id': { $in: [req.params.id] } }, function (err, movies) {
        res.json(movies)
    })
})
app.get('/movies', async (req, res) => {
    const movie = await Movies.find({})
    res.json(movie)
})
app.get('/shows', async (req, res) => {
    const show = await Shows.find({})
    res.json(show)
})
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
})