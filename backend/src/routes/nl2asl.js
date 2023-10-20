const express = require("express");
const router = express.Router();
const { convertNL2ASL } = require("../controllers/conversion");

router.post("/convert", convertNL2ASL);

module.exports = router;
