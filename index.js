const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5050;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Julia's tech assessment!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
