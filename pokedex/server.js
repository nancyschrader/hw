// Load express:
const express = require("express");
const app = express();

// Set the web server port:
const port = 3000;

// Load methodOverride middleware so you can make delete, put, and
// patch requests from web pages:
const methodOverride = require("method-override");


const Pokemon = require("./models/pokemon.js");

// Load body parser middleware:
app.use(express.urlencoded({ extended: false }));

// Load methodOverride as middleware to support ?_method=<METHOD> query strings:
app.use(methodOverride("_method"));

// Define one or more routes:

// NEW
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

// EDIT
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemon: Pokemon[req.params.id],
    index: req.params.id
  });
});

// UPDATE
app.put("/pokemon/:id", (req, res) => {
  Pokemon[req.params.id] = req.body;
  res.redirect("/pokemon");
});

// SHOW
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", { pokemon: Pokemon[req.params.id] });
});

// DESTROY
app.delete("/pokemon/:id", (req, res) => {
  pokemon.splice(req.params.id, 1); //remove the item from the array
  res.redirect("/pokemon"); //redirect to index page
});

// CREATE
app.post("/pokemon/", (req, res) => {
  let index = Pokemon.push(req.body) - 1;
  res.redirect(`/pokemon/${index}`);
});

// INDEX
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { pokemon: Pokemon });
});

// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
  console.log("Pokemons are listening on port", port);
});