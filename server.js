const express = require('express');

const server = express();

const moviesRouter = require("./src/routes/movies.routes")

const port = 8000

server.use(express.json())

server.use("/movies", moviesRouter)

server.listen(port, ()=>{
    console.log("server listening on port ", port);
})