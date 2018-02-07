const jsonFind = require('json-find');

// accepts query word, outputs augmented object to be the new req.body
const oedCall = require('./helpers/oedCall');

const bundle = (req) => {
  // pass input word to oedCall to fetch OED data
  oedCall.lookup(req.body.word, (data) => {
    console.log('oedCall returned:', data);
    const doc = jsonFind(data);
    // find audio
    req.body.audio_path = doc.findValues('audioFile');
    // TESTING
    console.log('path:', req.body.audio_path);
  });
}

module.exports = bundle;