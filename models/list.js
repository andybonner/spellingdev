const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: String, required: true },
  words: [{
    type: Schema.Types.ObjectId, ref: 'Word'
  }],
  date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", listSchema);

module.exports = List;
