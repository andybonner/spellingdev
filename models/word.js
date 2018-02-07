const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  // the actual word:
  word: { type: String, required: true },
  // this may be a relative path to an audio file saved onto the server,
  // or an absolute path to the OED's file
  audio_path: {type: String},
  definitions: [],
  examples: [],
  date_updated: { type: Date, default: Date.now }
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
