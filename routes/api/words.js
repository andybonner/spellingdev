const router = require("express").Router();
const wordsController = require("../../controllers/wordsController");
const oedBundle = require("../../services/oedBundle");

// Matches with "/api/words"
router.route("/")
  .get(wordsController.findAll)
  .post((req, res) => {
    // pass entirety of req into oedBundle for OED data to be added
    oedBundle(req);

    // send augmented req to wordsController, which will save to DB and handle res
    wordsController.create(req, res);
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
