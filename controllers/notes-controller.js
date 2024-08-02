const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const notes = JSON.parse(fs.readFileSync("./data/notes.json"));

// Get all notes
const getAllNotes = async (_req, res) => {
  try {
    res.send(notes);
  } catch (err) {
    console.log(err);
  }
};

// Add one note
const addOneNote = async (req, res) => {
  const newNote = {
    id: uuidv4(),
    note: req.body.note,
    collaborator: "",
    timestamp: Date.now(),
  };
  try {
    notes.push(newNote);
    fs.writeFileSync("./data/notes.json", JSON.stringify(notes));
    res.send(notes);
  } catch (err) {
    console.error(err);
  }
};

// Delete one note
const deleteOneNote = async (req, res) => {
  try {
    const updatedNotes = notes.filter((note) => note.id !== req.params.id);
    console.log("updated notes: ", updatedNotes);
    fs.writeFileSync("./data/notes.json", JSON.stringify(updatedNotes)); // Write the updated array back to the JSON file
    res.send(notes);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllNotes,
  addOneNote,
  deleteOneNote,
};
