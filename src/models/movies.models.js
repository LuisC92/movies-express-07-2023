const database = require("../../database-config");

const getAll = () => {
  return database.query("SELECT * FROM movies")
    .then(([results]) => results);
};

const getSingleMovie = (id) => {
    return database.query(`SELECT * FROM movies WHERE id = ${id}`)
        .then(([results]) => results);
}

const create = (body) =>{
    // INSERT INTO movies (title, director, year, color) VALUES("Your Nightmare","me", "2023", 1);
    // INSERT INTO movies SET ("Your Nightmare","me", "2023", 1)
    return database.query("INSERT INTO movies SET ?", body)
        .then(([results]) => results);
}

module.exports = {
    getAll,
    getSingleMovie,
    create,
};
