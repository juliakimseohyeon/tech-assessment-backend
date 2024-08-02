const router = require("express").Router();
const notesController = require("../controllers/notes-controller");

router.get("/", notesController.getAllNotes);

module.exports = router;
