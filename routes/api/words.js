const router = require("express").Router();
const wordsController = require("../../controllers/wordsController");
const oed = require("../../controllers/oedController");

// Matches with "/api/words"
router.route("/")
  .get(wordsController.findAll)
  .post(
    // in here:
    // 1. instead of immediately invoking wordsController.create--which is, in fact, a function with req and res params--turn this into such a function.
    // 2. take the req.body.word and send it off as a query to OED
    // 3. pad OED's data into req.body, under properties audio_path and example
    // 4. simply submit wordsController.create(req). Original HTTP req data will still be there, and wordsController will take care of the rest.
    wordsController.create
  );

// Matches with "/api/words/:id"
router
  .route("/:id")
  .get(wordsController.findById)
  .put(wordsController.update)
  .delete(wordsController.remove);

module.exports = router;
