const router = require("express").Router();
const wordsController = require("../../controllers/wordsController");

// Matches with "/api/words"
router.route("/")
  .get(wordsController.findAll)
  .post(wordsController.create);

/*
Problem: it's not going to be that simple.
There will be relationships between words and lists.
The user selects a list; the client will then ask the server for all the data
on all the words *in the list.* (Or maybe use lazy loading?)
Anyway, not for all the words evarrrr.

A given list holds multiple words (obvs).
A given word can appear on multiple lists.
It's not a one-to-one association.

...but that's ok. Just list the refs to words within the List model.
I don't anticipate a need to ever know which lists a word belongs to
(and if so it's an easy search); we mainly need to know which words belong to
a given list.
*/

// Matches with "/api/words/:id"
router
  .route("/:id")
  .get(wordsController.findById)
  .put(wordsController.update)
  .delete(wordsController.remove);

module.exports = router;
