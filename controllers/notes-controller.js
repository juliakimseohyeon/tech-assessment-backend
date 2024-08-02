const fs = require("fs");

const notes = JSON.parse(fs.readFileSync("./data/notes.json"));

// Get all notes
const getAllNotes = async (_req, res) => {
  try {
    res.send(notes);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllNotes,
};
