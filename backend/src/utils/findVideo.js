const videoJSON = require("../../../dataset/WLASL/WLASL_v0.3.json");

async function findVideoURL(id) {
  try {
    const videoURL = await videoJSON[id].instances[0].url;
    if (videoURL) {
      return videoURL;
    } else {
      throw new Error("Video not found");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = findVideoURL;
