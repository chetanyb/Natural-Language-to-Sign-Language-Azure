const express = require("express");
const WordIndex = require("../db/models/wordIndex");

const app = express();

app.use(express.json());
app.get("/word-id", async (req, res) => {
  const { word } = req.query;
  if (!word) {
    res.status(400).send("Missing word parameter");
    return;
  }

  try {
    const wordRecord = await WordIndex.findOne({ where: { word } });
    if (wordRecord) {
      res.json({ id: wordRecord.id });
    } else {
      res.status(404).send("Word not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
