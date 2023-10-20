const findWordId = require("../utils/findWordId");
const findVideoURL = require("../utils/findVideo");

async function convertNL2ASL(req, res) {
  try {
    const { word } = await req.body;
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
