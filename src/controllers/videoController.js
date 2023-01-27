const videoSchema = require("../models/video.js");
const async = require("async");
const request = require("request");

const search = (req = request, res) => {
  const API = process.env.API_KEY;
  const URL = process.env.URL_YOUTUBE;
  const { query } = req.params;
  var options = {
    url: URL + "?key=" + API + "&q=" + query,
  };
  request(options, (error, response, body) => {
    var result = JSON.parse(body);
    console.log(result.items)
    let data = videoSchema({
      kind: result.kind,
      etag: result.etag,
      nextPageToken: result.nextPageToken,
      regionCode: result.regionCode,
      pageInfo: {
        totalResults: result.pageInfo.totalResults,
        resultsPerPage: result.pageInfo.resultsPerPage,
      },
      items : result.items,
    //   items: {
    //     kind: result.items.kind,
    //     etag: result.items.etag,
    //     id: {
    //       kind: result.items.kind,
    //       videoId: result.items.videoId,
    //     },
    //   },
    });
    res.json(data)
  });
};

module.exports = {
  search,
};
