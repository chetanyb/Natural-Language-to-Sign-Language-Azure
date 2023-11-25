// File: backend/src/controllers/conversion.js
const findWordId = require("../utils/findWordId");
const findVideoURL = require("../utils/findVideo");
const extractNouns = require("../utils/extractNouns"); 

async function convertNL2ASL(req, res) {
  try {
    const { text } = req.body;
    const nouns = extractNouns(text);

    // If no nouns are found or use the first noun for simplicity
    const word = nouns.length > 0 ? nouns[0] : null;
    if (!word) {
      return res.status(400).json({ error: "No nouns found in the input" });
    }

    const wordId = await findWordId(word);
    const videoURL = await findVideoURL(wordId);
    res.status(200).json({ videoURL });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch ASL" });
  }
}

module.exports = {
  convertNL2ASL,
};
