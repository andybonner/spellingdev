// require express etc.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


// initialize express
const app = express();
// specify PORT with local and production
const PORT = process.env.PORT || 8080;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Routing
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// connect to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spellingbee");

// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});