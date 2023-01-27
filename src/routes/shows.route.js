const express = require("express");
const { showAll, getShows, getShowId } = require("../controllers/showController");
const router = express.Router();

//save shows in mongodb
router.get('/shows/all', showAll)
//get a shows
router.get("/shows", getShows)
// get show id
router.get("/shows/:id", getShowId);
  
module.exports = router