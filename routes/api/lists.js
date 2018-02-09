// NB: user-specific "study lists"--problem lists, missed words--are also word lists.
// Should they exist under this model? We don't want them listed in "findAll"
// queries, populating the drop-down menu.
// Should it be a field in the model? Private, true/false?
// Should they be their own model, even if it's identical in properties?

const router = require("express").Router();
const listsController = require("../../controllers/listsController");

// Matches with "/api/lists"
router.route("/")
  .get(listsController.findAll)
  .post(listsController.create);

// Matches with "/api/lists/:id"
router
  .route("/:id")
  .get(listsController.findById)
  .put(listsController.update)
  .delete(listsController.remove);

// TODO: I'll need API routes to manually update words

module.exports = router;
