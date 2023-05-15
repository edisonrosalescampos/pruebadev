const router            = require("express").Router();
const movieController   = require("../controllers/movie.controller"); 

// List all movies 
router.get("/", movieController.findAll);

// Create a new movie
router.post("/create", movieController.create);

module.exports = router;