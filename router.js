const apiRoutes = express.Router();

module.exports = app => {
  // do the routing

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
}

// MODELS
// Word: has string, path to audio, and example string
// User: has "display name", email, pic?, score/stats data, current word list (maybe list of favorite lists?), position in list

// Stats and user feedback:
// visual indication of progress through list
// total right, but also length of "winning streak"
// audio feedback on right and wrong (make it subtle)
// more rewarding (engaging?) animations, e.g. Lexia. Can there be narrative?