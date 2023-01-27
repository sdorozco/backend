const async = require("async");
const request = require("request");
const showSchema = require("../models/shows.js");

const URL = "http://api.tvmaze.com/shows/";
const numTvShows = 50;

const showAll = (req, res, next) => {
  async.timesLimit(numTvShows, 2, (i, callback) => {
    setTimeout(function () {
      var options = {
        url: URL + (i + 1) + "?embed[]=episodes&embed[]=cast",
      };
      request(options, (error, response, body) => {
        var result = JSON.parse(body);
        if (result.image !== undefined) {
          var data = new showSchema({
            id: result.id,
            name: result.name,
            image: result.image ? result.image.original : null,
            details: {
              genres: result.genres,
              year: result.premiered,
              description: result.summary,
              cast: result._embedded ? result._embedded.cast : null,
              episodes: result._embedded ? result._embedded.episodes : null,
            },
          });
          console.log(i);
          data.save();
          callback(null, data);
        }
      });
    }, 1000);
  });
  return next();
};

const getShows = (req, res) => {
  showSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
const getShowId = (req, res) => {
  const { id } = req.params;
  showSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
module.exports = {
  showAll,
  getShows,
  getShowId,
};
