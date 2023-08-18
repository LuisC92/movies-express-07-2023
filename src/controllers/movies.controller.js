const movieModels = require("../models/movies.models");

const getAllMovies = (req, res) => {
  movieModels
    .getAll()
    .then((movies) => {
      if (movies !== null && movies.length > 0) {
        res.status(200).send(movies);
      } else {
        res.status(404).send("Movies not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving movies from database.");
    });
};

const getMovieById = (req, res) => {
  const { id } = req.params;

  movieModels
    .getSingleMovie(id)
    .then((movie) => {
      if (movie !== null && movie.length > 0) {
        res.status(200).send(movie);
      } else {
        res.status(404).send(`Movie with id ${id} not found`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving movie from database.");
    });
};

const createMovie = (req, res) => {
  const body = req.body;
  movieModels
    .create(body)
    .then((result) => {
      if (result.affectedRows > 0) {
        res
          .status(201)
          .send(
            `Your movie is created successfully with id ${result.insertId}`
          );
      } else {
        res.status(403).send("Your request is forbidden.");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating a movie in database.");
    });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
};
