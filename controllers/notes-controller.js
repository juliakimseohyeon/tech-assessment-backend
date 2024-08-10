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

// Get specific notes
const getSpecificNotes = async (req, res) => {
  const query = req.query.query;
  console.log("request: ", req);
  console.log("query is: ", query);
  try {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const response = notes.filter((note) =>
        note.note.toLowerCase().includes(lowerCaseQuery)
      ); // Make query case insensitive
      console.log("Response is:", response);
      res.send(response);
    } else {
      res.send(notes); // Send back all notes if query is not provided
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};

// Add one note
const addOneNote = async (req, res) => {
  const newNote = {
    id: uuidv4(),
    note: req.body.note,
    collaborator: req.body.collaborator,
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
  getSpecificNotes,
  addOneNote,
  deleteOneNote,
};
