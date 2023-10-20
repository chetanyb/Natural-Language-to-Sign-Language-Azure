const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const convert = require("./routes/nl2asl");

app.use(express.json());

app.use("/app", convert);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
