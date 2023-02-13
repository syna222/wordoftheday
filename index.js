const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const connectDB = require("./database.js");
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world");
});

const words = require("./routes/wordsRoutes")
app.use("/words", words)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});


