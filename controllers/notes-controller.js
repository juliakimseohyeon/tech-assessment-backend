const fs = require("fs");

const notes = JSON.parse(fs.readFileSync("./data/notes.json"));

// Get all notes
const getAllNotes = async (_req, res) => {
  try {
    res.status(204).send(notes);
  } catch (err) {
    console.log(err);
  }
};

// Delete one note
const deleteOneNote = async (req, res) => {
  try {
    const updatedNotes = notes.filter((note) => note.id !== req.params.id);
    console.log("updated notes: ", updatedNotes);
    fs.writeFileSync("./data/notes.json", JSON.stringify(updatedNotes)); // Write the updated array back to the JSON file
    res.status(204).send(notes);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllNotes,
  deleteOneNote,
};
