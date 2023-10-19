const axios = require("axios");
require("dotenv").config();
const { AZURE_ENDPOINT, AZURE_KEY } = process.env;

async function analyzeText(text) {
  const response = await axios.post(
    `${AZURE_ENDPOINT}text/analytics/v3.0/languages`,
    { documents: [{ id: "1", text }] },
    {
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

module.exports = { analyzeText };
