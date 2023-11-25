const videoJSON = require("../../../dataset/WLASL/WLASL_v0.3.json");
const Redis = require("ioredis");
const redis = new Redis();

async function findVideoURL(id) {
  // Check cache first
  const cachedUrl = await redis.get(id);
  if (cachedUrl) {
    return cachedUrl;
  }

  try {
    const videoURL = videoJSON[id].instances[1].url;
    if (videoURL) {
      await redis.set(id, videoURL);
      return videoURL;
    } else {
      throw new Error("Video not found");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = findVideoURL;
