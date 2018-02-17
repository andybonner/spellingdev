const jsonFind = require('json-find');

// accepts query word, retrieves data from OED, and executes callback
const oedCall = require('./helpers/oedCall');

const bundle = (obj) => {
  // pass input word to oedCall to fetch OED data
  oedCall.lookup(obj.word, (data) => {
    const doc = jsonFind(data);

    // find audio, add to obj
    obj.audio_path = doc.findValues('audioFile').audioFile;

    // find and add definitions (an array)
    obj.definitions = doc.findValues('definitions').definitions;
    // TODO: consider harvesting more definitions, giving the user the option to cyle through multiples.
    // It can't be done with doc.findValues('definitions', 'definitions', 'definitions'), though.

    // find and add examples
    // for prop 'examples', OED returns an array of objecs, each with prop 'text'
    obj.examples = [];
    const examplesArray = doc.findValues('examples').examples;
    for (let i = 0; i < examplesArray.length; i++) {
      const exampleObj = examplesArray[i];
      obj.examples.push(exampleObj.text);
    }
  });
}

module.exports = bundle;