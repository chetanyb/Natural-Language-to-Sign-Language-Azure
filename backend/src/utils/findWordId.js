const WordIndex = require("../db/models/wordIndex");

async function findWordId(word) {
  try {
    const wordRecord = await WordIndex.findOne({ where: { word } });
    if (wordRecord) {
      return wordRecord.id;
    } else {
      throw new Error("Word not found");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = findWordId;
