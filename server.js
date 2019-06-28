
// first thing is require all dependencies, node packages
var express = require("express");

// ?is morgan a middle man for db and front end? why is it called a logger?
var logger = require("morgan");

var mongoose = require("mongoose");


// ?I can't figure out how to find port...do I have to set my own port? I tried running node server.js but I'm still not getting a port
var PORT = 3030;

// path to models folder and every thing in it
var db = require("./models");


// initializes express, also referenced npm express doc
var app = express();




// *this is from npm morgan, needed to initialize 

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// ? I HAVE NO IDEA WHAT THIS IS DOING BESIDES POSSIBLY CONNECTING TO A RANDOM DB
mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true });


// ! I thought this would make it to where I can access site through local host 3030

// ?why can't I connect to my port


// *JUST NEEDED TO ADD MORGAN LOGGER APP RUNS ON 3030 NOW BOOYAH
// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

