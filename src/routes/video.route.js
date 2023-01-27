const express = require("express");
const { search } = require("../controllers/videoController");

const router = express.Router();

router.get('/search/:query',search)

module.exports = router;