const router = require("express").Router();
const notesController = require("../controllers/notes-controller");

router
  .route("/")
  .get(notesController.getSpecificNotes)
  .post(notesController.addOneNote);

router.route("/:id").delete(notesController.deleteOneNote);

module.exports = router;
