const { Schema } = require('mongoose')
const mongoose = require('mongoose')

var VideoSchema = new Schema(
  {
    kind: String,
    etag: String,
    nextPageToken: String,
    regionCode: String,
    pageInfo: {
      totalResults: Number,
      resultsPerPage: Number,
    },
    items : Array
    // items: {
    //   kind: String,
    //   etag: String,
    //   id: {
    //     kind: String,
    //     videoId: String
    //   },
    // }
  }
)

module.exports = mongoose.model('video', VideoSchema)