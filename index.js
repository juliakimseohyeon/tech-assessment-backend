const express = require("express");
const app = express();
const notesRoutes = require("./routes/notes-routes");
require("dotenv").config();

const port = process.env.PORT || 5050;
app.use(express.json());

app.use("/", notesRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
