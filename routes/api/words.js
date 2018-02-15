const router = require("express").Router();
const wordsController = require("../../controllers/wordsController");
const wordMaker = require("../../services/wordMaker")

// Matches with "/api/words"
router.route("/")
  .get(wordsController.findAll)
  .post((req, res) => {
    // pass req, which contains list of words and ID of associated list, to wordMaker,
    // which will call OED for each word, bundle in additional data,
    // save entire batch via model.insertMany(), update related list with word IDs,
    // and ultimately return res to the client
    wordMaker(req, res);
  }
  );

// Matches with "/api/words/:id"
router
  .route("/:id")
  .get(wordsController.findById)
  .put(wordsController.update)
  .delete(wordsController.remove);

// TODO: I'll need API routes to manually update words

module.exports = router;
