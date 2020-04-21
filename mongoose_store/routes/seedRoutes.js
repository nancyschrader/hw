const express = require("express");
const router = express.Router();
// const seed = require("../db/seed.js")
const seedController = require('../controllers/seedController')


router.get("/", seedController.seed);


module.exports = router;