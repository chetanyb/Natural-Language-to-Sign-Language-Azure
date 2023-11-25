const WordIndex = require("../db/models/wordIndex");
const Redis = require("ioredis");
const redis = new Redis();

async function findWordId(word) {
  // Check cache first
  const cachedId = await redis.get(word);
  if (cachedId) {
    return cachedId;
  }

  try {
    const wordRecord = await WordIndex.findOne({ where: { word } });
    if (wordRecord) {
      // Cache the result
      await redis.set(word, wordRecord.id);
      return wordRecord.id;
    } else {
      throw new Error("Word not found");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = findWordId;
