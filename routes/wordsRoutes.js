const express = require("express");
const app = express.Router();

const { getAllWords, addWord, getOneWord } = require("../controllers/wordsControllers");

app.get("/", getAllWords);
app.post("/add", addWord);
app.get("/:param", getOneWord);

module.exports = app;
