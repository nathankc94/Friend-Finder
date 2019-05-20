// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// start the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
