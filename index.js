// index.js - RESTful Joke API Server with Swagger Documentation

import express from "express";                          // Express framework to handle HTTP requests
import bodyParser from "body-parser";                   // Middleware to parse form data from requests
import jokes from "./jokes.js";                         // Importing joke data from external module
import swaggerUi from "swagger-ui-express";             // Middleware to serve Swagger UI
import fs from "fs";                                    // File system module to read Swagger JSON
import dotenv from "dotenv";                            // Environment variable loader

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;                   // Port the server will listen on
const masterKey = process.env.MASTER_KEY;                // Secret key to authorize destructive actions

app.use(bodyParser.urlencoded({ extended: true }));      // Enable parsing of URL-encoded form data
app.use(express.json());                                 // Enable parsing of JSON bodies
app.set("view engine", "ejs");                           // Set EJS as the templating engine
app.use(express.static("public"));                       // Serve static files from the public directory  

// Home Page Route with Welcome Message
app.get("/", (req, res) => {
  res.render("index");
});

// Swagger setup
const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * GET /random
 * Returns a random joke from the jokes array
 */
app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

/**
 * GET /jokes/:id
 * Retrieves a specific joke based on the ID path parameter
 */
app.get("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.json(foundJoke);
});

/**
 * GET /filter?type=XYZ
 * Returns jokes filtered by the type provided as a query parameter
 */
app.get("/filter", (req, res) => {
  const type = req.query.type;
  const filteredJokes = jokes.filter((joke) => joke.jokeType === type);
  res.json(filteredJokes);
});

/**
 * POST /jokes
 * Adds a new joke to the jokes array
 */
app.post("/jokes", (req, res) => {
  const newJoke = {
    id: jokes.length + 1, // Basic auto-increment ID logic
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  jokes.push(newJoke);
  console.log(jokes.slice(-1));
  res.json(newJoke);
});

/**
 * PUT /jokes/:id
 * Completely replaces a joke with a new one using the ID
 */
app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type,
  };
  const searchIndex = jokes.findIndex((joke => joke.id === id));
  jokes[searchIndex] = replacementJoke;
  console.log(jokes[searchIndex]);
  res.json(replacementJoke);
});

/**
 * PATCH /jokes/:id
 * Partially updates an existing joke
 */
app.patch("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingJoke = jokes.find((joke) => joke.id === id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.text || existingJoke.jokeText,
    jokeType: req.body.type || existingJoke.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  console.log(jokes[searchIndex]);
  res.json(replacementJoke);
});

/**
 * DELETE /jokes/:id
 * Deletes a specific joke based on ID
 */
app.delete("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  if (searchIndex > -1) {
    jokes.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(400).json({
      error: `Joke with id: ${id} not found. No jokes were deleted.`
    });
  }
});

/**
 * DELETE /all?key=...
 * Deletes all jokes if a valid master key is provided
 */
app.delete("/all", (req, res) => {
  const userKey = req.query.key;
  if (userKey === masterKey) {
    jokes.length = 0; // Clear array in-place
    res.sendStatus(200);
  } else {
    res.status(400).json({
      error: `You are not authorized to perform this action.`
    });
  }
});

/**
 * Start the server
 */
app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});
