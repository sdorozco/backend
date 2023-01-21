import express from "express";
import showSchema from './src/models/shows.js'

const router = express.Router();
// url
const URL = 'http://api.tvmaze.com/shows/';
//save shows in mongodb
app.get('/shows/all', (req, res, next) => {
    async.timesLimit(numTvShows, 2, (i, callback) => {
        setTimeout(function () {
            var options = {
                url: URL + (i + 1) + "?embed[]=episodes&embed[]=cast",
            }
            request(options, (error, response, body) => {
                var result = JSON.parse(body)
                var data = new showSchema({
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

//get a shows
router.get("/shows", (req, res) => {
    showSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  //
router.get("/shows/:id", (req, res) => {
    const { id } = req.params;
    showSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
export default router;