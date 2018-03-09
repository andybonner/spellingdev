const oedBundle = require('./oedBundle');
const wordsController = require('../controllers/wordsController');
const listsController = require('../controllers/listsController');

module.exports = (req, res) => {
  // extract wordlist from client req. This is an array of word strings.
  // TODO: make sure client side has performed validation to clean non-alphanumerics, split string, and spellcheck
  
  // map array of strings to array of objects
  const wordCollection = req.body.words.map((element) => {
    const newObj = {};
    newObj.word = element;
    // TODO: consider doing all the work here?
    return newObj;
  });

  // for each obj in array, send to oedBundle for external data
  for (let i = 0, length = wordCollection.length; i < length; i++) {
    // pass object to oedBundle, which will pack OED data into it
    oedBundle(wordCollection[i]);
  }

  // send entire array of word objects to wordsController's insertMany method
  wordsController.insertMany(wordCollection, (dbDocs) => {
    // dbDocs is an array of the resultant doc objects
    // save word IDs to an array, to be added to list
    const updateObj = {
      words: []
    }
    for (let i = 0, length = wordCollection.length; i < length; i++) {
      const wordObj = wordCollection[i];
      updateObj.words.push(wordObj._id);
    }
    // add IDs of new words as refs in List
    // req.body.listID holds ID of relevant list
    listsController.update(req.body.listID, updateObj, (dbList) => {
      // return updated list to the client
      res.json(dbList);
    })
    
  });

}