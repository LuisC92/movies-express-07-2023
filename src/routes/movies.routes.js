const express = require('express');
const moviesController = require('../controllers/movies.controller')

const moviesRouter = express.Router();

//* get all movies: /movies
moviesRouter.get("/", moviesController.getAllMovies)

//* get a movie by id: /movies/:id
moviesRouter.get("/:id", moviesController.getMovieById)

//* create a new movie: /movies
moviesRouter.post("/", moviesController.createMovie)

module.exports = moviesRouter