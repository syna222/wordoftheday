const express = require("express");
const app = express.Router();

const { getAllWords, addWord } = require("../controllers/wordsControllers");

app.get("/", getAllWords);
app.post("/add", addWord);

module.exports = app;
