const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

const connectDB = require("./database.js");
connectDB();

app.get("/", (req, res) => {
    res.send("Hello world");
})

const words = require("./routes/wordsRoutes")
app.use("/words", words)


app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});


