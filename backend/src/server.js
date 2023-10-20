const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const convert = require("./routes/nl2asl");

app.use(express.json());

app.use("/app", convert);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
