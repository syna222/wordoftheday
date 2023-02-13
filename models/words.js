const mongoose = require("mongoose");
const { Schema } = mongoose;

const wordsSchema = new Schema({
  german_word: { type: String, required: true },
  english_translation: { type: String, required: true },
  bosnian_translation: { type: String },
  polish_translation: { type: String },
  hindi_translation: { type: String },
});

module.exports = mongoose.model("words", wordsSchema);