const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// root: loads the client.
// server-side, API routing:
// WORDS
// command to fetch a single Word (audio, example... and string?) from local database
// command to go get it from Oxford (if not found in database) and save to database
// 
// CLIENT side routing: 
// User is prompted to choose a word list.
// IF no word lists, user is prompted to upload one.
// /upload: a page to enter a list (at first a field; later use csv txt)
// state holds awareness of current list


// MODELS
// Word: has string, path to audio, and example string
// User: has "display name", email, pic?, score/stats data, current word list (maybe list of favorite lists?), position in list
// List: title?, grade level, array of words, date, maybe private/public

// Stats and user feedback:
// visual indication of progress through list
// total right, but also length of "winning streak"
// audio feedback on right and wrong (make it subtle)
// more rewarding (engaging?) animations, e.g. Lexia. Can there be narrative?