const jsonFind = require('json-find');

// accepts query word, outputs augmented object to be the new req.body
const oedCall = require('./helpers/oedCall');

const bundle = (req) => {
  // pass input word to oedCall to fetch OED data
  oedCall.lookup(req.body.word, (data) => {
    const doc = jsonFind(data);

    // find audio, add to req.body
    req.body.audio_path = doc.findValues('audioFile').audioFile;

    // find and add definitions (an array)
    req.body.definitions = doc.findValues('definitions').definitions;
    // TODO: consider harvesting more definitions, giving the user the option to cyle through multiples.
    // It can't be done with doc.findValues('definitions', 'definitions', 'definitions'), though.

    // find and add examples
    // for prop 'examples', OED returns an array of objecs, each with prop 'text'
    req.body.examples = [];
    const examplesArray = doc.findValues('examples').examples;
    for (let i = 0; i < examplesArray.length; i++) {
      const exampleObj = examplesArray[i];
      req.body.examples.push(exampleObj.text);
    }
  });
}

module.exports = bundle;