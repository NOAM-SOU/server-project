const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("hello from log");
  res.send("hello from send");
});

app.post("/", (req, res) => {
  console.log("hello from post");
  res.send("hello from post");
});

app.put("/", (req, res) => {
  console.log("hello from put");
  res.send("hello from put");
});

app.delete("/", (req, res) => {
  console.log("hello from delete");
  res.send("hello from delete");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
