const router = require("express").Router();
const notesController = require("../controllers/notes-controller");

router
  .route("/")
  .get((req, res) => {
    if (req.query.query) {
      // If query parameter exists, call getSpecificNotes
      notesController.getSpecificNotes(req, res);
    } else {
      // If no query parameter, call getAllNotes
      notesController.getAllNotes(req, res);
    }
  })
  .post(notesController.addOneNote);

router
  .route("/:id")
  .delete(notesController.deleteOneNote)
  .put(notesController.updateOneNote);

module.exports = router;
