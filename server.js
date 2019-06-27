
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





// ! I thought this would make it to where I can access site through local host 3030
// ?why can't I connect to my port
// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });